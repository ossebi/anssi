<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Models\Actualite;
use App\Services\ArticleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActualityController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    protected $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index()
    {
        $articles = $this->articleService->getAllArticles();

        return Inertia::render('actualities/Index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('actualities/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        $validated = $request->validated();

        $this->articleService->createArticle(
            $validated,
            $request->file('img_path')
        );

        // Redirection
        return redirect()->route('actualites.index')
            ->with('success', "L'actualité a été créée avec succès !");
    }

    /**
     * Display the specified resource.
     */
    public function show(Actualite $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $article = $this->articleService->editeArticleBySlug($slug);

        return Inertia::render('actualities/Edit', compact('article'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, string $slug)
    {
        $arcticle = Actualite::where('slug', $slug)->firstOrFail();

        $validated = $request->validated();

        $this->articleService->updateArticle(
            $arcticle, 
            $validated,  
            $request->file('img_path')
        );

        return redirect()->back()
            ->with('success', "L'actualité a été créée avec succès !");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
