<?php

namespace App\Http\Controllers;

use App\Http\Requests\TexteRequest;
use App\Models\Page;
use App\Models\Texte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TexteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $slug)
    {
        $page = Page::with('textes')
            ->where('slug', $slug)
            ->firstOrFail();

        $pageData = [
            'id' => $page->id,
            'title' => $page->title,
            'slug' => $page->slug,
            'textes' => $page->textes->map(function ($texte) {
                return [
                    'id' => $texte->id,
                    'title' => $texte->title,
                    'path' => $texte->path,
                    'description' => $texte->description,
                ];
            }),
        ];

        return Inertia::render('textes/index', compact('pageData'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();

        return Inertia::render('textes/create', compact('page'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TexteRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('path')) {
            $file = $request->file('path');
            $filePath = $file->store('textes', 'public');
            $validated['path'] = $filePath;
        }

        Texte::create($validated);


        return redirect()->back()->with('success', 'Texte ou loi créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $texteData = Texte::findOrFail($id);

        return Inertia::render('textes/edit', compact('texteData'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TexteRequest $request, string $id)
    {
        $texte = Texte::findOrFail($id);

        $validated = $request->validated();

        if ($request->hasFile('path')) {
            // 🔹 Supprimer l'ancien fichier s'il existe
            if ($texte->path && Storage::disk('public')->exists($texte->path)) {
                Storage::disk('public')->delete($texte->path);
            }

            // 🔹 Enregistrer le nouveau fichier
            $file = $request->file('path');
            $filePath = $file->store('textes', 'public');
            $validated['path'] = $filePath;
        }

        $texte->update($validated);

        return redirect()->route('admin.textes.index')
            ->with('success', 'Texte ou loi mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $texte = Texte::findOrFail($id);

        // Supprimer le fichier associé s'il existe
        if ($texte->path && Storage::disk('public')->exists($texte->path)) {
            Storage::disk('public')->delete($texte->path);
        }

        $texte->delete();

        return redirect()->route('admin.textes.index')
            ->with('success', 'Texte ou loi supprimé avec succès.');
    }
}
