var API_KEY = '522ea4294994fffb0fab07b144e4bc9e';
var gb = require('geckoboard')(API_KEY);
var https = require("https");
// Create data set
gb.datasets.findOrCreate(
    {
        id: 'bitcoin.exchange_rates',
        fields: {
            buy: {
                type: 'number',
                name: 'Buy rates',

            },
            sell: {
                type: 'number',
                name: 'Sell rates',

            },
            last: {
                type: 'number',
                name: 'Last rates',

            },
            symbol: {
                type: 'string',
                name: 'Currency Symbol'
            }
        }
    },
    function (err, dataset) {
        if (err) {
            console.error(err);
            return;
        }

        url = "https://blockchain.info/ticker";

        // get is a simple wrapper for request()
        // which sets the https method to GET
        setInterval(function () {
            https.get(url, function (response) {
                // data is streamed in chunks from the server
                // so we have to handle the "data" event    
                var buffer = "",
                    data,
                    route;

                response.on("data", function (chunk) {
                    buffer += chunk;
                });

                response.on("end", function (err) {
                    // finished transferring data
                    // dump the raw data
                    // console.log(buffer);
                    console.log("\n");
                    data = JSON.parse(buffer);
                    console.log(data);
                    var usd = data["USD"];
                    var gbp = data["GBP"];
                    var eur = data["EUR"];
                    var jpy = data["JPY"];
                    var cny = data["CNY"];
                    //Insert value to the created data set
                    dataset.put(
                        [
                            { buy: usd.buy, sell: usd.sell, last: usd.last, symbol: usd.symbol },
                            { buy: gbp.buy, sell: gbp.sell, last: gbp.last, symbol: gbp.symbol },
                            { buy: eur.buy, sell: eur.sell, last: eur.last, symbol: eur.symbol },
                            { buy: jpy.buy, sell: jpy.sell, last: jpy.last, symbol: jpy.symbol },
                            { buy: cny.buy, sell: cny.sell, last: cny.last, symbol: cny.symbol }
                        ],
                        function (err) {
                            if (err) {
                                console.error(err);
                                return;
                            }

                            console.log('Dataset created and data added');
                        }
                    );
                });

            });
        }, 600000); // update data every 10 minutes  
    }
);
