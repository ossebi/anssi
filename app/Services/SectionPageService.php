<?php

namespace App\Services;

use App\Models\Actualite;
use App\Models\Section;
use App\Models\SectionArticle;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SectionPageService
{
    public function getAllSection()
    {
        return Section::latest()->get();
    }

    /**
     * Crée une actualité
     *
     * @param array $data
     * @param UploadedFile|null $image
     * @return Section
     */

    public function createSection($data, ?UploadedFile $image = null)
    {
        // Gestion du fichier image
        if ($image) {
            $data['img_path'] = $image->store('pages', 'public');
        }

        // Création dans la base
        return Section::create($data);
    }

    public function getSectionById(int $id): ?Section
    {
        return Section::find($id);
    }

    /**
     * Met à jour une actualité.
     *
     * @param Section $section
     * @param array $data
     * @param UploadedFile|null $image
     * @return Section
     */
    public function updateSection(Section $section, array $data, ?UploadedFile $image = null): Section
    {

        if ($image) {
            // Supprimer l'ancienne image si nécessaire
            if ($section->img_path && Storage::disk('public')->exists($section->img_path)) {
                Storage::disk('public')->delete($section->img_path);
            }

            $data['img_path'] = $image->store('pages', 'public');
        }

        $section->update($data);

        return $section;
    }

    /**
     * Supprime une actualité.
     */


}