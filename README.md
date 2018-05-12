# node-ipHub
IPHub is an IP lookup website featuring Proxy/VPN detection

# Installation

npm install request

# for what use?
Real time application are on the rise, and VPN, Proxys bring trolls , spammers and such..
ipHub would help on this, you check ip if vpn you allow it or not..

You use @socket.io or @Primus you can use it at authorization level to block VPNs from accessing 
your service..

# usage

```js
IPHub('192.168.1.1', 'your-x-key-here', function( res ){

    // rest of the code here
    // true if vpn, bad ip, proxy
    // false if ip is residential
    console.log( res.isaVPN );// res.isaVPN true or false

});
```


