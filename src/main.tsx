import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import { ThemeContextProvider } from "./assets/contexes/site/theme.context.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Provider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
);
