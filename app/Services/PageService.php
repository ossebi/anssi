<?php

namespace App\Services;

use App\Models\Page;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PageService
{

    public function getAllPage()
    {
        return Page::all();
    }


    public function getPageBySlug(string $slug): ?Page
    {
        return Page::where('slug', $slug)->first();
    }

    /**
     * Crée une page
     *
     * @param array $data
     * @return Page
     */

    public function createPage(array $data): Page
    {
        return Page::create($data);
    }

    /**
     * Met à jour une page.
     *
     * @param Page $about
     * @param array $data
     * @return Page
     */
    public function updatePage(Page $page, array $data): Page
    {

        $page->update($data);

        return $page;
    }

    /**
     * Supprime une actualité.
     */
    public function deleteAbout(Page $page): bool
    {
        return $page->delete();
    }

}