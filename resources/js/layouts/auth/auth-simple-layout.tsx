import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/70 to-blue-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent" />

            <svg className="pointer-events-none absolute -left-40 -top-20 opacity-20 w-96 h-96" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <g transform="translate(300,300)">
                    <path d="M120,-160C160,-120,180,-60,170,-8C160,44,120,88,80,120C40,152,-4,172,-54,166C-104,160,-160,128,-184,84C-208,40,-200,-16,-174,-66C-148,-116,-104,-158,-56,-184C-8,-210,44,-220,96,-204C148,-188,80,-200,120,-160Z" fill="#20c997"></path>
                </g>
            </svg>
            <div className="w-full">
                <div className="flex flex-col gap-8">
                    {/* <div className="flex flex-col items-center gap-4">
                        <Link href={home()} className="flex flex-col items-center gap-2 font-medium">
                            <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                                <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-center text-sm text-muted-foreground">{description}</p>
                        </div>
                    </div> */}
                    {children}
                </div>
            </div>
        </div>
    );
}
