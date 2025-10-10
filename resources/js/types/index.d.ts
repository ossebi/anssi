import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

interface EditProps {
    article: Article
}

export interface Paginated<T> {
    data: T[];
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    meta: {
        current_page: number;
        last_page: number;
        from: number | null;
        to: number | null;
        total: number;
    };
}

export interface Vision {
    id: number;
    title: string;
    slug: string;
    item: string;
    content: string
    description: string
}

export interface Visions {
    visionsProps: Paginated<Vision>;
}

export interface vision {
    vision: Vision;
}

interface EditVisionProps {
    editVision: Vision
}

export interface Article {
    id: number;
    title: string;
    tag: string;
    description: string;
    image: string | null;
    slug: string;
    sectionsData?: {
        id: number;
        title: string;
        img_path?: string | null;
        content?: string | null;
        type?: string | null;
        status: boolean | number;
    }[];
}

export interface Articles {
    articlesProps: Paginated<Article>;
}

export interface article {
    article?: Article;
}

export interface ArticleSection {
    id: number;
    title: string;
    content: string;
    type: string;
    status: boolean;
    img_path: string | File | null;
}

export interface ArticleSections {
    articleSectionsProps: Paginated<ArticleSection>;
}

export interface articleSection {
    articleSection: ArticleSection;
}

export interface Section {
    id: number;
    title: string;
    img_path?: string;
    content?: string;
    type: string;
    status: boolean;
    article: { id: number; title: string; slug: string }
}

export interface About {
    id: number;
    slogan?: string;
    description?: string;
    sectionAbouts?: {
        id: number;
        title: string;
        content: string;
        img_path?: string | null;
    }[];
}

export interface Page {
    id: number;
    name: string;
    slug: string;
    title?: string;
    subtitle?: string;
    description?: string;
    section?: {
        id: number;
        title: string;
        content: string;
        img_path?: string | null;
        page_id?: number;
    }[];
    textes?: {
        id: number;
        title: string;
        description?: string;
        path: string;
        page_id: number;
    }[]
}

export interface SectionPage {
    id: number;
    title: string;
    img_path?: string;
    content?: string;
    page_id: number;
}

export interface Texte {
    id: number;
    title: string;
    description?: string;
    path: string;
    page_id: number;
    page: { id: number; name: string; slug: string };
}

export interface Textes {
    textesProps: Paginated<Texte>;
}

export interface Faq {
    id: number;
    question: string;
    answer: string;
}

