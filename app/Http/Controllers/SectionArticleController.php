<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionFormRequest;
use App\Models\Article;
use App\Models\SectionArticle;
use App\Services\SectionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionArticleController extends Controller
{
    protected $sectionService;

    public function __construct(SectionService $sectionService)
    {
        $this->sectionService = $sectionService;
    }
    public function index(string $slug)
    {
        $article = Article::with('sectionArticles')
            ->where('slug', $slug)
            ->firstOrFail();

        $articleData = [
            'id' => $article->id,
            'title' => $article->title,
            'slug' => $article->slug,
            'sectionsData' => $article->sectionArticles->map(function ($section) {
                return [
                    'id' => $section->id,
                    'title' => $section->title,
                    'img_path' => $section->img_path,
                    'content' => $section->content,
                    'type' => $section->type,
                    'status' => (bool) $section->status,
                ];
            }),
        ];


        return Inertia::render('articles/sections/index', compact('articleData'));
    }

    public function create(string $slug)
    {
        $articleData = Article::where('slug', $slug)->firstOrFail();

        return Inertia::render('articles/sections/create', compact('articleData'));
    }

    public function store(SectionFormRequest $request)
    {
        $validated = $request->validated();

        $this->sectionService->createSection($validated, $request->file('img_path'));

        // Redirection
        return redirect()->back()
            ->with('success', "La section a été créé avec succès !");
    }

    public function edit(string $slug, int $sectionArticle)
    {
        $articleData = Article::where('slug', $slug)->firstOrFail();

        $sectionArticle = SectionArticle::findOrFail($sectionArticle);


        return Inertia::render('articles/sections/edit', compact('articleData', 'sectionArticle'));
    }

    public function update(SectionFormRequest $request, int $sectionArticle)
    {

        dd($sectionArticle);
        $sectionArticle = SectionArticle::findOrFail($sectionArticle);

        $validated = $request->validated();

        $this->sectionService->updateSection(
            $sectionArticle,
            $validated,
            $request->file('img_path')
        );

        return redirect()->back()
            ->with('success', "La section a été mis à jour avec succès !");
    }

    public function destroy(int $sectionArticle)
    {

        $sectionArticle = SectionArticle::findOrFail($sectionArticle);
        $sectionArticle->delete();
        return redirect()->back()
            ->with('success', "La section a été supprimée avec succès !");
    }
}
