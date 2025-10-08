<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AproposController extends Controller
{
    public function index()
    {
        $pagesData = Page::all();

        return Inertia::render('apropos/Index', compact('pagesData'));
    }
}
