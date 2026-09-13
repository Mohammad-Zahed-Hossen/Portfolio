import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { SocialLinks } from "@/components/shared/social-links";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/home/hero-visual";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden py-14 sm:py-24 lg:py-28">
      <AmbientBackground variant="hero" />
      <PageContainer>
        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-7 lg:col-span-7" delay={0.04}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/70 px-3 py-1.5 text-xs font-mono uppercase tracking-[.14em] text-muted backdrop-blur-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" />AI/ML Engineering Portfolio</div>
            <div className="space-y-4"><h1 id="hero-heading" className="display-title max-w-4xl font-extrabold text-foreground">{siteConfig.name}</h1><p className="text-lg font-semibold text-accent sm:text-xl">{siteConfig.role} <span className="text-muted">·</span> {siteConfig.institution}</p></div>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-foreground/90">{siteConfig.positioningStatement}</p>
            <p className="max-w-2xl text-base leading-relaxed text-muted">Current work spans retrieval systems that show their evidence, document conversion that preserves usable structure, and thesis planning on when multimodal models should abstain. Each project records its constraints, evidence, and unfinished work.</p>
            <div className="flex flex-wrap gap-3 pt-1"><Link href="/projects" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-ring">Read project case studies <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Link><Link href="/resume" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/75 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent focus-ring"><FileText className="h-4 w-4 text-accent" />Review qualifications</Link></div>
            <SocialLinks />
          </Reveal>
          <Reveal className="relative lg:col-span-5" delay={0.12}>
            <div className="relative mx-auto w-fit lg:ml-auto"><div className="absolute -inset-4 rounded-[2rem] border border-accent/20 bg-accent/5 blur-sm" /><div className="relative h-56 w-56 overflow-hidden rounded-[1.7rem] border border-border bg-surface-raised p-2 shadow-2xl shadow-background/30 sm:h-72 sm:w-72"><div className="relative h-full overflow-hidden rounded-[1.25rem]"><Image src="/assets/images/zahed-portrait.png" alt="Mohammad Zahed Hossen, final-year CSE student and AI/ML engineer" fill priority sizes="(max-width: 640px) 224px, 288px" className="object-cover object-top" /></div></div><div className="absolute -bottom-4 -left-5 rounded-lg border border-border bg-background/85 px-3 py-2 text-[10px] font-mono uppercase tracking-[.14em] text-muted backdrop-blur-sm">Chattogram · Bangladesh</div></div>
            <div className="mt-12 lg:mt-8"><HeroVisual /></div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
