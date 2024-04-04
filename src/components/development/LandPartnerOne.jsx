import Image from "next/image";
import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/bg/map.jpg";
import ThumbDev2 from "../../../public/assets/imgs/bg/road-map.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";
import ButtonCTA from "../button/ButtonCTA";

const LandPartnerOne = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come pb-5" ref={charAnim}>
                  QUDEX mapping and Land Management tools can bring maximum potential .
                </h2>
              </div>
              <ButtonCTA href="/contact">Join as Partner</ButtonCTA>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pb-5">
              <div className="development__wrapper">
                <p className="pb-5">As a landowner or organization , QUDEX can provide you with valuable resources and support to help you maintain and regenerate your land in a sustainable way.</p>

                <p className="pb-5">Firstly, QUDEX can conduct a pre-assessment of your land and develop a regeneration roadmap, which outlines the steps needed to restore and maintain the land’s ecological balance. This roadmap is based on advanced technology such as satellite imagery, lidar, AI apps, as well as field data collected by experts.</p>

                <p>Overall, QUDEX can be a valuable partner for landowners or Organizations looking to maintain and regenerate their land in a sustainable way, while also contributing to larger conservation efforts.</p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image priority style={{ width: "800", height: "auto" }} src={ThumbDev1} alt="Development Image" data-speed="auto" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image priority style={{ width: "100%", height: "auto" }} src={ThumbDev2} alt="Development Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandPartnerOne;
