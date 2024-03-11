import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Correct import path for ScrollTrigger
import Image from "next/image";

import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Brand7 from "../../../public/assets/imgs/brand/7.png";
import Brand8 from "../../../public/assets/imgs/brand/8.png";
import Brand9 from "../../../public/assets/imgs/brand/9.png";

const brandImages = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9];

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingBrand = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    const timeline = gsap.timeline();

    gsap.set(".fade_bottom", { y: 30, opacity: 0 });

    if (device_width < 1023) {
      const fadeArray = gsap.utils.toArray(".fade_bottom");
      fadeArray.forEach((item, i) => {
        timeline.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
          },
        });
      });
    } else {
      timeline.to(".fade_bottom", {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: ".fade_bottom",
          start: "top center+=300",
          markers: false,
        },
      });
    }

    return () => timeline.kill(); // Properly dispose the timeline
  }, []);

  return (
    <section className="brand__area">
      <div className="container pt-140 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <h2 className="brand__title-3 title-anim">We worked with global largest brands</h2>
            <div className="brand__list-3">
              <div className="brand__item-2 fade_bottom">
                {brandImages.map((img, index) => (
                  <Image key={index} width={120} src={img} alt="Brand Logo" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBrand;
