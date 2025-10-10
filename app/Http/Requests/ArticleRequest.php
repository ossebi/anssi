<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'tag' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

       public function messages(): array
    {
        return [
            'title.required' => "Le titre de l'article est obligatoire.",
            'tag.required' => "Le tag de l'article est obligatoire.",
            'description.string' => "La description de l'article doit être une chaîne de caractères.",
            'image.image' => "Le fichier doit être une image.",
            'image.mimes' => "L'image doit être un fichier de type : jpeg, png, jpg, gif, svg.",
            'image.max' => "L'image ne doit pas dépasser 2 Mo.",
        ];
    }
}
