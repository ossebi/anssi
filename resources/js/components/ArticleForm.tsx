import { ArticleFormData, schemaArticle } from "@/pages/schemas";
import { article } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { Save } from "lucide-react";
import articles from "@/routes/articles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


export default function ArticleForm({ article }: article) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<ArticleFormData>({
        title: article?.title ?? '',
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
            put(articles.update.url(article.id), {
                preserveScroll: true,
            });
        } else {
            post(articles.store.url(), {
                preserveScroll: true,
            });
        }
    };

    useEffect(() => {
        if (article) {
            setData({
                title: article.title ?? ''
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

            <div>
                <label htmlFor="content" className="block font-medium">
                    Description
                </label>
                <CKEditor
                    editor={ClassicEditor}
                    data={data.title}
                    onChange={(_, editor) => {
                        const title = editor.getData();
                        setData('title', title);
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
