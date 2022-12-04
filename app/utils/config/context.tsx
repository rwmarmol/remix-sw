import React, { useContext } from "react";

const ConfigContext = React.createContext<any>({});

export function useConfigContext() {
  const context = useContext(ConfigContext);

  return context;
}

export function ConfigWindowContext(): JSX.Element {
  const config = useConfigContext();
  return (
    <script type="text/javascript" dangerouslySetInnerHTML={{
      __html: `window.__envConfig = ${JSON.stringify(config)};`
    }} suppressHydrationWarning={true} />
  );
}

export default ConfigContext;
