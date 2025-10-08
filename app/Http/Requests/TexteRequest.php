<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TexteRequest extends FormRequest
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
            'description' => 'nullable|string',
            'path' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'page_id' => 'required|exists:pages,id',
        ];

    }

    public function messages(): array
    {
        return [
            'title.required' => 'Le titre est obligatoire.',
            'title.string' => 'Le titre doit être une chaîne de caractères.',
            'title.max' => 'Le titre ne doit pas dépasser 255 caractères.',
            'description.string' => 'La description doit être une chaîne de caractères.',
            'path.required' => 'Le fichier est obligatoire.',
            'path.file' => 'Le chemin doit être un fichier valide.',
            'path.mimes' => 'Le fichier doit être au format PDF, DOC ou DOCX.',
            'path.max' => 'Le fichier ne doit pas dépasser 2 Mo.',

            'page_id.required' => 'L’identifiant de la page est obligatoire.',
            'page_id.exists' => 'La page spécifiée n’existe pas.',
        ];
    }
}
