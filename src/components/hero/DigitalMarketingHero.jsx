import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import Hero31 from "../../../public/assets/imgs/hero/3/1.jpg";
import Image from "next/image.js";
import Link from "next/link";

const DigitalMarketingHero = () => {
  const titleLeft = useRef();
  const titleRight = useRef();
  const heroTextAnim = useRef();

  const videoCheck = useRef();
  const videoCloseSection = useRef();
  const videoTitle = useRef();
  const heroArea = useRef();
  const wrapper = useRef();
  const heroAnchor = useRef();
  const heroAnchor1 = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let split_creatives = new SplitText(titleLeft.current, { type: "chars" });
      let split_solutions = new SplitText(titleRight.current, {
        type: "chars",
      });
      let split_text_animation = new SplitText(heroTextAnim.current, {
        type: "chars words",
      });
      gsap.set(heroAnchor.current, {
        opacity: 0,
        y: 50,
      });
      gsap.set(heroAnchor1.current, {
        opacity: 0,
        y: 50,
      });
      gsap.to(heroAnchor.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
      gsap.to(heroAnchor1.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=2");
      let tHero = gsap.context(() => {
        let HomeDigital = gsap.timeline();

        HomeDigital.from(split_creatives.chars, {
          duration: 2,
          x: 100,
          autoAlpha: 0,
          stagger: 0.2,
        });
        HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
        HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
      });
      return () => tHero.revert();
    }
  }, []);

  const openVideo = () => {
    let headerArea = document.querySelector(".header__area-3");
    let video = videoTitle.current;
    let videoClose = videoCloseSection.current;
    if (videoCheck.current.checked) {
      wrapper.current.style.zIndex = "1";
      video.style.display = "none";
      videoClose.style.display = "block";
      heroArea.current.classList.add("start-video");
      headerArea.classList.add("bg-white");
    } else {
      wrapper.current.style.zIndex = "999";
      video.style.display = "block";
      videoClose.style.display = "none";
      heroArea.current.classList.remove("start-video");
      headerArea.classList.remove("bg-white");
    }
  };

  return (
    <>
      <section className="hero__area-3" ref={heroArea}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__inner-3">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title">O1. Climate Business Solutions - XXX</h2>
                  <h3 className="sec-title title-left" ref={titleLeft}>
                    Nature <span>Based</span>
                  </h3>
                  <h3 className="sec-title title-right" ref={titleRight}>
                    Offsets
                  </h3>
                </div>
                <div>
                  <Link style={{ width: "310px", padding: "20px", border: "1px solid gray", color: "black", zIndex: "9999", borderRadius: "50px", display: "inline-block", textAlign: "center" }} href="/eco-score-card">
                    Explore Power Ups & Eco Score Card
                  </Link>
                  <br />
                  <br />
                  <Link style={{ width: "310px", padding: "20px", border: "1px solid gray", color: "black", zIndex: "9999", borderRadius: "50px", display: "inline-block", textAlign: "center" }} href="/land-partner">
                    Discover Land Management Solutions
                  </Link>
                </div>
                {/* <Link href="management-framework"> */}
                <div className="scroll-down">
                  <button>
                    <Image priority style={{ width: "auto", height: "auto" }} src={ArrowDownSm} alt="arrow icon" />
                  </button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper" ref={wrapper}>
          <div className="video-info">
            <div className="video-intro">
              <input id="video_check" type="checkbox" ref={videoCheck} onClick={openVideo} />
              <div className="intro-title">
                <h4 className="video-title" ref={videoTitle}>
                  Watch <span>video intro</span>
                </h4>
                <h4 className="video-title close-video-title" ref={videoCloseSection}>
                  Close <span>video intro</span>
                </h4>
              </div>
              <div className="video">
                <video src="assets/video/hero-3.mp4" loop muted autoPlay playsInline></video>
              </div>
            </div>
          </div>
        </div>

        <div className="hero3-img-ani">
          <Image priority width={1195} style={{ height: "auto" }} src={Hero31} alt="Hero Image" className="hero3-img" />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingHero;
