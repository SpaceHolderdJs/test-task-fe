import { FC, useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { BiWindowClose } from "react-icons/bi";
import { FlexColumn, FlexRow } from "../ui/Flex";
import { CampaignInterface } from "./interfaces";
import { DonationForm } from "../donation/Donation.form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "auto",
  },
};

Modal.setAppElement("#root");

interface Props {
  campaign: CampaignInterface;
  className: string;
}

export const CampingView: FC<Props> = ({ campaign, className }) => {
  const { name, status, goalAmount, description, id } = campaign;
  const [isDonationModalOpen, setIsDonationModalOpen] =
    useState<boolean>(false);

  return (
    <FlexRow
      w="90%"
      p="10px"
      m="10px"
      bg="lightgrey"
      className={className}
    >
      <FlexColumn w="70%">
        <span>{id}</span>
        <h2>Name: {name}</h2>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
        <p>Goal: {goalAmount}</p>
      </FlexColumn>
      <FlexColumn w="30%" alignItems="flex-end">
        <button onClick={() => setIsDonationModalOpen(true)}>Donate</button>
      </FlexColumn>
      <Modal
        isOpen={isDonationModalOpen}
        style={customStyles}
        onRequestClose={() => setIsDonationModalOpen(false)}
      >
        <FlexRow w="100%" justifyContent="flex-end">
          <BiWindowClose
            cursor="pointer"
            size={25}
            onClick={() => setIsDonationModalOpen(false)}
          />
        </FlexRow>
        <DonationForm campaignId={campaign.id} />
      </Modal>
    </FlexRow>
  );
};