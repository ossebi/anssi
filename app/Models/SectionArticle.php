<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SectionArticle extends Model
{
    protected $fillable = [
        'article_id',
        'title',
        'img_path',
        'content',
        'status',
        'type',
    ]; 

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
