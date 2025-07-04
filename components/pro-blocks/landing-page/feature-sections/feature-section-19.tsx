"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeatureCardItem {
  title: string;
  description: string;
  link: string;
  IconComponent: React.ElementType;
}

interface FeatureTabItem {
  id: string;
  triggerTitle: string;
  cards: FeatureCardItem[];
}

const featureTabsData: FeatureTabItem[] = [
  {
    id: "feature1",
    triggerTitle: "Feature 1",
    cards: [
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature1-card2",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature1-card3",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature1-card4",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature1-card5",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature1-card6",
        IconComponent: Rocket,
      },
    ],
  },
  {
    id: "feature2",
    triggerTitle: "Feature 2",
    cards: [
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card1",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card2",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card3",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card4",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card5",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature2-card6",
        IconComponent: Rocket,
      },
    ],
  },
  {
    id: "feature3",
    triggerTitle: "Feature 3",
    cards: [
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card1",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card2",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card3",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card4",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card5",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature3-card6",
        IconComponent: Rocket,
      },
    ],
  },
  {
    id: "feature4",
    triggerTitle: "Feature 4",
    cards: [
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card1",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card2",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card3",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card4",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card5",
        IconComponent: Rocket,
      },
      {
        title: "Benefit driven feature title",
        description:
          "Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.",
        link: "/feature4-card6",
        IconComponent: Rocket,
      },
    ],
  },
];

export function FeatureSection19() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto flex flex-col gap-10 px-6 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex flex-col items-center text-center lg:max-w-xl">
          <Tagline>Feature section</Tagline>
          <h2 className="heading-lg text-foreground">
            Headline that summarizes the benefits of your solution
          </h2>
          <p className="text-muted-foreground text-base">
            Explain in one or two concise sentences how your solution transforms
            users' challenges into positive outcomes. Focus on the end benefits
            that matter most to your target audience. Keep it clear and
            compelling.
          </p>
        </div>

        <Tabs
          defaultValue={featureTabsData.length > 0 ? featureTabsData[0].id : ""}
          className="w-full gap-8"
        >
          <TabsList className="flex h-auto w-full flex-col gap-2 lg:mx-auto lg:w-fit lg:flex-row">
            {featureTabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="w-full text-left lg:w-fit"
              >
                {tab.triggerTitle}
              </TabsTrigger>
            ))}
          </TabsList>

          {featureTabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.cards.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {tab.cards.map((card, index) => (
                    <Link href={card.link} key={index}>
                      <Card>
                        <CardHeader>
                          <div className="bg-primary/5 mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                            <card.IconComponent className="text-primary h-5 w-5" />
                          </div>
                          <CardTitle className="mb-2">{card.title}</CardTitle>
                          <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-primary flex items-center gap-1.5 text-sm font-medium">
                            Learn more
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-muted-foreground py-8 text-center">
                  <p>No items to display for {tab.triggerTitle}.</p>
                  <p className="text-sm">
                    Please add card data to <code>featureTabsData</code> for
                    this tab.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
