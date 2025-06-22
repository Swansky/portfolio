import {useRef} from "react";
import bitmoji from "@/assets/img/bitmoji.png";
import * as React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";
import {ChevronDown} from "lucide-react";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
    const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const element = containerRef.current as HTMLDivElement;
        const rect = element.getBoundingClientRect();
        if (!rect) return;
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-20 h-full min-h-[calc(100vh-250px)]">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {t("hero.title")}
                </h1>
                <p className="text-lg md:text-xl mb-2">
                    {t("hero.subtitle")}
                </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                    ref={containerRef}
                    className="relative w-80 h-[400px] rounded-full overflow-hidden border border-muted shadow-xl"
                    style={{rotateX, rotateY}}
                    onMouseMove={handleMouseMove}
                >
                    <img
                        src={bitmoji}
                        alt="Bitmoji de Valérian"
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>
            </div>
        </section>
            <div className="flex justify-center py-6">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </>
    );
}
