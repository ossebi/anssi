import { PageFormData, schemaPage } from "@/pages/schemas";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Save } from "lucide-react";
import { Page } from "@/types";
import admin from "@/routes/admin";


export default function PageForm({ item }: { item?: Page }) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<PageFormData>({
        name: item?.name || '',
        slug: item?.slug || '',
        title: item?.title || '',
        subtitle: item?.subtitle || '',
        description: item?.description || '',
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaPage.validate(data, { abortEarly: false });
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
            put(admin.pages.update.url(item.slug), {
                preserveScroll: true,
            });

        } else {
            post(admin.pages.store.url(), {
                preserveScroll: true,
            });

        }
    };

    useEffect(() => {
        if (item) {
            setData({
                name: item.name || '',
                slug: item.slug || '',
                title: item.title || '',
                subtitle: item.subtitle || '',
                description: item.description || '',
            });
        }
    }, [item, setData]);

    return (
        <form onSubmit={onSubmit} className="space-y-4 py-5">
            <div className="flex justify-end">
                <button type="submit" disabled={processing} className="flex items-center rounded bg-blue-600 text-sm px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 gap-x-2">
                    <Save className="w-4" />
                    <span> {processing ? 'Enregistrement...' : item ? 'Mettre à jour la page' : 'Créer la page A-propos'}</span>
                </button>
            </div>
            <div className="px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium">
                            Nom de la page
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded border p-2"
                        />
                        {validationErrors.name && <p className="text-sm text-red-500">{validationErrors.name}</p>}
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="slug" className="block font-medium">
                            Slug
                        </label>
                        <input
                            id="slug"
                            type="text"
                            value={data.slug ?? ''}
                            onChange={(e) => setData('slug', e.target.value)}
                            className="w-full rounded border p-2"
                        />
                        {validationErrors.slug && <p className="text-sm text-red-500">{validationErrors.slug}</p>}
                        {errors.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                    </div>
                </div>


                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium">
                        Titre
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={data.title ?? ''}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full rounded border p-2"
                    />
                    {validationErrors.title && <p className="text-sm text-red-500">{validationErrors.title}</p>}
                    {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                </div>

                  <div className="mb-4">
                    <label htmlFor="subtitle" className="block font-medium">
                        Sous titre
                    </label>
                    <input
                        id="subtitle"
                        type="text"
                        value={data.subtitle ?? ''}
                        onChange={(e) => setData('subtitle', e.target.value)}
                        className="w-full rounded border p-2"
                    />
                    {validationErrors.title && <p className="text-sm text-red-500">{validationErrors.title}</p>}
                    {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block font-medium">
                        Description
                    </label>
                    <CKEditor
                        editor={ClassicEditor as any}
                        data={data.description || ''}
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
                    {validationErrors.description && <p className="text-sm text-red-500">{validationErrors.description}</p>}
                    {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                </div>
            </div>

        </form>
    );
}
