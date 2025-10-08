<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PageRequest extends FormRequest
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
        $slug = $this->route('slug');
   
        return [
            'slug' => 'required|string|unique:pages,slug,' . $slug . ',slug',
            'name' => 'required|string|unique:pages,name,' . $slug . ',slug',
            'title' => 'nullable|string',
            'subtitle' => 'nullable|string',
            'description' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'slug.required' => 'Le champ slug est obligatoire.',
            'slug.string' => 'Le champ slug doit être une chaîne de caractères.',
            'slug.unique' => 'Le slug doit être unique.',
            'title.string' => 'Le champ titre doit être une chaîne de caractères.',
            'subtitle.string' => 'Le champ sous-titre doit être une chaîne de caractères.',
            'description.string' => 'Le champ description doit être une chaîne de caractères.',
            'name.required' => 'Le champ nom est obligatoire.',
            'name.string' => 'Le champ nom doit être une chaîne de caractères.',
            'name.unique' => 'Le nom doit être unique.',
        ];
    }
}
