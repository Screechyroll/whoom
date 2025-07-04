"use client";

import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection10() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex flex-col items-start lg:max-w-xl lg:items-center lg:text-center">
          <Tagline>Feature section</Tagline>
          <h2 className="heading-lg text-foreground">
            Headline that shows solution's impact on user success
          </h2>
          <p className="text-muted-foreground text-base">
            Explain in one or two concise sentences how your solution transforms
            users' challenges into positive outcomes. Focus on the end benefits
            that matter most to your target audience. Keep it clear and
            compelling.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col gap-5">
            <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
              <Rocket className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
            <Link
              href="#"
              className="text-primary hover:text-primary/90 flex items-center gap-2 font-medium"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
              <Rocket className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
            <Link
              href="#"
              className="text-primary hover:text-primary/90 flex items-center gap-2 font-medium"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
              <Rocket className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
            <Link
              href="#"
              className="text-primary hover:text-primary/90 flex items-center gap-2 font-medium"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
