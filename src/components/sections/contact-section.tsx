import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import fiverrLogo from "@/assets/img/fiverrLogo.svg";
import {useTranslation} from "react-i18next";

export default function ContactSection() {
    const {t} = useTranslation();
    return (
        <section id="contact" className="px-6 py-20 w-full mx-auto text-center border-t">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("section.contact.title")}</h2>
            <p className="text-muted-foreground text-md md:text-lg mb-8">
                {t("section.contact.description")}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                    href="https://fr.fiverr.com/s/2Kvora4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-muted"
                >
                    <img src={fiverrLogo} alt="Fiverr logo" className="w-6 h-6" />
                    <span className="font-medium">{t("section.contact.fiverr")}</span>
                </a>
                <Button asChild variant="default">
                    <a href="mailto:contact@swansky.fr">
                        <Mail className="mr-2 h-4 w-4" /> contact@swansky.fr
                    </a>
                </Button>
            </div>
        </section>
    );
}
