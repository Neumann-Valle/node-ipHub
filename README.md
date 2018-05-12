# node-ipHub
IPHub is an IP lookup website featuring Proxy/VPN detection

# Installation

npm install request

# usage

```jsIPHub('192.168.1.1', 'your-x-key-here', function( res ){

    // rest of the code here
    // true if vpn, bad ip, proxy
    // false if ip is residential
    console.log( res.isaVPN );// res.isaVPN true or false

});
```


