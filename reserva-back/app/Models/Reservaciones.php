<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservaciones extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'espacio_id', 'start_time', 'end_time'];

}
