import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import ConfigContext from './utils/config/context';
import { getEnvConfig } from './utils/config/index.server';

const ABORT_DELAY = 5000;

const config = {
  localApiPrefix: getEnvConfig('localApiPrefix'),
  siteConfig: getEnvConfig('site'),
} as Record<string, any>;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false;

    const layout = renderToString(
        <ConfigContext.Provider value={config}>
            <RemixServer context={remixContext} url={request.url} />
        </ConfigContext.Provider>
    );

    const { pipe, abort } = renderToPipeableStream(
      layout,
      {
        onAllReady() {
          const body = new PassThrough();

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response('<!DOCTYPE html>' + layout, {
              status: responseStatusCode,
              headers: responseHeaders
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
