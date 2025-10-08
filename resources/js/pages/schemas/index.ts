import article from '@/routes/article';
import path from 'path';
import * as yup from 'yup';

export const schemaPage = yup.object({
    name: yup.string().required('Le nom de la page est obligatoire'),
    slug: yup.string().required('Le slug de la page est obligatoire'),
    title: yup.string().nullable(),
    subtitle: yup.string().nullable(),
    description: yup.string().nullable(),
});

export const schemaService = yup.object({
    name: yup.string().required('Le nom du service est obligatoire'),
    content: yup.string().required('Le contenu du service est obligatoire'),
    description: yup.string().nullable(),
    active: yup.boolean(),
});

export const schemaArticle = yup.object({
    title: yup.string().required("Le titre de l'article est obligatoire"),
});

export const schemaVision = yup.object({
    title: yup.string().required("Le titre de la vision est obligatoire"),
    content: yup.string().nullable(),
    description: yup.string().required("La description de la visison est obligatoire"),
});

export const schemaSection = yup.object({
    title: yup.string().required("Le titre de la section est obligatoire"),
    type: yup.string().required("Le type est obligatoire"),
    img_path: yup.string().nullable(),
    content: yup.string().nullable(),
    status: yup.boolean().required(),
    article_id: yup.number().required(),
});

export const schemaAbout = yup.object({
    slogan: yup.string().required("Le titre de la section est obligatoire"),
    description: yup.string().required("La description est obligatoire"),
});

export const schemaSectionPage = yup.object({
    title: yup.string().required("Le titre de la section est obligatoire"),
    img_path: yup.string().nullable(),
    content: yup.string().nullable(),
    page_id: yup.number().required("La page est obligatoire"),
});

export const schemaTexte = yup.object({
    title: yup.string().required("Le titre du texte est obligatoire"),
    description: yup.string().nullable(),  
    path: yup.string().required("Le chemin du fichier est obligatoire"),
    page_id: yup.number().required("La page est obligatoire"), 
});


export type PageFormData = yup.InferType<typeof schemaPage>;
export type ServiceFormData = yup.InferType<typeof schemaService>;
export type ArticleFormData = yup.InferType<typeof schemaArticle>;
export type VisionFormData = yup.InferType<typeof schemaVision>;
export type SectionFormData = yup.InferType<typeof schemaSection>;
export type AboutFormData = yup.InferType<typeof schemaAbout>;
export type SectionPageFormData = yup.InferType<typeof schemaSectionPage>;
export type TexteFormData = yup.InferType<typeof schemaTexte>;

