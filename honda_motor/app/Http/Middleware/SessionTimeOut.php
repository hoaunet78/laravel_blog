<?php namespace App\Http\Middleware;

use Closure;

/**
 * This middleware use for check session was timeout or not
 *
 * Date                Author           Content
 * ----------------------------------------------------
 * 2015-04-30          hungnguyen     Create File
 */
class SessionTimeOut
{

    /**
     * 送られてきたリクエストの処理
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //Get session info bag
        $bag = \Session::getMetadataBag();

        //Get session lifetime config
        $lifetime_second = config('session.lifetime') * 60;

        //Compare session expired or not
        if ($bag && $lifetime_second < (time() - $bag->getLastUsed())) {
            // Throw 403 error when session timeout
            \App::abort(403);
        }
        return $next($request);
    }
}
