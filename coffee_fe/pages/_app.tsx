import '../styles/globals.css'
import type { AppProps } from 'next/app'
import wrapper from "../reducers/store/configureStore";
import {CssBaseline} from "@mui/material";

function RootApp({ Component, pageProps }: AppProps) {
  return(
      <>
          <CssBaseline />
          <Component {...pageProps} />
      </>
  );
}

export default wrapper.withRedux(RootApp);
