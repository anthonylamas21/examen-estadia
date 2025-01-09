<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEspaciosTable extends Migration
{
    public function up()
    {
        Schema::create('espacios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->integer('capacidad');
            $table->boolean('disponibilidad');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('espacios');
    }
}
