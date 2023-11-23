import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioElementV4 from "@/components/portfolio/PortfolioElementV4";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";

const PortfolioV4 = () => {
  return (
    <>
      <Head>
        <title>Portfolio V4</title>
        <meta name="description" content="Portfolio V4 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <PortfolioElementV4 />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV4;
