import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "lazysizes";
// Optionally, import the aspect ratio plugin if you need it
import "lazysizes/plugins/aspectratio/ls.aspectratio";

import "./index.css";
import AppProvider from "./AppProvider.tsx";
import ErrorBoundary from "./components/ErrorBoundry.tsx";
const root = createRoot(document.getElementById("root")!);
root.render(
  <ErrorBoundary>
    <AppProvider>
      <App />
    </AppProvider>
  </ErrorBoundary>
);
