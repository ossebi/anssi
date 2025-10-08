<?php

namespace App\Http\Controllers;

use App\Http\Requests\PageRequest;
use App\Models\Page;
use App\Models\Vision;
use App\Services\PageService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    private $pageService;

    public function __construct(PageService $pageService)
    {
        $this->pageService = $pageService;
    }

    public function index()
    {
        $pages = $this->pageService->getAllPage();

        return Inertia::render('sites/index', compact('pages'));
    }

    public function show($slug)
    {
        $pageData = $this->pageService->getPageBySlug($slug);

        return Inertia::render('sites/show', compact('pageData'));
    }

    public function aboutPage()
    {
        $pageData = $this->pageService->getPageBySlug('about');

        return Inertia::render('sites/show', compact('pageData'));
    }

    public function faqPage()
    {
        $pageData = $this->pageService->getPageBySlug('faq');

        return Inertia::render('sites/show', compact('pageData'));
    }

    public function create()
    {
        return Inertia::render('sites/create');
    }

    public function store(PageRequest $request)
    {
        $validated = $request->validated();

        $this->pageService->createPage($validated);

        return redirect()->route('sites.index')->with('success', 'Page créée avec succès.');
    }

    public function edit(string $slug)
    {
        $page = $this->pageService->getPageBySlug($slug);

        return Inertia::render('sites/edit', compact('page'));
    }

    public function update(PageRequest $request, string $slug)
    {
        $page = $this->pageService->getPageBySlug($slug);

        $validated = $request->validated();

        $this->pageService->updatePage($page, $validated);

        return redirect()->back()->with('success', 'Page mise à jour avec succès.');
    }

    public function destroy(string $slug)
    {
        $page = $this->pageService->getPageBySlug($slug);

        $this->pageService->deleteAbout($page);

        return redirect()->route('sites.index')->with('success', 'Page supprimée avec succès.');
    }




    public function home()
    {
        $visionsProps = Vision::paginate(10);

        $pagesData = Page::all();

        return Inertia::render('welcome', compact( 'visionsProps', 'pagesData'));
    }

    public function article()
    {
        return Inertia::render('article');
    }
    public function textNational()
    {
        $page = Page::where('slug', 'textes-nationaux')->firstOrFail();

        $pageData = [
            'id' => $page->id,
            'name' => $page->name,
            'slug' => $page->slug,
            'title' => $page->title,
            'subtitle' => $page->subtitle,
            'description' => $page->description,
            'textes' => $page->textes->map(function ($texte) {
                return [
                    'id' => $texte->id,
                    'title' => $texte->title,
                    'subtitle' => $texte->subtitle,
                    'description' => $texte->description,
                    'path' => $texte->path,
                    'created_at' => $texte->created_at->toDateString(),
                ];
            }),
        ];
        return Inertia::render('textNational', compact('pageData'));
    }
    public function formation()
    {
        return Inertia::render('formation');
    }
    public function lexique()
    {
        return Inertia::render('lexique');
    }
    public function normes()
    {
        return Inertia::render('norme');
    }
    public function referentiel()
    {
        return Inertia::render('referentiel');
    }
    public function aggrement()
    {
        return Inertia::render('aggrement');
    }
    public function athentification()
    {
        return Inertia::render('athentification');
    }
    public function faq()
    {
        $slug = 'foire-aux-questions';

        $pageData = $this->pageService->getPageBySlug($slug);
        
        return Inertia::render('faq', compact('pageData'));
    }
    public function contact()
    {
        return Inertia::render('contact');
    }

    public function showVision($slug)
    {
        $vision = Vision::where('slug', $slug)->firstOrFail();

        return Inertia::render('vision', compact('vision'));
    }

}
