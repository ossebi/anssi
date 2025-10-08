import DesktopMenu from './DesktopMenu';
import { useState } from 'react';

export default function Navbar() {
    const [dark, setDark] = useState(false);
    return (
        <header
            className="mx-auto dark:text-white">
            <DesktopMenu />
        </header>
    )
}
