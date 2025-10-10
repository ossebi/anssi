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

    public function createArticle($data, ?UploadedFile $image = null): Article
    {
        $data['slug'] = Str::slug($data['title']) . '-' . uniqid();


        // Gestion de l'image
        if ($image) {
            $path = $image->store('articles', 'public');
            $data['image'] = $path;
        }

        $article = Article::create($data);


        return $article;
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
    public function updateArticle(Article $article, array $data, ?UploadedFile $image = null): Article
    {
        $data['slug'] = Str::slug($data['title']);

        if ($image) {
            // Supprimer l'ancienne image si elle existe
            if ($article->image) {
                Storage::disk('public')->delete($article->image);
            }
            // Stocker la nouvelle image
            $path = $image->store('articles', 'public');
            $data['image'] = $path;
        }

        $article->update($data);

        return $article;
    }

    /**
     * Supprime une actualité.
     */
    public function deleteArticle(Article $article): bool
    {
        // Supprimer l'image associée si elle existe
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }
        return $article->delete();
    }

}