import "./App.css";
import AutoGuruNavbar from "./components/AutoGuruNavbar";
import BrandMessage from "./components/BrandMessage";
import Quotes from "./components/Quotes";
import { FlexInline, OverdriveProvider } from "@autoguru/overdrive";
import { RelayEnvironmentProvider } from "react-relay";
import makeEnvironment from "./RelayEnvironment";

const environment = makeEnvironment();

function App() {
  return (
    <>
      <RelayEnvironmentProvider environment={environment}>
        <OverdriveProvider>
          <AutoGuruNavbar />
          <FlexInline gap="6" padding="6" justifyContent="between" spaceBetween>
            <BrandMessage />
            <Quotes />
          </FlexInline>
        </OverdriveProvider>
      </RelayEnvironmentProvider>
    </>
  );
}

export default App;
