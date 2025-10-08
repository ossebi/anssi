<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        'title',
        'content',
        'img_path',
        'page_id',
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
