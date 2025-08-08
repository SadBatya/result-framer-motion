import "./App.css";
import {
  SectionWelcome,
  SectionAboutMe,
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
      <SectionAboutMe />
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
