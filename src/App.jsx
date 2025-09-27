import "./App.css";
import AutoGuruNavbar from "./components/AutoGuruNavbar";
import BrandMessage from "./components/BrandMessage";
import Quotes from "./components/Quotes";
import { FlexInline, OverdriveProvider } from "@autoguru/overdrive";

function App() {
  return (
    <>
      <OverdriveProvider>
        <AutoGuruNavbar />
        <FlexInline gap="6" padding="6" justifyContent="between" spaceBetween>
          <BrandMessage />
          <Quotes />
        </FlexInline>
      </OverdriveProvider>
    </>
  );
}

export default App;
