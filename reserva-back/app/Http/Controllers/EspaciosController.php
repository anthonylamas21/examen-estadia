<?php

namespace App\Http\Controllers;

use App\Models\Espacios;
use Illuminate\Http\Request;

class EspaciosController extends Controller
{
    // Listar todos los espacios
    public function index()
    {
        return response()->json(Espacios::all(), 200);
    }

    // Obtener un espacio específico
    public function show(Espacios $espacio)
    {
        return response()->json($espacio, 200);
    }
    


    // Crear un nuevo espacio
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'capacidad' => 'required|integer',
            'disponibilidad' => 'required|boolean',
        ]);

        $espacio = Espacios::create($validated);

        return response()->json($espacio, 201); // Se devuelve el espacio recién creado
    }

    // Actualizar un espacio existente
    public function update(Request $request, Espacios $espacio)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'capacidad' => 'sometimes|integer',
            'disponibilidad' => 'sometimes|boolean',
        ]);

        $espacio->update($validated);

        return response()->json($espacio, 200); // Devuelve el espacio actualizado
    }

    // Eliminar un espacio
    public function destroy(Espacios $espacio)
    {
        $espacio->delete();
        return response()->json(['message' => 'Espacio eliminado correctamente'], 200); // Mensaje de éxito
    }
}
