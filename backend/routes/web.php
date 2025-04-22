<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => '¡Bienvenido al backend de Laravel!']);
});
