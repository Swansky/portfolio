import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section.tsx";
import ContactSection from "@/components/sections/contact-section.tsx";
import ReviewSection from "@/components/sections/review-section.tsx";



export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-back">
            <Header/>
            <main className="flex-grow">
                <HeroSection/>
                <AboutSection/>
                <ReviewSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    );
}