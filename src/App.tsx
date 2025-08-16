import "./App.css";
import {
  SectionWelcome,
  SectionAboutMe,
  SectionButtons,
  SectionNavigation,
  SectionDrag,
  SectionReorder,
  SectionInView,
  SectionPlan,
} from "./widgets";
import { ProgressBar } from "./shared/ui";

function App() {
  return (
    <>
      <ProgressBar />
      <SectionWelcome />
      <SectionAboutMe />
      <SectionPlan />
      <SectionButtons />
      <SectionNavigation />
      <SectionDrag />
      <SectionReorder />
      <SectionInView />
    </>
  );
}

export default App;
