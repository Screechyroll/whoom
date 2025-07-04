"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function CtaSection7() {
  return (
    <section className="bg-background" aria-labelledby="cta-heading">
      <div className="container mx-auto">
        <div className="bg-primary px-6 py-16 sm:rounded-xl md:p-16">
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
            {/* Section Header */}
            <div className="section-title-gap-lg flex flex-col items-center text-center">
              {/* Category Tag */}
              <Tagline className="text-primary-foreground/80">
                CTA Section
              </Tagline>
              {/* Main Title */}
              <h2
                id="cta-heading"
                className="text-primary-foreground heading-lg"
              >
                Action-driving headline that creates urgency
              </h2>
            </div>
            {/* CTA Button */}
            <Button
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/80"
              aria-label="Get started with our service"
            >
              Get started
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
