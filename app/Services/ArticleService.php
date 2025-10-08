<?php

namespace App\Services;

use App\Models\Article;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleService
{
    public function getAllArticles()
    {
        return Article::latest()->paginate();
    }

    /**
     * Crée une actualité
     *
     * @param array $data
     * @return Article
     */

    public function createArticle($data)
    {
        $data['slug'] = Str::slug($data['title']);

        // Création dans la base
        return Article::create($data);
    }

    public function getArticleBySlug(string $slug): ?Article
    {
        return Article::where('slug', $slug)->first();
    }

    public function getArticleById(int $id): ?Article
    {
        return Article::find($id);
    }

    public function editeArticleBySlug(string $slug)
    {
        return Article::where('slug', $slug)->firstOrFail();
    }
    /**
     * Met à jour une actualité.
     *
     * @param Article $article
     * @param array $data
     * @return Article
     */
    public function updateArticle(Article $article, array $data): Article
    {
        $data['slug'] = Str::slug($data['title']);

        $article->update($data);

        return $article; 
    }

    /**
     * Supprime une actualité.
     */
    public function deleteArticle(Article $article): bool
    {
        return $article->delete();
    }

}