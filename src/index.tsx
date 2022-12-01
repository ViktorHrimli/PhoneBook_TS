import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "../src/commonStyle/Common.styled";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./Thema";
import { presister, store } from "../src/redux/store";
import { App } from "../src/components/App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presister}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyled />

            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
