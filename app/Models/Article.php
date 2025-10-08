<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
        protected $fillable = [
        'title',
        'slug',
    ];

    public function sectionArticles()
    {
        return $this->hasMany(SectionArticle::class);
    }
}
