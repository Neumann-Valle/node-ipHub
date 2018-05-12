"use strict";

/**
 * 
 * @param {*} ip
 * @param {*} x_key
 * @param {*} fn 
 * ip, required
 * x_key, required, provided when you make an account with ipHub.info 
 * fn, callback with result from the request true on bad, vpn, proxy
 * Asynchronous function
 * 
 * @author Neumann Valle 
 * @license Apache License
 * Version 2.0, January 2004
 * requires Node module Request
 * Installation, npm install request --save
 * 
 */

const request = require('request');

function IPHub( ip, x_key, fn ){

    request({

        'headers': {
        'X-Key': x_key
        },
        'uri'	 : 'http://v2.api.iphub.info/ip/' + ip,
        'method' : 'GET',
        'json'	 : true,
        
    }, function ( error, res, body ) {

        if( !error ){

            if ( ( res.statusCode == 200 ) ){

                if( typeof body === 'object' ){

                    if( ( body.block === 1 ) ){

                        if( typeof fn === 'function' ){

                            fn( { isaVPN : true } );

                        }

                    }else{

                        if( typeof fn === 'function' ){

                            fn( { isaVPN : false } );

                        }

                    }
                

                }

            }else{

                throw Error ('There was an error, your X-Key is wrong or your request exceeded, the status code of request is: ' + res.statusCode );

            }


        }else{

            throw Error ('There was a fatal error, which is : ' + error );

        }
        

    });

};

// usage, example will return false
IPHub('192.168.1.1', 'your-x-key-here', function( res ){

    // rest of the code here
    // true if vpn, bad ip, proxy
    // false if ip is residential
    console.log( res.isaVPN );// res.isaVPN true or false

});
