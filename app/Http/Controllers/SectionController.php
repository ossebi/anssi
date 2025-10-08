<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionFormRequest;
use App\Http\Requests\SectionPageFormRequest;
use App\Models\Page;
use App\Models\Section;
use App\Services\SectionPageService;
use App\Services\SectionService;
use Inertia\Inertia;

class SectionController extends Controller
{
    protected $sectionService;

    public function __construct(SectionPageService $sectionService)
    {
        $this->sectionService = $sectionService;
        
    }

     public function index(string $slug)
    {
       
        $page = Page::with('sections')
            ->where('slug', $slug)
            ->firstOrFail();

        $pageData = [
            'id' => $page->id,
            'title' => $page->title,
            'slug' => $page->slug,
            'section' => $page->sections->map(function ($section) {
                return [
                    'id' => $section->id,
                    'title' => $section->title,
                    'img_path' => $section->img_path,
                    'content' => $section->content,
                ];
            }),
        ];


        return Inertia::render('sites/sections/index', compact('pageData'));
    }

    public function create(string $slug)
    {
        $pageData = Page::where('slug', $slug)->firstOrFail();

        return Inertia::render('sites/sections/create', compact('pageData'));
    }

    public function store(SectionPageFormRequest $request)
    {
    
        $validated = $request->validated();

        $this->sectionService->createSection($validated, $request->file('img_path'));

        // Redirection
        return redirect()->back()
            ->with('success', "La section a été créé avec succès !");
    }

    public function edit(string $slug, int $section)
    {
        $pageData = Page::where('slug', $slug)->firstOrFail();

        $sectionData = $pageData->sections()->where('id', $section)->firstOrFail();


        return Inertia::render('sites/sections/edit', compact('sectionData', 'pageData'));
    }

    public function update(SectionPageFormRequest $request, int $section)
    {
    
        $section = Section::findOrFail($section);

        $validated = $request->validated();

        $this->sectionService->updateSection(
            $section,
            $validated,
            $request->file('img_path')
        );

        return redirect()->back()
            ->with('success', "La section a été mis à jour avec succès !");
    }

    public function destroy(int $section)
    {

        $section = Section::findOrFail($section);
        $section->delete();

        return redirect()->back()
            ->with('success', "La section a été supprimée avec succès !");
    }
}
