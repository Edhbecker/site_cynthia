import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, professional } from "@/data/site-content";

const contactItems = [
  { label: "Telefone", value: contact.phone, href: contact.phoneHref, icon: Phone },
  { label: "E-mail", value: contact.email, href: contact.emailHref, icon: Mail },
  { label: "Instagram", value: contact.instagram, href: contact.instagramHref, icon: Instagram },
];

export default function ContactSection() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="relative overflow-hidden bg-rose-antique text-white">
      <div className="absolute -right-24 -top-24 size-96 rounded-full border border-white/15" aria-hidden="true" />
      <div className="absolute -right-5 -top-5 size-64 rounded-full border border-white/15" aria-hidden="true" />

      <div className="section-shell relative py-24 sm:py-32 lg:py-40">
        <p className="section-kicker text-white/70">07 — Contato</p>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 id="contact-title" className="max-w-5xl font-playfair text-[clamp(3.3rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.05em]">
              Vamos conversar sobre
              <span className="block font-normal italic text-ink">o seu projeto?</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl">
              Tem uma ideia, um ambiente para transformar ou quer conhecer melhor
              o meu trabalho? Entre em contato e vamos explorar juntos as
              possibilidades para o seu espaço.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-ink px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-rose-antique"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Conversar pelo WhatsApp
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <address className="not-italic">
            <div className="border-t border-white/30">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Instagram" ? "_blank" : undefined}
                  rel={item.label === "Instagram" ? "noreferrer" : undefined}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-white/30 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                >
                  <item.icon className="size-5 text-ink" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-white/65">{item.label}</span>
                    <span className="mt-1 block break-all font-medium sm:text-lg">{item.value}</span>
                  </span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ))}
              <div className="grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-white/30 py-5">
                <MapPin className="size-5 text-ink" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/65">Localização</span>
                  <span className="mt-1 block font-medium sm:text-lg">{professional.location}</span>
                </span>
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
