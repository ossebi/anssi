<?php

namespace App\Http\Controllers;

use App\Http\Requests\AboutRequest;
use App\Services\AboutService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    private $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function index()
    {
        $aboutData = $this->aboutService->getAbout();
        return Inertia::render('abouts/index', compact('aboutData'));
    }

    public function create()
    {
        return Inertia::render('abouts/create');
    }

    public function store(AboutRequest $request)
    {
        $validated = $request->validated();

        $this->aboutService->createAbout($validated);

        return redirect()->route('abouts.index')->with('success', 'À propos créé avec succès.');
    }

    public function show($slug)
    {
        $aboutData = $this->aboutService->getAbout();

        if (!$aboutData || $aboutData->slug !== $slug) {
            return redirect()->route('abouts.index')->with('error', 'À propos non trouvé.');
        }

        return Inertia::render('abouts/show', compact('aboutData'));
    }

    public function edit(int $id)
    {
        $aboutData = $this->aboutService->getAbout();

        return Inertia::render('abouts/edit', compact('aboutData'));
    }

    public function update(AboutRequest $request, int $id)
    {
        $aboutData = $this->aboutService->getAbout();

        $validated = $request->validated();

        $this->aboutService->updateAbout($aboutData, $validated);

        return redirect()->route('abouts.index')->with('success', 'À propos mis à jour avec succès.');
    }

    public function destroy(int $id)
    {
        $aboutData = $this->aboutService->getAbout();

        $this->aboutService->deleteAbout($aboutData);

        return redirect()->route('abouts.index')->with('success', 'À propos supprimé avec succès.');
    }
}
