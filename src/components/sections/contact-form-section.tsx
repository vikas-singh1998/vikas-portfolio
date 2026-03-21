import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Please add your company or project name."),
  message: z.string().min(20, "Share a bit more context so I can help."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    toast.success(`Thanks ${values.name}, your message is ready for follow-up.`);
    reset();
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <span className="section-label">Let&apos;s connect</span>
            <h2 className="text-3xl font-semibold">Available for frontend opportunities and consulting.</h2>
            <p className="text-sm leading-6">
              Reach out if you need help with frontend development, scalable product UI, secure integrations, or maintainable enterprise workflows.
            </p>
          </div>
          <div className="grid gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm">{siteConfig.email}</p>
                </div>
              </div>
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm">Professional updates and network</p>
                </div>
              </div>
            </a>
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.25rem] border border-border/70 bg-background/70 p-4"
            >
              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">GitHub</p>
                  <p className="text-sm">Code samples and project walkthroughs</p>
                </div>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <Input placeholder="Aisha Kapoor" {...register("name")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <Input type="email" placeholder="team@company.com" {...register("email")} />
              </Field>
            </div>

            <Field label="Company / Project" error={errors.company?.message}>
              <Input placeholder="Acme Product Studio" {...register("company")} />
            </Field>

            <Field label="Project Brief" error={errors.message?.message}>
              <Textarea
                placeholder="Tell me about the product, the frontend challenge, timelines, and the kind of impact you need."
                {...register("message")}
              />
            </Field>

            <Button type="submit" size="lg" className="w-full sm:w-fit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
