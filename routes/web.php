<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AproposController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SectionAboutController;
use App\Http\Controllers\SectionArticleController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\TexteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/qui-sommes-nous', [AproposController::class, 'index'])->name('apropos.index');
Route::get('foire-aux-questions', [PageController::class, 'faq'])->name('faq.index');
Route::get('nous-contacter', [PageController::class, 'contact'])->name('contact.index');
Route::get('agrements-et-accreditations', [PageController::class, 'aggrement'])->name('aggrement.index');
Route::get('authentification-des-documents', [PageController::class, 'athentification'])->name('athentification.index');
Route::get('textes-nationaux', [PageController::class, 'textNational'])->name('textNational.index');
Route::get('normes-et-standards', [PageController::class, 'normes'])->name('norme.index');
Route::get('referentiels-de-securite', [PageController::class, 'referentiel'])->name('referentiel.index');
Route::get('publications', [PageController::class, 'article'])->name('article.index');

Route::get('formation', [PageController::class, 'formation'])->name('formation.index');
Route::get('lexique-cybersecurite', [PageController::class, 'lexique'])->name('lexique.index');




// Vision
Route::get('page/vision/{slug}', [PageController::class, 'showVision'])->name('page.showVision');


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');


    Route::resource('section_abouts', SectionAboutController::class);


    Route::prefix('admin')->group(function () {

        Route::get('/articles', [ArticleController::class, 'index'])->name('admin.articles.index');
        Route::get('/articles/create', [ArticleController::class, 'create'])->name('admin.articles.create');
        Route::post('/articles', [ArticleController::class, 'store'])->name('admin.articles.store');
        Route::get('/articles/{id}/edit', [ArticleController::class, 'edit'])->name('admin.articles.edit');
        Route::put('/articles/{article}', [ArticleController::class, 'update'])->name('admin.articles.update');
        Route::delete('/articles/{article}', [ArticleController::class, 'destroy'])->name('admin.articles.destroy');


        Route::get('/pages', [PageController::class, 'index'])->name('admin.pages.index');

        Route::get('/pages/{slug}', [PageController::class, 'show'])->name('admin.pages.show');

        Route::post('/pages', [PageController::class, 'store'])->name('admin.pages.store');
        Route::put('/pages/{slug}', [PageController::class, 'update'])->name('admin.pages.update');

        Route::get('pages/{slug}/sections', [SectionController::class, 'index'])->name('admin.sections.index');
        Route::get('pages/{slug}/sections/create', [SectionController::class, 'create'])->name('admin.sections.create');
        Route::post('/pages/sections', [SectionController::class, 'store'])->name('admin.sections.store');
        Route::get('pages/sections/{section}', [SectionController::class, 'show'])->name('admin.sections.show');
        Route::get('pages/{slug}/sections/{section}/edit', [SectionController::class, 'edit'])->name('admin.sections.edit');
        Route::put('pages/sections/{section}', [SectionController::class, 'update'])->name('admin.sections.update');
        Route::delete('pages/sections/{section}', [SectionController::class, 'destroy'])->name('admin.sections.destroy');


        Route::get('/textes/{slug}', [TexteController::class, 'index'])->name('admin.textes.index');
        Route::get('/textes/{slug}/create', [TexteController::class, 'create'])->name('admin.textes.create');
        Route::post('/textes', [TexteController::class, 'store'])->name('admin.textes.store');
        Route::get('/textes/{id}', [TexteController::class, 'show'])->name('admin.textes.show');
        Route::get('/textes/{id}/edit', [TexteController::class, 'edit'])->name('admin.textes.edit');
        Route::put('/textes/{id}', [TexteController::class, 'update'])->name('admin.textes.update');
        Route::delete('/textes/{id}', [TexteController::class, 'destroy'])->name('admin.textes.destroy');


        Route::get('/faq', [FaqController::class, 'index'])->name('admin.faqs.index');
        Route::get('/faq/create', [FaqController::class, 'create'])->name('admin.faqs.create');
        Route::post('/faq', [FaqController::class, 'store'])->name('admin.faqs.store');
        Route::get('/faq/{faq}', [FaqController::class, 'show'])->name('admin.faqs.show');
        Route::get('/faq/{faq}/edit', [FaqController::class, 'edit'])->name('admin.faqs.edit');
        Route::put('/faq/{faq}', [FaqController::class, 'update'])->name('admin.faqs.update');
        Route::delete('/faq/{faq}', [FaqController::class, 'destroy'])->name('admin.faqs.destroy');
    });

    Route::prefix('abouts')->group(function () {
        Route::get('/', [AboutController::class, 'index'])->name('abouts.index');
        Route::get('/create', [AboutController::class, 'create'])->name('abouts.create');
        Route::post('/', [AboutController::class, 'store'])->name('abouts.store');
        Route::get('/{slug}', [AboutController::class, 'show'])->name('abouts.show');
        Route::get('/{id}/edit', [AboutController::class, 'edit'])->name('abouts.edit');
        Route::put('/{about}', [AboutController::class, 'update'])->name('abouts.update');
        Route::delete('/{slug}', [AboutController::class, 'destroy'])->name('abouts.destroy');
    });

    Route::prefix('articles')->group(function () {
        Route::get('/{slug}/sections', [SectionArticleController::class, 'index'])->name('sections.articles.index');
        Route::get('/sections/{slug}/create', [SectionArticleController::class, 'create'])->name('sections.articles.create');
        Route::post('/sections', [SectionArticleController::class, 'store'])->name('sections.articles.store');
        Route::get('/sections/{section}', [SectionArticleController::class, 'show'])->name('sections.articles.show');
        Route::get('/{slug}/sections/{section}/edit', [SectionArticleController::class, 'edit'])->name('sections.articles.edit');
        Route::put('/sections/{section}', [SectionArticleController::class, 'update'])->name('sections.articles.update');
        Route::delete('/sections/{section}', [SectionArticleController::class, 'destroy'])->name('sections.articles.destroy');
    });

    Route::prefix('visions')->group(function () {
        Route::get('/', [AdminController::class, 'vision'])->name('vision.index');
        Route::get('/create', [AdminController::class, 'createVision'])->name('vision.create');
        Route::post('/', [AdminController::class, 'storeVision'])->name('vision.store');
        Route::get('/{slug}', [AdminController::class, 'showVision'])->name('vision.show');
        Route::get('/{slug}/edit', [AdminController::class, 'editVision'])->name('vision.edit');
        Route::put('/{vision}', [AdminController::class, 'updateVision'])->name('vision.update');
        Route::delete('/{slug}', [AdminController::class, 'destroyVision'])->name('vision.destroy');
    });


});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
