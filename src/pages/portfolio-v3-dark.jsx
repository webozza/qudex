import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import PortfolioV2CTA from "@/components/cta/PortfolioV2CTA";

const PortfolioV3Dark = () => {
  return (
    <>
      <Head>
        <title>Portfolio V3 Dark</title>
        <meta name="description" content="Portfolio V3 Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DesignStudioProtfolio />
          <PortfolioV2CTA />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioV3Dark;
