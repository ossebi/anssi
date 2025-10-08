<?php

namespace App\Services;

use App\Models\Actualite;
use App\Models\SectionArticle;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SectionService
{
    public function getAllSection()
    {
        return SectionArticle::latest()->get();
    }

    /**
     * Crée une actualité
     *
     * @param array $data
     * @param UploadedFile|null $image
     * @return SectionArticle
     */

    public function createSection($data, ?UploadedFile $image = null)
    {
        // Gestion du fichier image
        if ($image) {
            $data['img_path'] = $image->store('articles', 'public');
        }

        // Création dans la base
        return SectionArticle::create($data);
    }

    public function getArticleById(int $id): ?SectionArticle
    {
        return SectionArticle::find($id);
    }

    /**
     * Met à jour une actualité.
     *
     * @param SectionArticle $section
     * @param array $data
     * @param UploadedFile|null $image
     * @return SectionArticle
     */
    public function updateSection(SectionArticle $section, array $data, ?UploadedFile $image = null): SectionArticle
    {

        if ($image) {
            // Supprimer l'ancienne image si nécessaire
            if ($section->img_path && Storage::disk('public')->exists($section->img_path)) {
                Storage::disk('public')->delete($section->img_path);
            }

            $data['img_path'] = $image->store('articles', 'public');
        }

        $section->update($data);

        return $section;
    }

    /**
     * Supprime une actualité.
     */


}