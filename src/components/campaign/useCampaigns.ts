import { useEffect, useState } from "react";
import client from "../axios";
import { CampaignInterface } from "./interfaces";

const useCampaigns = () => {
  const [campigns, setCampaigns] = useState<CampaignInterface[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const actions = {
    get: async () => client.get("/campaign"),
    post: async (data: CampaignInterface) => client.post("/campaign", data),
  };

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const { data } = await actions.get();
        setCampaigns(data);
      } catch (e) {
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  return { campigns, setCampaigns, isLoading, actions };
};

export default useCampaigns;
