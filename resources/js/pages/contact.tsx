import Banner from '@/components/Banner'
import TemplateLayout from '@/layouts/template-layout'
import { Head } from '@inertiajs/react'
import banner from '../assets/images/background/inner_bg-DzLdov-A.png';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
    return (
        <TemplateLayout>
            <Head title="Nous contacter"></Head>
            <Banner title="Nous contacter" backgroundImage={banner} subtitle='Nous contacter' />
            <ContactSection />
        </TemplateLayout>
    )
}
