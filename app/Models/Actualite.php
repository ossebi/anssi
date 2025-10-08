<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
     protected $fillable = [
        'title',
        'slug',
        'description',
        'img_path',
        'content',
        'status',
        'type',
        'link',
    ];

     public function getRouteKeyName()
    {
        return 'slug';
    }
}
