import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import ScoreCard from "@/components/ecoScoreCard/ScoreCard";
import RootLayout from "@/components/common/layout/RootLayout";

const EcoScoreCard = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      playCursor();
    }
  }, []);

  function playCursor() {
    try {
      let client_cursor = document.getElementById("client_cursor");
      document.addEventListener("mousemove", (e) => {
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

          // Home Page Client Cursor
          if (target.closest(".testimonial__img")) {
            tl.to(
              client_cursor,
              {
                opacity: 1,
                ease: "power4.out",
              },
              "-=0.3"
            );
          } else {
            t2.to(
              client_cursor,
              {
                opacity: 0,
                ease: "power4.out",
              },
              "-=0.3"
            );
          }
        });
        return () => tHero.revert();
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Head>
        <title>Eco Score Card</title>
        <meta name="description" content="Eco Score Card Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="cursor" id="client_cursor">
          Play
        </div>
        <RootLayout header="header1" footer="footer1">
          <ScoreCard />
        </RootLayout>
      </main>
    </div>
  );
};

export default EcoScoreCard;
