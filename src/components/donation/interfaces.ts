import { IdType } from "../../interfaces";

export interface DonationInterface {
  id: IdType;
  donatorName: string;
  amount: number;
  status: string;
  campaignId: IdType;
  campaign: string;
}
