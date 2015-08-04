@extends('front.layouts.master')
@section('meta-master'){{-- default meta --}}
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="Keywords" content="インターナビ,internavi,インターナビリンク,インターナビ・リンク,internavi LINC,インターナビ・リンクアプリ,Honda純正,ホンダ純正,純正ナビ,カーナビアプリ,無料ナビアプリ,プレミアムクラブ,internavi LINC Premium Club,QQコール,テレマティクス,カーナビ,Honda,ホンダ,本田技研工業株式会社">
<meta name="description" content="インターナビ・リンクは、より安全で快適なカーライフを実現する、Honda四輪車オーナーのための新しいカタチのカーライフサービスです。車載のインターナビユーザーはもちろん、Honda四輪車オーナーであれば、パソコン、携帯電話、スマートフォンでインターナビの機能を無料で使うことができます。">
<meta property="og:site_name" content="Honda公式ホームページ" />
<meta property="og:title" content="インターナビ" />
<meta property="og:description" content="インターナビ・リンクは、より安全で快適なカーライフを実現する、Honda四輪車オーナーのための新しいカタチのカーライフサービスです。車載のインターナビユーザーはもちろん、Honda四輪車オーナーであれば、パソコン、携帯電話、スマートフォンでインターナビの機能を無料で使うことができます" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.honda.co.jp/internavi/" />
<meta property="og:image" content="http://www.honda.co.jp/internavi/images2/sns-banner.jpg" />
<meta property="fb:app_id" content="294779790538626" />
@stop
@section('style-master') {{-- default style --}}
<link rel="stylesheet" href="/css/default.css" type="text/css" media="all" />
<link rel="stylesheet" href="/css/common.css" type="text/css" media="all" />
<link rel="stylesheet" href="/css/g_navi.css" type="text/css" media="all" />
<link rel="stylesheet" href="/css/all_page.css" type="text/css" media="all" />
<link href="/css/lineup.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="/css/jquery.lightbox-0.5.css" media="screen">
@stop
@section('script-master') {{-- default script --}}
	<script type="text/javascript" src="/js/jquery-1.8.3.min.js" ></script>
    <script type="text/javascript" src="/js/common-script.js" ></script>
	<script type="text/javascript" src="/js/jquery.belatedPNG.js"></script>
	<script type="text/javascript" src="/js/smartRollover.js"></script>
	<script type="text/javascript" src="/js/smooth.pack.js" ></script>
	<script type="text/javascript" src="/js/menu.js" ></script>
<!-- InstanceBeginEditable name="doctitle" -->

<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->
@stop
@section('body-content')
    @section('header')
    @include('front.common.header')
    @show
    @yield('main-contain')  
  @section('footer')
    @include('front.common.footer')
    @show
@stop



