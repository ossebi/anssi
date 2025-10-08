import { useRef, useState } from 'react';

type cardProps = {
    title: string;
    imageSrc: string;
    paragraph: string;
};

export default function MissionCard({ imageSrc, title, paragraph }: cardProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!divRef.current) return;
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };
    return (
        <div
            className="relative m-2 max-w-2xl overflow-hidden rounded-xl border border-gray-200 shadow-2xl shadow-gray-100 sm:m-4 dark:border-gray-700 dark:shadow-white/10"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            ref={divRef}
            onMouseMove={handleMouseMove}
        >
            <div
                className={`pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70 transition-opacity ${visible ? 'opacity-70' : 'opacity-0'}`}
                style={{ top: position.y - 150, left: position.x - 150 }}
            />
            <div className="relative z-10 flex h-[150px] items-center gap-10 rounded-[10px] bg-white p-8 transition-all hover:m-0.5 hover:p-7 dark:bg-gray-900">
                <div className="rounded-full bg-gray-100 dark:bg-gray-700">
                    <img src={imageSrc} alt="" className="m-2 max-w-32 rounded-full" />
                </div>
                <div className="flex-1">
                    <h3 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{paragraph}</p>
                </div>
            </div>
        </div>
    );
}
