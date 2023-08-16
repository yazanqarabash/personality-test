import App from "./App";
import { TestProvider } from "../contexts/TestContext";

function Layout() {
  return (
    <TestProvider>
      <App />
    </TestProvider>
  );
}

export default Layout;
