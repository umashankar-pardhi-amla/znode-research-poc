import getConfig from "next/config";

export function withTheme(gssp: (context: any) => Promise<any>) {
  return async (context: any) => {
    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

    const gsspData = await gssp(context);

    const url = new URL(`http://${context.req.headers.host}`);
    const hostWithPort = url.hostname + ":" + url.port;
    console.log(hostWithPort);
    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props,
        theme: serverRuntimeConfig.themes[hostWithPort] || "default",
      },
    };
  };
}
