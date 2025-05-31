import { Helmet } from "react-helmet";
import ResourceList from "@/components/resources/ResourceList";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Seaholm Investing Club</title>
        <meta 
          name="description" 
          content="Access our curated collection of financial educational resources, guides, videos and tools to enhance your investing knowledge and skills."
        />
        <meta property="og:title" content="Financial Education Resources - Seaholm Investing Club" />
        <meta property="og:description" content="Access our curated collection of financial resources and educational materials." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="py-16 bg-white">
        <ResourceList />
      </section>
    </>
  );
};

export default Resources;
