<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
        protected $fillable = [
        'title',
        'tag',
        'description',
        'slug',
        'image',
    ];

    public function sectionArticles()
    {
        return $this->hasMany(SectionArticle::class);
    }
}
