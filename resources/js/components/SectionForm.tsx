import { schemaSection, SectionFormData } from "@/pages/schemas";
import { Section, Vision } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Save } from "lucide-react";
import sections from "@/routes/sections";


export default function SectionForm({ item, articleId }: { item?: Section, articleId: number }) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<SectionFormData>({
        title: item?.title ?? '',
        type: item?.type ?? '',
        img_path: item?.img_path ?? '',
        content: item?.content ?? '',
        status: item?.status ?? false,
        article_id: articleId,
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaSection.validate(data, { abortEarly: false });
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

        if (item) {
            put(sections.articles.update.url(item.id), {
                forceFormData: true,
                preserveScroll: true,
            });

            console.log(data);
        } else {
            post(sections.articles.store.url(), {
                forceFormData: true,
                preserveScroll: true,
            });

        }
    };

    useEffect(() => {
        if (item) {
            setData({
                title: item.title ?? '',
                type: item.type ?? '',
                status: item.status ?? false,
                img_path: item.img_path ?? '',
                content: item.content ?? '',
            });
        }
    }, [item, setData]);

    return (
        <form onSubmit={onSubmit} className="space-y-4 py-5">
            <div className="flex justify-end">
                <button type="submit" disabled={processing} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 flex gap-x-2">
                    <Save className="w-5" />
                    {processing ? 'Enregistrement...' : item ? 'Mettre à jour' : 'Enregistrer'}
                </button>
            </div>
            <div className="px-4">

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
                    <label htmlFor="type" className="block font-medium">
                        Type
                    </label>
                    <select id="type" value={data.type} onChange={(e) => setData('type', e.target.value)} className="w-full rounded border p-2">
                        <option value="">--Sélectionner le type d'article--</option>
                        <option value="bulletin">Bulletin</option>
                        <option value="bonne pratique">Bonne pratique</option>
                        <option value="communiqué de presse">Communiqué de presse</option>
                        <option value="actualité">Actualité</option>
                    </select>
                    {validationErrors.type && <p className="text-sm text-red-500">{validationErrors.type}</p>}
                    {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block font-medium">
                        Image
                    </label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData('img_path', e.target.files ? e.target.files[0] : '')}
                        className="w-full rounded border p-2"
                    />
                    {validationErrors.image && <p className="text-sm text-red-500">{validationErrors.image}</p>}
                    {errors.img_path && <p className="text-sm text-red-500">{errors.img_path}</p>}
                </div>

                <div className="flex items-center space-x-2 mb-4">
                    <input
                        type="checkbox"
                        checked={data.status === true}
                        onChange={e => setData('status', e.target.checked)}
                    />
                    <label htmlFor="active" className="font-medium">
                        Statut
                    </label>
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block font-medium">
                        Contenu
                    </label>
                    <CKEditor
                        editor={ClassicEditor as any}
                        data={data.content || ''}
                        onChange={(_, editor) => {
                            const content = editor.getData();
                            setData('content', content);
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
                                'link',
                                'blockQuote',
                                '|',
                                'bulletedList',
                                'numberedList',
                                'outdent',
                                'indent',
                                '|',
                                'insertTable',
                                '|',
                                'imageUpload',
                                'mediaEmbed',
                                '|',
                                'alignment',
                                'fontColor',
                                'fontBackgroundColor',
                                'fontSize',
                                'fontFamily',
                            ],
                            ckfinder: {
                                uploadUrl: '/api/upload-image',
                            },
                            table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
                        }}
                    />
                    {validationErrors.content && <p className="text-sm text-red-500">{validationErrors.content}</p>}
                    {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
                </div>
            </div>

        </form>
    );
}
