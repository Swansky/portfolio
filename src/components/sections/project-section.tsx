import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Eye, File, Server} from "lucide-react";
import {useTranslation} from "react-i18next";
import type {TFunction} from "i18next";

interface Project {
    title: string;
    description: string;
    type: "link" | "client" | "ip" | "src";
    link?: string;
    ip?: string;
}

const projects: Project[] = [
    {
        title: "section.project.sscs.title",
        description: "section.project.sscs.description",
        type: "src",
        link: "https://github.com/Swansky/SSCS",
    },
    {
        title: "section.project.imageviewer.title",
        description: "section.project.imageviewer.description",
        type: "client",
    },
    {
        title: "section.project.serverlabs.title",
        description: "section.project.serverlabs.description",
        type: "ip",
        ip: "valyrialabs.fr",
    },
    {
        title: "section.project.iocframework.title",
        description: "section.project.iocframework.description",
        type: "src",
        link: "https://github.com/Swansky/SimpleIOCContainer",
    },
    {
        title: "section.project.quickwouf.title",
        description: "section.project.quickwouf.description",
        type: "link",
        link: "https://quickwouf.swansky.fr",
    },
    {
        title: "section.project.twistplugin.title",
        description: "section.project.twistplugin.description",
        type: "client",

    },
    {
        title: "section.project.regionplugin.title",
        description: "section.project.regionplugin.description",
        type: "client",

    },
];

function getButtonContent(project: (typeof projects)[number], t: TFunction) {
    switch (project.type) {
        case "src":
            return (
                <Button variant="outline" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <File className="mr-2 h-4 w-4"/> {t("section.project.card.sourcecode")}
                    </a>
                </Button>
            );
        case "ip":
            return (
                <Button variant="default" className="w-full cursor-text" disabled>
                    <Server className="mr-2 h-4 w-4"/> {project.ip}
                </Button>
            );
        case "link":
            return (
                <Button variant="default" className="w-full" asChild>
                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4"/> {t("section.project.card.link")}
                    </a>
                </Button>
            );
        case "client":
            return (
                <Button variant="default" className="w-full cursor-text" disabled>
                    <Eye className="mr-2 h-4 w-4"/> {t("section.project.card.client")}
                </Button>
            );

    }
}

export default function ProjectSection() {

    const {t} = useTranslation();
    return (
        <section className="px-6 py-16 max-w-6xl mx-auto border-t" id="projects">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{t("section.project.title")}</h2>
                <p className="text-muted-foreground text-md md:text-lg">
                    {t("section.project.description")}
                </p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <Card
                        key={idx}
                        className="flex flex-col justify-between p-6 relative min-h-[220px]"
                    >
                        <CardContent className="flex flex-col flex-grow">
                            <div className="mb-4">
                                <h1 className="text-xl font-semibold text-center mb-2">
                                    {t(project.title)}
                                </h1>
                                <p className="text-sm text-muted-foreground text-center">
                                    {t(project.description)}
                                </p>
                            </div>
                            <div className="mt-auto">{getButtonContent(project, t)}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
