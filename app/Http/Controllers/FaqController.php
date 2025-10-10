<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        $faqDatas = Faq::all();

        return Inertia::render('faq/index', compact('faqDatas'));
    }

    public function create()
    {
        return Inertia::render('faq/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
        ]);

        Faq::create($validated);

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ créée avec succès.');
    }

    public function edit(Faq $faq)
    {
        return Inertia::render('faq/edit', compact('faq'));
    }

    public function update(Request $request, Faq $faq)
    {
        $validated = $request->validate([
            'request' => 'required|string|max:255',
            'response' => 'required|string',
        ]);

        $faq->update($validated);

        return redirect()->route('faq.index')->with('success', 'FAQ mise à jour avec succès.');
    }

    public function destroy(Faq $faq)
    {
        $faq->delete();

        return redirect()->route('faq.index')->with('success', 'FAQ supprimée avec succès.');
    }
}
