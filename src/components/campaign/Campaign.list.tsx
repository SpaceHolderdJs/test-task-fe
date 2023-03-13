import { FlexColumn } from "../ui/Flex";
import { CampingView } from "./Campaign.view";
import useCampaigns from "./useCampaigns";

export const CampaignList = () => {
  const { campigns, setCampaigns, isLoading, actions } = useCampaigns();

  return (
    <FlexColumn w="100%" alignItems="center">
      <h1>Campaigns</h1>
      {isLoading && <h3>Loading campaigns</h3>}
      {campigns?.map((c) => (
        <CampingView key={c.id} campaign={c} />
      ))}
    </FlexColumn>
  );
};
