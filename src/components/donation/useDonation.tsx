import { useEffect, useState } from "react";
import { CampaignInterface } from "../campaign/interfaces";
import { DonationInterface } from "./interfaces";
import client from "../axios";

const useDonations = () => {
  const [donations, setDonations] = useState<DonationInterface[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const actions = {
    get: async () => client.get("/donation"),
    post: async (data: Partial<DonationInterface>) =>
      client.post("/donation", data),
  };

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const { data } = await actions.get();
        setDonations(data);
      } catch (e) {
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  return { donations, setDonations, isLoading, actions };
};

export default useDonations;
