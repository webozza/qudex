import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import Head from "next/head";

const CareerDark = () => {
  return (
    <div>
      <Head>
        <title>Career Dark</title>
        <meta name="description" content="Career Dark Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <CareerHero />
          <CareerGallery />
          <Career1 />
          <CareerBenefit />
        </RootLayout>
      </main>
    </div>
  );
};

export default CareerDark;
