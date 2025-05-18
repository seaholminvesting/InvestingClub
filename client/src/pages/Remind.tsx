import { Helmet } from "react-helmet";
import RemindInfo from "@/components/remind/RemindInfo";
import EventList from "@/components/remind/EventList";

const Remind = () => {
  return (
    <>
      <Helmet>
        <title>Remind - InvestEd Finance Club</title>
        <meta 
          name="description" 
          content="Stay updated with the latest club events, meetings and opportunities by joining our Remind notifications system."
        />
        <meta property="og:title" content="Remind - InvestEd Finance Club" />
        <meta property="og:description" content="Never miss a meeting or event with our Remind notification system. View upcoming events and learn how to join our Remind class." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Never miss a meeting or event by joining our Remind notifications system.
            </p>
          </div>

          <RemindInfo />
          <div className="mt-12">
            <EventList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Remind;
