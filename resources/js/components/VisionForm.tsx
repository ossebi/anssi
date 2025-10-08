import { schemaVision, VisionFormData } from "@/pages/schemas";
import { Vision } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Save } from "lucide-react";
import vision from "@/routes/vision";


export default function VisionForm({ item }: { item?: Vision }) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<VisionFormData>({
        
        title: item?.title ?? '',
        content: item?.content ?? '',
        description: item?.description ?? '',
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaVision.validate(data, { abortEarly: false });
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
            put(vision.update.url(item.id), {
                preserveScroll: true,
            });
        } else {
            post(vision.store.url(), {
                preserveScroll: true,
            });
        }
    };

    useEffect(() => {
        if (item) {
            setData({
                title: item.title ?? '',
                description: item.description ?? '',
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

            <div>
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
                        table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
                    }}
                />
                {validationErrors.description && <p className="text-sm text-red-500">{validationErrors.description}</p>}
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="content" className="block font-medium">
                    Contenu
                </label>
                <CKEditor
                    editor={ClassicEditor}
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

        </form>
    );
}
