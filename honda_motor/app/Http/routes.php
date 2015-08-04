<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'front\HomeController@getIndex');
Route::get('/faq', 'front\HomeController@getFaq');
Route::get('/qa', 'front\HomeController@getQA');

//admin site
Route::group(['prefix' => 'admin'], function () {    
	//overwrite from maetel package
	Route::group(['middleware' => 'guest'], function () {
		// ログイン
		Route::post('login', ['as' => 'admin-do-login',
				'uses' => 'admin\AccountController@postLoginEx']);
	});
});
