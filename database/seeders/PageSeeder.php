<?php

namespace Database\Seeders;

use App\Models\Page;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $pages = [
            [
                'name' => 'Qui sommes-nous ?',
                'title' => 'Qui sommes-nous ?',
                'subtitle' => "Présentation de l’organisation",
                'description' => "Présentation de l'ANSSI : mission, valeurs et organisation.",
            ],
            [
                'name' => 'Foire aux questions',
                'title' => 'Foire aux questions',
                'subtitle' => 'Questions fréquentes',
                'description' => "Réponses aux questions les plus fréquentes concernant nos services et procédures.",
            ],
            [
                'name' => 'Nous contacter',
                'title' => 'Nous contacter',
                'subtitle' => 'Prendre contact',
                'description' => "Informations pour joindre nos équipes : adresses, formulaires et numéros utiles.",
            ],
            [
                'name' => 'Agréments et accréditations',
                'title' => 'Agréments et accréditations',
                'subtitle' => 'Certifications officielles',
                'description' => "Liste des agréments et accréditations délivrés et reconnus par notre institution.",
            ],
            [
                'name' => 'Authentification des documents',
                'title' => 'Authentification des documents',
                'subtitle' => "Vérification d'authenticité",
                'description' => "Procédures et outils pour vérifier l'authenticité des documents officiels.",
            ],
            [
                'name' => 'Textes nationaux',
                'title' => 'Textes nationaux',
                'subtitle' => 'Lois et réglementations',
                'description' => "Compilation des textes nationaux relatifs à la cybersécurité et leur accès public.",
            ],
            [
                'name' => 'Normes et standards',
                'title' => 'Normes et standards',
                'subtitle' => 'Références techniques',
                'description' => "Référentiel des normes et standards recommandés pour la sécurité des systèmes d'information.",
            ],
            [
                'name' => 'Référentiels de sécurité',
                'title' => 'Référentiels de sécurité',
                'subtitle' => 'Bonnes pratiques',
                'description' => "Guides et référentiels pour implémenter des mesures de sécurité conformes aux recommandations.",
            ],
            [
                'name' => 'Publications',
                'title' => 'Publications',
                'subtitle' => 'Rapports et études',
                'description' => "Rapports, études et notes publiés par notre organisation.",
            ],
        ];

        foreach ($pages as $p) {
            
            $slug = Str::slug($p['name']);

            DB::table('pages')->updateOrInsert(
                ['slug' => $slug],
                [
                    'name'        => $p['name'],
                    'title'       => $p['title'],
                    'subtitle'    => $p['subtitle'],
                    'slug'        => $slug,
                    'description' => $p['description'],
                    'created_at'  => now(),
                    'updated_at'  => now(),
                ]
            );
        }

    }
}
