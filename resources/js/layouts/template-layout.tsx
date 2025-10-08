import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState, type ReactNode } from 'react';

interface TemplateLayoutProps {
    children: ReactNode;
}


export default function TemplateLayout({ children }: TemplateLayoutProps) {

    const [theme, setTheme] = useState<'light' | 'dark'>((localStorage.getItem('theme') as 'light' | 'dark') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            
            document.documentElement.classList.add('dark');
        }
        else {

            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);

    }, [theme]);

    return (
        <div>
             <Navbar />
            <main>
                {children}
            </main>

            <Footer theme={theme} setTheme={setTheme} />
        </div>
    )
}
