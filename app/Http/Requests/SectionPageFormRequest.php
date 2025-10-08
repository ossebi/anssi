<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SectionPageFormRequest extends FormRequest
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
            'content' => 'nullable|string',
            'img_path' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:2048',
            'page_id' => 'required|exists:pages,id',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Le titre est obligatoire.',
            'title.string' => 'Le titre doit être une chaîne de caractères.',
            'title.max' => 'Le titre ne doit pas dépasser 255 caractères.',

            'type.required' => 'Le type est obligatoire.',
            'type.string' => 'Le type doit être une chaîne de caractères.',

            'content.string' => 'Le contenu doit être une chaîne de caractères.',

            'img_path.image' => 'Le fichier doit être une image.',
            'img_path.mimes' => 'L’image doit être au format : jpg, jpeg, png, gif ou webp.',
            'img_path.max' => 'L’image ne doit pas dépasser 2 Mo.',

            'page_id.required' => 'L’identifiant de la page est obligatoire.',
            'page_id.exists' => 'La page spécifiée n’existe pas.',
        ];
    }
}
