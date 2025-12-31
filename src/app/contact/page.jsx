import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <div className="bg-[#e8f6f6]">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}
