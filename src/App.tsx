import "./App.css";
import { CampaignList } from "./components/campaign/Campaign.list";
import { FlexColumn } from "./components/ui/Flex";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <FlexColumn className="App">
      <CampaignList />
    </FlexColumn>
  );
}

export default App;
