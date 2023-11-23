import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogElementV2 from "@/components/blog/BlogElementV2";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const BlogV2 = () => {
  return (
    <>
      <Head>
        <title>Blog V2</title>
        <meta name="description" content="Blog V2 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <BlogElementV2 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogV2;
