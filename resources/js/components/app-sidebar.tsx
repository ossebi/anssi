import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookA, BookOpen, Check, CheckSquare, Contact, Eye, Folder, LayoutGrid, ListCheck, Newspaper, Scale, Speech, Voicemail } from 'lucide-react';
import AppLogo from './app-logo';
import vision from '@/routes/vision';
import articles from '@/routes/articles';
import admin from '@/routes/admin';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Qui sommes-nous ?',
        href: admin.pages.show('qui-sommes-nous'),
        icon: BookOpen,
    },
    {
        title: 'Foire aux questions',
        href: admin.pages.show('foire-aux-questions'),
        icon: Voicemail,
    },
    {
        title: 'Nous contacter',
        href: admin.pages.show('nous-contacter'),
        icon: Contact,
    },
    {
        title: 'Agréments et accréditations',
        href: admin.pages.show('agrements-et-accreditations'),
        icon: CheckSquare,
    },
    {
        title: 'Authentification des documents',
        href: admin.pages.show('authentification-des-documents'),
        icon: BookA,
    },
    {
        title: 'Textes nationaux',
        href: admin.pages.show('textes-nationaux'),
        icon: Scale,
    },
    {
        title: 'Normes et standards',
        href: admin.pages.show('normes-et-standards'),
        icon: Check,
    },
    {
        title: 'Référentiels de sécurité',
        href: admin.pages.show('referentiels-de-securite'),
        icon: BookOpen,
    },
    {
        title: 'Publications',
        href: admin.pages.show('publications'),
        icon: Speech,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Articles',
        href: articles.index(),
        icon: Newspaper,
    },
    {
        title: 'Visions',
        href: vision.index(),
        icon: Eye,
    },
    //  {
    //     title: 'Textes & lois',
    //     href: admin.textes.index(),
    //     icon: Scale,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
