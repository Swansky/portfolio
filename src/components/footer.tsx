import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    return (
        <footer className="flex items-center justify-center flex-col px-6 py-4 border-t bg-background text-sm">
            <p>{t("footer.madeby")}</p>
            <p>
                <a
                    href="https://github.com/swansky/portfolio"
                    className="flex items-center gap-1 hover:underline underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("footer.sourcecode")}
                </a>
            </p>
        </footer>
    );
}
