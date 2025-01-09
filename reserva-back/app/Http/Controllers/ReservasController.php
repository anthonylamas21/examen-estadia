<?php

namespace App\Http\Controllers;

use App\Models\Reservaciones;
use Illuminate\Http\Request;

class ReservasController extends Controller
{
    // Listar todas las reservaciones
    public function index()
    {
        return response()->json(Reservaciones::all(), 200);
    }

    // Obtener una reservación específica
    public function show(Reservaciones $reservacion)
    {
        return response()->json($reservacion, 200);
    }
    
    
    // Crear una nueva reservación
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id', // Verifica que el usuario exista
            'espacio_id' => 'required|exists:espacios,id', // Verifica que el espacio exista
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time', // Asegura que end_time sea después de start_time
        ]);

        // Validar solapamientos
        $overlap = Reservaciones::where('espacio_id', $validated['espacio_id'])
            ->where(function ($query) use ($validated) {
                $query->whereBetween('start_time', [$validated['start_time'], $validated['end_time']])
                      ->orWhereBetween('end_time', [$validated['start_time'], $validated['end_time']])
                      ->orWhere(function ($query) use ($validated) {
                          $query->where('start_time', '<=', $validated['start_time'])
                                ->where('end_time', '>=', $validated['end_time']);
                      });
            })->exists();

        if ($overlap) {
            return response()->json(['error' => 'El espacio ya está reservado en este horario.'], 422);
        }

        // Crear la reserva
        $reservacion = Reservaciones::create($validated);

        return response()->json($reservacion, 201); // Se devuelve la reservación creada
    }

    // Actualizar una reservación existente
    public function update(Request $request, Reservaciones $reservacion)
    {
        $validated = $request->validate([
            'user_id' => 'sometimes|exists:users,id', // Verifica que el usuario exista
            'espacio_id' => 'sometimes|exists:espacios,id', // Verifica que el espacio exista
            'start_time' => 'sometimes|date',
            'end_time' => 'sometimes|date|after:start_time',
        ]);

        $reservacion->update($validated);

        return response()->json($reservacion, 200); // Se devuelve la reservación actualizada
    }

    // Eliminar una reservación
    public function destroy(Reservaciones $reservacion)
    {
        $reservacion->delete();
        return response()->json(['message' => 'Reservación eliminada correctamente'], 200); // Mensaje de éxito
    }
}
