import { IdType } from "../../interfaces";
import { DonationInterface } from "../donation/interfaces";

export interface CampaignInterface {
  id: IdType;
  name: string;
  description: string;
  goalAmount: string;
  status: "active" | "fraud" | "successful";
  donations: DonationInterface[];
}
