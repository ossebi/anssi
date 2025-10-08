import ScrollingText from '@/components/ScrollingText';
import TemplateLayout from '@/layouts/template-layout';
import { Page, Paginated, Vision, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import HeroBanner from '@/components/HeroBanner';
import VisionSection from '@/components/VisionSection';
import ServicesSection from '@/components/ServicesSection';
import NewsAlerts from '../components/NewsAlerts';
import PartnersSection from '../components/PartnersSection';
import QuickContactForm from '@/components/QuickContactForm';
import AboutSection from '@/components/AboutSection';

const alertsData = [
    {
        id: 1,
        title: "Vulnérabilité critique détectée sur un serveur national",
        description:
            "Une faille de sécurité CVE-2025-12345 a été identifiée. Les administrateurs sont invités à appliquer les correctifs immédiatement.",
        date: "24/09/2025",
        link: "/actualites/1",
    },
    {
        id: 2,
        title: "Nouvelle alerte phishing ciblant les institutions publiques",
        description:
            "Des tentatives de phishing massives ont été détectées. Soyez vigilants et vérifiez vos sources.",
        date: "23/09/2025",
        link: "/actualites/2",
    },
    {
        id: 3,
        title: "Renforcement de la cybersécurité des infrastructures critiques",
        description:
            "L'ANSSI a publié un rapport sur la protection des infrastructures critiques face aux attaques récentes.",
        date: "22/09/2025",
        link: "/actualites/3",
    },
];

const partnersData = [
    { id: 1, name: "Partenaire 1", logo: "/logos/partenaire1.png", link: "https://example.com" },
    { id: 2, name: "Partenaire 2", logo: "/logos/partenaire2.png" },
    { id: 3, name: "Partenaire 3", logo: "/logos/partenaire3.png" },
    { id: 4, name: "Partenaire 4", logo: "/logos/partenaire4.png" },
    { id: 5, name: "Partenaire 5", logo: "/logos/partenaire5.png" },
    { id: 6, name: "Partenaire 6", logo: "/logos/partenaire6.png" },
];

const newsList = [
    {
        image: '/images/articles//blog-2--nKSonu9.jpg',
        category: "Actualité",
        title: "10 reliable sources to learn about IT solutions",
        excerpt:
            "Podcasting operational change management inside of workflows to establish a...",
        link: "/blog-single",
    },
    {
        image: "/images/articles/blog-3-Dxz3_V3b.jpg",
        category: "Bulletin de sécurité",
        title: "The ultimate guide to great UI/UX practices",
        excerpt:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews...",
        comments: 5,
        link: "/blog-single",
    },
    {
        image: "/images/articles//blog-2--nKSonu9.jpg",
        category: "Bonne pratiques",
        title: "Why cloud-native development is the future",
        excerpt:
            "Iterative approaches to corporate strategy foster collaborative thinking...",
        comments: 3,
        link: "/blog-single",
    },
];


interface HomeProps {
    visionsProps: Paginated<Vision>;
    pagesData: Page[];
}

export default function Welcome({ visionsProps, pagesData }: HomeProps) {

    const { auth } = usePage<SharedData>().props;

    return (
        <TemplateLayout>
            <Head title="Accueil"></Head>
            {/* <div className='mx-auto'>
                <ScrollingText speed={100} text="Bienvenue sur le site officiel de l’ANSSI ! Le site est actuellement en construction. Nous travaillons activement pour vous proposer bientôt toutes les informations et services liés à la cybersécurité nationale." />
            </div> */}
            <HeroBanner />
            <VisionSection visionsProps={visionsProps}/>
            <ServicesSection />
            <AboutSection pagesData={pagesData} link={true} />
            <PartnersSection partners={partnersData} />
            <NewsAlerts newsList={newsList} />
            <QuickContactForm />
        </TemplateLayout>
    );
}
