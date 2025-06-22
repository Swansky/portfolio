import {useTranslation} from "react-i18next";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Globe} from "lucide-react";

export function LanguageToggle() {
    const {i18n} = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]"/>
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr")}>🇫🇷 Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("de")}>🇩🇪 Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
