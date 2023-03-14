import React, { FC, useCallback, useState } from "react";
import { FlexColumn } from "../ui/Flex";
import { DonationInterface } from "./interfaces";
import { IdType } from "../../interfaces";
import useDonations from "./useDonation";
import useCampaigns from "../campaign/useCampaigns";

const initialFormData = {
  donatorName: "",
  campaignId: "",
  amount: 0,
};

interface Props {
  campaignId: IdType;
}

export const DonationForm: FC<Props> = ({ campaignId }) => {
  const [formData, setFormData] = useState<Partial<DonationInterface>>({
    ...initialFormData,
    campaignId,
  });

  const { donatorName, amount } = formData;

  const { actions } = useDonations();
  const { setCampaigns, actions: campaignActions } = useCampaigns();

  const onSubmit = useCallback(async () => {
    if (!donatorName || !amount) return alert("Fill all the data");
    const regex = /[a-zA-Z_0-9]+/g;
    if (regex.test(donatorName))
      return alert("Donator`s name should include only letters, digits and _");

    const { data } = await actions.post(formData);
    if (data) {
      window.location.reload();
    }
  }, [actions, amount, donatorName, formData]);

  return (
    <FlexColumn w="100%" alignItems="center">
      <h3>Donation</h3>
      <input
        type="text"
        placeholder="Donator name"
        value={donatorName}
        onChange={(e) =>
          setFormData({ ...formData, donatorName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
      />
      <button onClick={onSubmit}>Donate</button>
    </FlexColumn>
  );
};
