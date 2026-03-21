import { ContactFormSection } from "@/components/sections/contact-form-section";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function ContactPage() {
  usePageMeta({
    title: "Contact",
    description:
      "Contact form and professional links for frontend opportunities, consulting, and product-focused engineering work.",
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <span className="section-label">Contact</span>
        <h1 className="text-4xl font-semibold">Let&apos;s build something excellent together.</h1>
        <p className="max-w-2xl text-base leading-7">
          Whether you&apos;re hiring for a frontend role or need support on a high-impact product initiative, this contact flow is ready to go.
        </p>
      </div>
      <ContactFormSection />
    </div>
  );
}
