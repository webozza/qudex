import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Star from "../../../public/assets/imgs/qudex/star-color.png";
import Star2 from "../../../public/assets/imgs/qudex/star-without-color.png";
import Lock from "../../../public/assets/imgs/qudex/lock.png";
import Brand1 from "../../../public/assets/imgs/qudex/jjbean.png";
import Brand2 from "../../../public/assets/imgs/qudex/socailblack-Recovered.jpg";
import Brand3 from "../../../public/assets/imgs/qudex/myecodropplusapp.png";
import Brand4 from "../../../public/assets/imgs/qudex/YosemiteCleanEnergy.png";
import Brand5 from "../../../public/assets/imgs/qudex/biostewardswithtag.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link.js";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const FeaturedBusiness = () => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }

  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    const target = e.target;
    let tHero = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }

  return (
    <>
      <section className="team__area-6 pb-100">
        <div className="container line pt-100 pb-5">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
              <div>
                <h3 className="sec-title featured-business-title animation__char_come" ref={charAnim}>
                  FEATURE <br /> <span className="fea-business">BUSINESS</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="featured-business-item">
                <div className="top-content">
                  <div className="star">
                    <Image className="img-fluid" src={Star} alt="Qudex" />
                  </div>
                  <div className="image">
                    <Image className="img-fluid" src={Brand1} alt="QUDEX platform" />
                  </div>
                  <div className="text text-center">
                    <h3>JJBEAN</h3>
                    <p>Food & Beverage </p>
                  </div>
                </div>
                <div class="background-black">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text">
                      <p>Action</p>
                      <h3>9</h3>
                    </div>
                    <div class="text">
                      <p>ECO-Influence</p>
                      <h3>90</h3>
                    </div>
                    <div class="text">
                      <p>Favorited</p>
                      <h3>99</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-business-item">
                <div className="top-content">
                  <div className="star">
                    <Image className="img-fluid" src={Star} alt="Qudex" />
                  </div>
                  <div className="image">
                    <Image className="img-fluid" src={Brand2} alt="QUDEX platform" />
                  </div>
                  <div className="text text-center">
                    <h3>WE AIR</h3>
                    <p>MEDICAL</p>
                  </div>
                </div>
                <div class="background-black">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text">
                      <p>Action</p>
                      <h3>8</h3>
                    </div>
                    <div class="text">
                      <p>ECO-Influence</p>
                      <h3>98</h3>
                    </div>
                    <div class="text">
                      <p>Favorited</p>
                      <h3>99</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-business-item">
                <div className="top-content">
                  <div className="star">
                    <Image className="img-fluid" src={Star2} alt="Qudex" />
                  </div>
                  <div className="image">
                    <Image className="img-fluid" src={Brand3} alt="QUDEX platform" />
                  </div>
                  <div className="text text-center">
                    <h3>Myecodrop</h3>
                    <p>Delivery</p>
                  </div>
                </div>
                <div class="background-black">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text">
                      <p>Action</p>
                      <h3>7</h3>
                    </div>
                    <div class="text">
                      <p>ECO-Influence</p>
                      <h3>78</h3>
                    </div>
                    <div class="text">
                      <p>Favorited</p>
                      <h3>88</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-business-item">
                <div className="top-content">
                  <div className="star">
                    <Image className="img-fluid" src={Star} alt="Qudex" />
                  </div>
                  <div className="image">
                    <Image className="img-fluid" src={Brand4} alt="QUDEX platform" />
                  </div>
                  <div className="text text-center">
                    <h3>Yosemite Clean energy </h3>
                    <p>Energy</p>
                  </div>
                </div>
                <div class="background-black">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text">
                      <p>Action</p>
                      <h3>88</h3>
                    </div>
                    <div class="text">
                      <p>ECO-Influence</p>
                      <h3>99</h3>
                    </div>
                    <div class="text">
                      <p>Favorited</p>
                      <h3>78</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-business-item">
                <div className="top-content">
                  <div className="bg-lock"></div>
                  <div className="star">
                    <Image className="img-fluid" src={Star2} alt="Qudex" />
                  </div>
                  <div className="image">
                    <Image className="img-fluid" src={Brand5} alt="QUDEX platform" />
                  </div>
                  <div className="text text-center">
                    <h3>BioStewards</h3>
                    <p>Land managment </p>
                  </div>
                </div>
                <div class="background-black background-black-lock">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="text">
                      <h3>HELP UNLOCK</h3>
                    </div>
                    <div class="image">
                      <Image className="img-fluid" src={Lock} alt="Lock" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedBusiness;
