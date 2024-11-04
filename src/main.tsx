import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeContextProvider } from "./assets/contexts/site/theme.context";
import AppWrapper from "./AppWrapper";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <ThemeContextProvider>
          <AppWrapper />
        </ThemeContextProvider>
    </HashRouter>
);
