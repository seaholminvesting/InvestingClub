import { Helmet } from "react-helmet";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Seaholm Investing Club</title>
        <meta 
          name="description" 
          content="Have questions about the Seaholm Investing Club or interested in joining? Reach out to us through our contact form or club information."
        />
        <meta property="og:title" content="Contact Us - Seaholm Investing Club" />
        <meta property="og:description" content="Get in touch with our high school finance and investing club. Send a message or find our meeting times and contact information." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about the club or interested in joining? Reach out to us!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
