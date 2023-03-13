import "./App.css";
import { CampaignList } from "./components/campaign/Campaign.list";
import { FlexColumn } from "./components/ui/Flex";

function App() {
  return (
    <FlexColumn className="App">
      <CampaignList />
    </FlexColumn>
  );
}

export default App;
