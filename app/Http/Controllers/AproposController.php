<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AproposController extends Controller
{
    public function index()
    {
        $lastSegment = request()->segment(count(request()->segments()));

        $page = Page::where('slug', $lastSegment)->firstOrFail();

        $pageData = [
            'id' => $page->id,
            'name' => $page->name,
            'slug' => $page->slug,
            'title' => $page->title,
            'subtitle' => $page->subtitle,
            'description' => $page->description,
            'section' => $page->sections()->orderBy('order')->get()->map(function ($section) {
                return [
                    'id' => $section->id,
                    'title' => $section->title,
                    'content' => $section->content,
                    'img_path' => $section->image_path,
                ];
            }),
        ];

        return Inertia::render('apropos/Index', compact('pageData'));
    }
}
