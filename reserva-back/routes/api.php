<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EspaciosController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\UsuariosController;




Route::apiResource('/users', UsuariosController::class);
Route::apiResource('/espacios', EspaciosController::class);
Route::apiResource('/reservaciones', ReservasController::class);
Route::get('/reservaciones/{reservacion}', [ReservasController::class, 'show']);
Route::get('/reservaciones', [ReservasController::class, 'index']);