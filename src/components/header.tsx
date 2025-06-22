import {Button} from "@/components/ui/button";

import logo from "@/assets/img/logo.svg";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {LanguageToggle} from "@/components/language-toggle.tsx";
import {useTranslation} from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b bg-background">
            <div className="flex items-center">
                <img src={logo} alt="Logo VZ" className="h-8 w-auto logo"/>
            </div>
            <nav className="flex items-center gap-4">
                <a href="#about" className="text-sm hover:underline">
                    {t("navbar.me")}
                </a>
                <a href="#projects" className="text-sm hover:underline">
                    {t("navbar.project")}
                </a>
                <Button asChild variant="default">
                    <a href="#contact"> {t("navbar.contact")}</a>
                </Button>
                <ModeToggle/>
                <LanguageToggle/>
            </nav>
        </header>
    );
}
