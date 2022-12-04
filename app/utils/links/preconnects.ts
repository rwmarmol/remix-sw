import type { LinksFunction } from "@remix-run/node";

const urlToFontLink = (urls: string[], format: string) => {
  return urls.map((link) => {
    return {
      href: link,
      type: format,
    }
  });
}

const getMobileFontUrls: LinksFunction = () => {
  const fonts = [
    "/fonts/kanit/Kanit-Light.ttf",
    "/fonts/kanit/Kanit-LightItalic.ttf",
    "/fonts/kanit/Kanit-Regular.ttf",
    "/fonts/kanit/Kanit-Italic.ttf",
    "/fonts/kanit/Kanit-Medium.ttf",
    "/fonts/kanit/Kanit-MediumItalic.ttf",
  ];
  const urls = [
    ...urlToFontLink(fonts, 'truetype'),
  ]
  return urls.map((link) => {
    return {
      ...link,
      crossOrigin: "anonymous",
      as: 'font',
      rel: 'preload',
    }
  });
}

export const preconnectFonts: LinksFunction = () => {
  return [
    ...getMobileFontUrls()
  ]
}