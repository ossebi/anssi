import { FaqFormData, schemaFaq } from "@/pages/schemas";
import { Faq } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Save } from "lucide-react";
import admin from "@/routes/admin";


export default function FaqForm({ item }: { item?: Faq }) {

    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const { data, setData, post, put, errors, processing } = useForm<FaqFormData>({
        question: item?.question ?? '',
        answer: item?.answer ?? '',
    });

    const validateForm = async (): Promise<boolean> => {
        try {
            await schemaFaq.validate(data, { abortEarly: false });
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
            put(admin.faqs.update.url(item.id), {
                preserveScroll: true,
               
            });

        } else {
            post(admin.faqs.store.url(), {
                forceFormData: true,
                preserveScroll: true,
            });

        }
    };

    useEffect(() => {
        if (item) {
            setData({
                question: item.question ?? '',
                answer: item.answer ?? '',
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
                    <label htmlFor="question" className="block font-medium">
                        Question
                    </label>
                    <input
                        id="question"
                        type="text"
                        value={data.question}
                        onChange={(e) => setData('question', e.target.value)}
                        className="w-full rounded border p-2"
                    />
                    {validationErrors.question && <p className="text-sm text-red-500">{validationErrors.question}</p>}
                    {errors.question && <p className="text-sm text-red-500">{errors.question}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="answer" className="block font-medium">
                        Réponse
                    </label>
                    <CKEditor
                        editor={ClassicEditor as any}
                        data={data.answer || ''}
                        onChange={(_, editor) => {
                            const answer = editor.getData();
                            setData('answer', answer);
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
                    {validationErrors.answer && <p className="text-sm text-red-500">{validationErrors.answer}</p>}
                    {errors.answer && <p className="text-sm text-red-500">{errors.answer}</p>}
                </div>
            </div>

        </form>
    );
}
