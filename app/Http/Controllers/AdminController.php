<?php

namespace App\Http\Controllers;

use App\Models\Vision;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function vision()
    {
         $visionsProps = Vision::latest()->paginate(2);

        return Inertia::render('visions/index', compact('visionsProps'));
    }
    public function createVision()
    {
        return Inertia::render('visions/create');
    }

    /**
     * Enregistre une nouvelle vision
     */
    public function storeVision(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'description' => 'required|string'
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        Vision::create($validated);

        return redirect()->route('vision.index')
                         ->with('success', 'Vision ajoutée avec succès');
    }

    /**
     * Affiche une vision précise
     */
    public function showVision(Vision $vision)
    {
        return Inertia::render('visions/show', compact('vision'));
    }

    /**
     * Affiche le formulaire d’édition
     */
    public function editVision( $vision)
    {
        $editVision = Vision::where('slug', $vision)->firstOrFail();

        return Inertia::render('visions/edit', compact('editVision'));
    }

    /**
     * Met à jour une vision
     */
    public function updateVision(Request $request, Vision $vision)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'description' => 'required|string'
        ]);


        $validated['slug'] = Str::slug($validated['title']);

        $vision->update($validated);

        return redirect()->route('vision.edit', $vision->slug)
                         ->with('success', 'Vision mise à jour avec succès');
    }

    /**
     * Supprime une vision
     */
    public function destroyVision(Vision $vision)
    {
        $vision->delete();

        return redirect()->route('vision.index')
                         ->with('success', 'Vision supprimée avec succès');
    }
}
