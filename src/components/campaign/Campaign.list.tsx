import { useEffect, useRef } from "react";
import { FlexColumn } from "../ui/Flex";
import { CampingView } from "./Campaign.view";
import useCampaigns from "./useCampaigns";
import { applyAnimations } from "../animations/reveal";
import gsap from 'gsap';

export const CampaignList = () => {
  const { campigns, setCampaigns, isLoading, actions } = useCampaigns();
  const container = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      applyAnimations();
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <FlexColumn ref={container} w="100%" alignItems="center" h="100vh">
      <h1>Campaigns</h1>
      {isLoading && <h3>Loading campaigns</h3>}
      <FlexColumn className="campaign-container">
        {campigns?.map((c, index) => (
          <CampingView
            className={
              index % 2 === 0
                ? "gs_reveal gs_reveal_fromLeft gs_duration-2"
                : "gs_reveal gs_reveal_fromRight gs_duration-2"
            }
            key={c.id}
            campaign={c}
          />
        ))}
        {/*that trigger all animation aplying*/}
        <div className="gs_reveal gs_reveal_fromLeft gs_duration-2" style={{height: '0px'}}></div>
      </FlexColumn>
    </FlexColumn>
  );
};
