import { ArticleFormData, schemaArticle, schemaTexte, TexteFormData } from "@/pages/schemas";
import { article, Page, Texte } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { Save } from "lucide-react";
import admin from "@/routes/admin";

export interface TexteProps {
    texteData?: Texte;
    page: Page;
}

export default function TexteForm({ texteData, page }: TexteProps) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<TexteFormData>({
        title: texteData?.title || '',
        description: texteData?.description || '',
        path: texteData?.path || '',
        page_id: page.id,
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaTexte.validate(data, { abortEarly: false });
            setValidationErrors({});
            return true;
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const errs: Record<string, string> = {};
                error.inner.forEach((e) => {
                    if (e.path) {
                        errs[e.path] = e.message;
                    }
                });
                setValidationErrors(errs);
            }
            return false;
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (!isValid) return;

        if (texteData) {
            put(admin.textes.update.url(texteData.id), {
                 forceFormData: true,
                preserveScroll: true,
            });
        } else {
            post(admin.textes.store.url(), {
                preserveScroll: true,
            });
        }
    };

    useEffect(() => {
        if (texteData) {
            setData({
                title: texteData.title || '',
                description: texteData.description || '',
                path: texteData.path || '',
                page_id: page.id,
            });
        }
    }, [texteData, setData]);

    return (
        <form onSubmit={onSubmit} className="space-y-4 py-5">
            <div className="flex justify-end">
                <button type="submit" disabled={processing} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 flex gap-x-2">
                    <Save className="w-5" />
                    {processing ? 'Enregistrement...' : texteData ? 'Mettre à jour' : 'Enregistrer'}
                </button>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Titre du texte ou de la loi</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="mt-1 block w-full border p-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-red-600">{validationErrors.title || errors.title}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={data.description || ''}
                    onChange={(e) => setData('description', e.target.value)}
                    className="mt-1 block w-full border p-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    rows={3}
                />
                <p className="mt-1 text-sm text-red-600">{validationErrors.description || errors.description}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Chemin du fichier (URL ou chemin relatif)</label>
                <input
                    type="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setData("path", e.target.files[0]);
                        }
                    }}
                    className="mt-1 block w-full border p-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-red-600">{validationErrors.path || errors.path}</p>
            </div>


        </form>
    );
}
