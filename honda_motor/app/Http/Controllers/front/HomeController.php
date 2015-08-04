<?php

namespace App\Http\Controllers\front;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
	public function __construct()
	{
		//$this->middleware('auth');
	}
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        //
    	return view('front.page.index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getFaq()
    {
    	//
    	return view('front.page.faq');
    }
    public function getQA()
    {
    	//
    	return view('front.page.qa');
    }   
}
