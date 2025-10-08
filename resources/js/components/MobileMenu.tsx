import { Link } from '@inertiajs/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

type MenuItem = {
    name: string;
    link?: string;
    subMenuHeading?: string[];
    subMenu?: {
        name: string;
        desc: string;
        icon?: React.ComponentType<{ className?: string }>;
        link?: string;
    }[];
    gridCols?: number;
};

type MobileMenuProps = {
    Menus: MenuItem[];
};

export default function MobileMenu({ Menus }: MobileMenuProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState<number | null>(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setClicked(null);
    };

    const subMenuDrawer = {
        enter: {
            height: 'auto',
            overflow: 'hidden',
            transition: { duration: 0.3 },
        },
        exit: {
            height: 0,
            overflow: 'hidden',
            transition: { duration: 0.3 },
        },
    };

    return (
        <div>
            <button onClick={toggleDrawer} className="relative z-[999]">
                {isOpen ? <X className="mb-4 text-white" /> : <Menu className="text-orange-600" />}
            </button>

            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 right-0 bottom-0 h-full overflow-y-auto 
             bg-blue-900/90 backdrop-blur-md p-6 text-white z-[998]"
            >
                <ul>
                    {Menus?.map(({ name, subMenu, link }, index) => {
                        const hasSubMenu = (subMenu?.length ?? 0) > 0;
                        const isClicked = clicked === index;

                        return (
                            <li key={index}>
                                {link && !hasSubMenu ? (
                                    <Link href={link || '#'}
                                        className="flex cursor-pointer items-center gap-x-2 rounded-md p-3 text-lg hover:bg-white/10 transition-colors duration-300">
                                        {name}
                                    </Link>
                                ) : (
                                    <span
                                        onClick={() => setClicked(isClicked ? null : index)}
                                        className="relative flex cursor-pointer items-center justify-between rounded-md p-4 hover:bg-white/5"
                                    >
                                        {name}
                                        {hasSubMenu && <ChevronDown className={`ml-auto transition-transform ${isClicked ? 'rotate-180' : ''}`} />}
                                    </span>
                                )}

                                {hasSubMenu && (
                                    <motion.ul
                                        initial="exit"
                                        animate={isClicked ? 'enter' : 'exit'}
                                        variants={subMenuDrawer}
                                        className="ml-5 overflow-hidden"
                                    >
                                        {subMenu?.map(({ name, icon: Icon, link }, idx) => (
                                            <Link
                                                key={idx}
                                                href={link || '#'}
                                                className="flex cursor-pointer items-center gap-x-2 rounded-md p-2 hover:bg-white/5"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {Icon && <Icon className="size-7" />}
                                                <span>{name}</span>
                                            </Link>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    );
}

// import { Link } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import * as Icons from 'lucide-react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// type MenuItem = {
//     id: number;
//     name: string;
//     link?: string;
//     desc?: string;
//     icon?: string; // nom de l'icône Lucide
//     grid_cols?: number;
//     children?: MenuItem[];
// };

// type MobileMenuProps = {
//     Menus: MenuItem[];
// };

// export default function MobileMenu({ Menus }: MobileMenuProps) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [clicked, setClicked] = useState<number | null>(null);

//     const toggleDrawer = () => {
//         setIsOpen(!isOpen);
//         setClicked(null);
//     };

//     const subMenuDrawer = {
//         enter: {
//             height: 'auto',
//             overflow: 'hidden',
//             transition: { duration: 0.3 },
//         },
//         exit: {
//             height: 0,
//             overflow: 'hidden',
//             transition: { duration: 0.3 },
//         },
//     };

//     return (
//         <div>
//             <button onClick={toggleDrawer} className="relative z-[999]">
//                 {isOpen ? <X className="mb-4 text-white" /> : <Menu className="text-black" />}
//             </button>

//             <motion.div
//                 initial={{ x: '-100%' }}
//                 animate={{ x: isOpen ? '0%' : '-100%' }}
//                 className="fixed top-16 right-0 left-0 h-full overflow-y-auto bg-blue-900 p-6 text-white backdrop-blur"
//             >
//                 <ul>
//                     {Menus?.map((menu, index) => {
//                         const hasSubMenu = (menu?.children?.length ?? 0) > 0;
//                         const isClicked = clicked === index;
//                         const Icon = menu.icon ? (Icons[menu.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) : null;

//                         return (
//                             <li key={menu.id}>
//                                 {menu.link && !hasSubMenu ? (
//                                     <Link href={menu.link} className="block rounded-md p-4 hover:bg-white/5" onClick={() => setIsOpen(false)}>
//                                         {Icon && <Icon className="mr-2 h-5 w-5" />}
//                                         {menu.name}
//                                     </Link>
//                                 ) : (
//                                     <span
//                                         onClick={() => setClicked(isClicked ? null : index)}
//                                         className="relative flex cursor-pointer items-center justify-between rounded-md p-4 hover:bg-white/5"
//                                     >
//                                         <span className="flex items-center gap-2">
//                                             {Icon && <Icon className="h-5 w-5" />}
//                                             {menu.name}
//                                         </span>
//                                         {hasSubMenu && <ChevronDown className={`ml-auto transition-transform ${isClicked ? 'rotate-180' : ''}`} />}
//                                     </span>
//                                 )}

//                                 {hasSubMenu && (
//                                     <motion.ul
//                                         initial="exit"
//                                         animate={isClicked ? 'enter' : 'exit'}
//                                         variants={subMenuDrawer}
//                                         className="ml-5 overflow-hidden"
//                                     >
//                                         {menu.children?.map((child) => {
//                                             const ChildIcon = child.icon
//                                                 ? (Icons[child.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>)
//                                                 : null;
//                                             return (
//                                                 <Link
//                                                     key={child.id}
//                                                     href={child.link || '#'}
//                                                     className="flex cursor-pointer items-center gap-x-2 rounded-md p-2 hover:bg-white/5"
//                                                     onClick={() => setIsOpen(false)}
//                                                 >
//                                                     {ChildIcon && <ChildIcon className="h-5 w-5" />}
//                                                     <span>{child.name}</span>
//                                                 </Link>
//                                             );
//                                         })}
//                                     </motion.ul>
//                                 )}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </motion.div>
//         </div>
//     );
// }
