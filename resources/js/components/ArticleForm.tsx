import { ArticleFormData, schemaArticle } from "@/pages/schemas";
import { article } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { Save } from "lucide-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import admin from "@/routes/admin";


export default function ArticleForm({ article }: article) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<ArticleFormData>({
        title: article?.title ?? '',
        tag: article?.tag ?? '',
        description: article?.description ?? '',
        image: article?.image ?? null,
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaArticle.validate(data, { abortEarly: false });
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

        if (article) {
            put(admin.articles.update.url(article.id), {
                preserveScroll: true,
            });
        } else {
            post(admin.articles.store.url(), {
                preserveScroll: true,
            });
        }
    };

    useEffect(() => {
        if (article) {
            setData({
                title: article.title ?? '',
                tag: article.tag ?? '',
                description: article.description ?? '',
                image: article.image ?? null,
            });
        }
    }, [article, setData]);

    return (
        <form onSubmit={onSubmit} className="space-y-4 py-5">
            <div className="flex justify-end">
                <button type="submit" disabled={processing} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 flex gap-x-2">
                    <Save className="w-5" />
                    {processing ? 'Enregistrement...' : article ? 'Mettre à jour' : 'Enregistrer'}
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block font-medium">
                    Titre
                </label>
                <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="w-full rounded border p-2"
                />
                {validationErrors.title && <p className="text-sm text-red-500">{validationErrors.title}</p>}
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="image" className="block font-medium">
                    Image
                </label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData('image', e.target.files ? e.target.files[0] : '')}
                    className="w-full rounded border p-2"
                />
                {validationErrors.image && <p className="text-sm text-red-500">{validationErrors.image}</p>}
                {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="tag" className="block font-medium">
                    Tag
                </label>
                <select name="tag" id="tag" value={data.tag} onChange={(e) => setData('tag', e.target.value)} className="w-full rounded border p-2">
                    <option value="">Sélectionner un tag</option>
                    <option value="actualite">Actualités</option>
                    <option value="bulletin">Bulletin de sécurité</option>
                    <option value="bonnes_pratiques">Bonnes pratiques</option>
                    <option value="evenement">Événement</option>
                    <option value="publication">Publication</option>
                    <option value="recrutement">Recrutement</option>
                    <option value="veille">Veille</option>
                </select>
                {validationErrors.tag && <p className="text-sm text-red-500">{validationErrors.tag}</p>}
                {errors.tag && <p className="text-sm text-red-500">{errors.tag}</p>}
            </div>

            <div>
                <label htmlFor="content" className="block font-medium">
                    Description
                </label>
                <CKEditor
                    editor={ClassicEditor}
                    data={data.description}
                    onChange={(_, editor) => {
                        const description = editor.getData();
                        setData('description', description);
                    }}
                    config={{
                        toolbar: [
                            'undo',
                            'redo',
                            '|',
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough',
                            'highlight',
                            'removeFormat',
                            '|',
                        ],
                        table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
                    }}
                />
                {validationErrors.title && <p className="text-sm text-red-500">{validationErrors.title}</p>}
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            </div>

        </form>
    );
}
