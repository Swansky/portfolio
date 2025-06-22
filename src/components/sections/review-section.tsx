"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";

const reviews = [
    {
        title: "Fast, Knowledgeable, & Clear",
        name: "@Killusion ",
        text: "Swansky/Valerian, was fully committed and knowledgeable to create our ideas into reality. Communicated well and show me progress along the way which help a lot. He works hard and fast. Very happy with this and will continue working with him in the coming future. Great communication, and well worth your time and money!",
        rating: 5,
        url: "https://fr.trustpilot.com/review/swansky.fr",
    },
    {
        title: "Very friendly and professional",
        name: "@Ethan Rabideau",
        text: "He was great to work with. He was willing to go the extra mile when I forgot to mention stuff in the first message when the order was placed, he was very professional and polite. The plugin I ordered works exactly as I imagined it would and any time we ran into any problems he was quick to resolve them. I would definitely come to him if I need to order another plugin in the future.",
        rating: 5,
        url: "https://fr.trustpilot.com/review/swansky.fr",
    }
];

export default function ReviewSection() {
    return (
        <section className="px-6 py-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8">Avis de clients</h2>
            <Carousel className="w-full">
                <CarouselContent>
                    {reviews.map((r, idx) => (
                        <CarouselItem key={idx} className="flex justify-center">
                            <Card className="w-full max-w-md">
                                <CardContent className="flex flex-col items-center p-6">
                                    <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                                    <div className="flex items-center mb-2">
                                        {Array.from({length: 5}).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < r.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-muted-foreground"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-center text-muted-foreground mb-2">
                                        "{r.text}"
                                    </p>
                                    <p className="text-sm font-medium text-muted-foreground mb-4">
                                        — {r.name}
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href={r.url} target="_blank" rel="noopener noreferrer">
                                            See review
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-6"/>
                <CarouselNext className="-right-6"/>
            </Carousel>
        </section>
    );
}
