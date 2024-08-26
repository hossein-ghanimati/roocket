import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import { Provider } from "./provider.tsx";
import { ThemeContextProvider } from "./assets/contexes/site/theme.context.tsx";
import AppWrapper from "./AppWrapper.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Provider>
        <ThemeContextProvider>
          <AppWrapper />
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
);
