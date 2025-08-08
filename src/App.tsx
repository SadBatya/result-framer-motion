import "./App.css";
import {
  SectionWelcome,
  SectionButtons,
  SectionNavigation,
  SectionText,
  SectionDrag,
  SectionReorder,
  SectionInView,
} from "./widgets";
import { ProgressBar } from "./shared/ui";

function App() {
  return (
    <>
      <ProgressBar />
      <SectionWelcome />
      <SectionButtons />
      <SectionText />
      <SectionNavigation />
      <SectionDrag />
      <SectionReorder />
      <SectionInView />
    </>
  );
}

export default App;
