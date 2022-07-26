import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// https://dev.to/sumukhakb210/using-styled-components-with-nextjs-12-and-typescript-in-2021-3439
// https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c
// @ts-ignore
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
