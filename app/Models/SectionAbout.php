<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SectionAbout extends Model
{
    protected $fillable = [
        'title',
        'content',
        'img_path',
        'status',
        'about_id',
        'order',
    ];
    public function about()
    {
        return $this->belongsTo(About::class);
    }
}
