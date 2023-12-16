import { useEffect, useRef } from "react";
import ThumbDev1 from "../../../public/assets/imgs/bg/customar-data.png";
import ThumbDev2 from "../../../public/assets/imgs/thumb/solution.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = () => {
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
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Platform solutions
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <ul>
                  <li>+ ECO Score Card adds transparency and user trust.</li>
                  <li>+ Easy all in one regeneration credits QUDE™</li>
                  <li>+ Carbon accounting</li>
                  <li>+ Plant trees in amazing new ways</li>
                  <li>{`+ Automatic Eco tools & plugins "power ups"`}</li>
                  <li>+ Customer data</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "800", height: "auto" }}
                  src={ThumbDev1}
                  alt="Development Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev2}
                  alt="Development Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
