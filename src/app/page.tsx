"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import stockMarketIllustration from "../../public/images/markus-winkler-IrRbSND5EUc-unsplash.jpg";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from '../../public/images/profile.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Rohit Sharma",
        username: "@rohit_invests",
        body: "Stock Market Expert gave me a buy signal on Tata Motors right before the breakout — doubled my returns in just two weeks!"
    },
    {
        name: "Priya Verma",
        username: "@priya_trader",
        body: "I finally understand candlestick patterns thanks to the AI explanations. Feels like having a mentor on call 24/7."
    },
    {
        name: "Anil Kapoor",
        username: "@anil_longterm",
        body: "The portfolio tracker and custom alerts saved me from a big loss during a market dip. Absolutely worth it."
    },
    {
        name: "Sneha Iyer",
        username: "@sneha_growth",
        body: "I asked about the best banking sector stocks, and got a clear, data-backed recommendation in seconds — in Hindi!"
    },
    {
        name: "Kunal Mehta",
        username: "@kunal_options",
        body: "I use it daily for technical analysis. The RSI and MACD breakdowns are more accurate than most paid tools I’ve tried."
    },
    {
        name: "Aarav Joshi",
        username: "@aarav_beginner",
        body: "As a beginner, I was scared to start investing. Stock Market Expert made it simple, safe, and easy to follow."
    }
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Ask Your Question",
        description:
            "Type in your query about any Indian stock, sector, or market trend — in English or Hindi. You can ask about prices, charts, news, or recommendations."
    },
    {
        title: "Step 2: AI Analyzes Live Data",
        description:
            "The assistant scans real-time stock prices, technical indicators, financial statements, earnings reports, and market news to prepare your answer."
    },
    {
        title: "Step 3: Get Clear Insights & Recommendations",
        description:
            "Receive instant, easy-to-understand analysis — whether it’s a buy/sell/hold call, sector outlook, or a company’s growth potential."
    },
    {
        title: "Step 4: Track Your Portfolio",
        description:
            "Add your holdings to the built-in tracker to monitor live prices, performance, and risk. Set custom alerts for price targets or news events."
    },
    {
        title: "Step 5: Explore ‘What-If’ Scenarios",
        description:
            "Test investment ideas, compare different stocks, and simulate long-term returns before making any move."
    },
    {
        title: "Step 6: Learn & Improve Over Time",
        description:
            "The AI continuously learns from market movements and your feedback, giving you sharper, more personalized advice with every interaction."
    }
];



export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
         <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
    <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <span
            className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
            }}
        />
        📈
        <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
            AI-Powered Stock Market Expert for Indian Investors
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>

    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
        Make Smarter <AuroraText>Investment Decisions</AuroraText>  
        with Real-Time AI Insights
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Instantly get answers about Indian stocks, sectors, and market trends — in English or Hindi.  
        Analyze live prices, charts, financials, and news, plus get AI-driven buy/sell/hold recommendations.
    </p>

    <div>
        <Link href="/search">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Ask About a Stock Now
                </span>
            </ShimmerButton>
        </Link>
    </div>
</section>



            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

        <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Your 24/7 AI-Powered Stock Market Assistant.
        </h2>
        <p className="text-lg text-muted-foreground">
            Get instant answers about Indian stocks, sectors, and market trends in English or Hindi.  
            Analyze live prices, charts, news, and financials — plus receive AI-driven buy/sell/hold recommendations  
            tailored to your portfolio.
        </p>
        <Link href="/search">
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Ask About a Stock
                </span>
            </ShimmerButton>
        </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
        <Image
            src={stockMarketIllustration} // Replace with stock market themed illustration path
            alt="AI-Powered Stock Market Insights"
            className="w-full max-w-md h-96 object-contain"
            width={10}
            height={10}
            unoptimized
        />
    </div>
</section>



            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

           <section className="px-4 md:px-36 mt-20">
    <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
    >
        <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

        <AccordionItem value="item-1">
            <AccordionTrigger>
                1. What is Stock Market Expert?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Stock Market Expert is an AI-powered assistant that provides real-time insights on Indian stocks, sectors, and market trends. 
                    It can answer questions, analyze data, and offer actionable recommendations in both English and Hindi.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>
                2. How does it work?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Simply type your query about any Indian stock, sector, or the overall market. 
                    The AI pulls live prices, charts, news, and financial data, then applies technical and fundamental analysis to deliver easy-to-understand answers and recommendations.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>
                3. Can it give buy, sell, or hold recommendations?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. Based on real-time market data, historical trends, and expert-level models, 
                    Stock Market Expert can suggest whether to buy, sell, or hold a stock — along with the reasoning behind the recommendation.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger>
                4. Does it support Hindi?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Absolutely. You can ask questions and receive answers in both English and Hindi, 
                    making it accessible for a wider range of investors across India.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger>
                5. Can it track my portfolio and set alerts?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. You can add your portfolio and set custom alerts for price movements, 
                    news updates, or technical signals so you never miss important changes.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger>
                6. Does it analyze company fundamentals?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. It reviews financial statements, earnings reports, balance sheets, and key ratios to provide 
                    a complete picture of a company’s performance and potential.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
            <AccordionTrigger>
                7. Can it help with long-term investment strategies?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Definitely. It can simulate &apos;what-if&apos; scenarios, suggest diversification strategies, 
                    and give guidance on building a strong, long-term investment portfolio.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
            <AccordionTrigger>
                8. Is it only for experienced traders?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Not at all. Stock Market Expert is designed for everyone — from beginners learning about investing 
                    to experienced traders looking for deeper analysis and faster insights.
                </p>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
            <AccordionTrigger>
                9. Is there a free version?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                    Yes. You can use core features for free, including basic stock queries and market summaries. 
                    Premium features like advanced analysis, custom alerts, and portfolio tracking may require a subscription.
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</section>


        </main>
    );
}
