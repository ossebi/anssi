import { Link } from '@inertiajs/react';

export default function Alert() {
    return (
        <section
            className="relative bg-cyan-950 py-16 px-4 sm:px-12 lg:px-24 text-gray-300 rounded-tl-full rounded-br-full"
        >
            <div className="container mx-auto px-6 ">
                <h2 className="mb-4 text-3xl font-bold">Avez-vous identifié une menace de cybersécurité ?</h2>
                <p className="mx-auto mb-6 font-light">
                    Contribuez à renforcer la sécurité numérique en signalant toute activité suspecte ou menace potentielle. Votre vigilance peut
                    protéger des milliers d’utilisateurs.
                </p>
                <Link
                    href="/signaler-menace"
                    className="inline-block bg-blue-700/50 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800/50 text-left"
                >
                    Signaler une menace
                </Link>
            </div>
        </section>
    );
}
