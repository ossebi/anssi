<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Texte extends Model
{
    protected $fillable = [
        'title',
        'description',
        'path',
        'page_id',
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
