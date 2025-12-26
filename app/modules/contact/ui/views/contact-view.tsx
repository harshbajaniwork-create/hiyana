import { ContactForm } from "../components/contact-form";
import { CustomersSection } from "../components/customers";
import { FAQSection } from "../components/faq";
import { OurOffice } from "../components/our-office";

export const ContactView = () => {
  return (
    <div>
      <ContactForm />
      <OurOffice />
      <FAQSection />
      <CustomersSection />
    </div>
  );
};
