import { FC } from "react";
import { FlexColumn, FlexRow } from "../ui/Flex";
import { CampaignInterface } from "./interfaces";

interface Props {
  campaign: CampaignInterface;
}

export const CampingView: FC<Props> = ({ campaign }) => {
  const { name, status, goalAmount, description, id } = campaign;
  return (
    <FlexRow w="100%">
      <FlexColumn w="70%">
        <span>{id}</span>
        <h2>Name: {name}</h2>
        <p>Descrition: {description}</p>
        <p>Status: {status}</p>
        <p>Goal: {goalAmount}</p>
      </FlexColumn>
      <FlexColumn>
        <button>Donate</button>
      </FlexColumn>
    </FlexRow>
  );
};
