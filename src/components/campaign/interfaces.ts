export interface CampaignInterface {
  id: string;
  name: string;
  description: string;
  goalAmount: string;
  status: "active" | "fraud" | "successful";
}
