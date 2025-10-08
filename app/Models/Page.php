<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'title',
        'description',
        'subtitle',
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function textes()
    {
        return $this->hasMany(Texte::class);
    }
}
