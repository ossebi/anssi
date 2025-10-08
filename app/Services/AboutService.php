<?php

namespace App\Services;

use App\Models\About;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AboutService
{

    public function getAbout()
    {
        return About::latest()->first();
    }

    /**
     * Crée une actualité
     *
     * @param array $data
     * @return About
     */

    public function createAbout(array $data): About
    {
        return About::create($data);
    }

    /**
     * Met à jour une actualité.
     *
     * @param About $about
     * @param array $data
     * @return About
     */
    public function updateAbout(About $about, array $data): About
    {

        $about->update($data);

        return $about;
    }

    /**
     * Supprime une actualité.
     */
    public function deleteAbout(About $about): bool
    {
        return $about->delete();
    }

}