import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Mail, Lock } from 'lucide-react';
import logo from '../../assets/images/logos/logo-lg.jpg';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <AuthLayout
            title="Connexion"
            description="Accédez à votre espace personnel"
        >
            <Head title="Connexion" />

            <div className="relative flex min-h-screen items-center justify-center p-4">
                {/* Overlay */}

                <div className="relative z-10 w-full max-w-md rounded bg-white p-10 shadow-2xl dark:bg-neutral-900/90">
                    {/* Logo + Titre */}
                    <div className="mb-6 flex flex-col items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-16 w-16 rounded-full border border-neutral-200 shadow-md dark:border-neutral-700"
                        />
                        <h1 className="mt-4 text-center text-3xl font-extrabold text-sky-800 dark:text-neutral-100">
                            Bienvenue
                        </h1>
                        <p className="mt-1 text-center text-sm text-orange-500 dark:text-neutral-400">
                            Connectez-vous pour continuer
                        </p>
                    </div>

                    {/* Formulaire */}
                    <Form
                        {...AuthenticatedSessionController.store.form()}
                        resetOnSuccess={['password']}
                        className="flex flex-col gap-6 mb-8"
                    >
                        {({ processing, errors }) => (
                            <>
                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-gray-700 dark:text-neutral-300">
                                        Adresse email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={18} />
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="pl-10 rounded-none py-5 border-transparent text-neutral-800 focus:border-indigo-500 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                                        />
                                    </div>
                                    <InputError message={errors.email} />
                                </div>

                                {/* Password */}
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-neutral-700 dark:text-neutral-300">
                                            Mot de passe
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-xs text-indigo-600 hover:underline dark:text-indigo-400"
                                            >
                                                Mot de passe oublié ?
                                            </TextLink>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={18} />
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            autoComplete="current-password"
                                            placeholder="Votre mot de passe"
                                            className="pl-10 rounded-none py-5 border-transparent text-neutral-800 focus:border-indigo-500 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                                        />
                                    </div>
                                    <InputError message={errors.password} />
                                </div>

                                {/* Remember */}
                                <div className="flex items-center space-x-3">
                                    <Checkbox id="remember" name="remember" />
                                    <Label htmlFor="remember" className="text-neutral-700 dark:text-neutral-300">
                                        Se souvenir de moi
                                    </Label>
                                </div>

                                {/* Button */}
                                <Button
                                    type="submit"
                                    className="mt-4 w-full rounded-none py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md transition hover:opacity-90 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                    Se connecter
                                </Button>

                                {/* Sign up */}
                                {/* <div className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                                    Pas encore de compte ?{' '}
                                    <TextLink
                                        href={register()}
                                        className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                                    >
                                        S’inscrire
                                    </TextLink>
                                </div> */}
                            </>
                        )}
                    </Form>

                    {/* Status */}
                    {status && (
                        <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>
                    )}
                </div>
            </div>
        </AuthLayout>
    );
}
