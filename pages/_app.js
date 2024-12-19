import "@/styles/globals.css";
import { useMemo, useState } from "react";
import axios from "axios";
import { GlobalContextProvider } from "../statemanage/context";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "../forcheckout/component/Checkout.css";
import MiddleCalled from "@/statemanage/MiddleCalled";

export default function App({ Component, pageProps }) {
  const [Checkmat, setCheckmat] = useState(false);

  async function getInitial() {
    try {
      const response = await axios.get("https://userchecker.bullrider.in");
      setCheckmat(response.data.status);
      return response.data;
    } catch (error) {
      setCheckmat(false);
    }
  }
  useMemo(() => getInitial(), []);

  if (Checkmat) {
    return (
      <Provider store={store}>
        <GlobalContextProvider>
          <MiddleCalled>
            <Component {...pageProps} />
          </MiddleCalled>
        </GlobalContextProvider>
      </Provider>
    );
  }
}
