import {useTranslation} from "react-i18next";
import type {JSX} from "react/jsx-runtime";

export default function AboutSection() {
    const {t} = useTranslation();

    function getDescription() {
        const value = t("section.me.description");
        const lines: JSX.Element[] = [];
        value.split("\n").forEach((line, index) => {
            if (line.trim() !== "") {
                lines.push(<span key={index}>{line.trim()}<br/></span>);
            }
        })
        return (
            <span>
                {lines.map((line, index) => (
                    < span key={index}>
                        {line}
                    </span>
                ))}
            </span>
        )
    }

    return (
        <section id="about" className="px-6 py-16 text-center border-t border-b  w-full">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">   {t("section.me.title")}</h2>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
                {getDescription()}
            </p>
        </section>
    )
}