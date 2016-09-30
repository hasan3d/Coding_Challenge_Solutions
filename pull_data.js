var request = require('request');
var app = require('express')();

var url = "https://blockchain.info/ticker";
app.set('port', (process.env.PORT || 5000));

setInterval(function () {
    app.get('/', function (req, res) {

        request(url,
            function (error, response, currency) {
                if (error) {
                    console.log(error);
                }

                var payload = [];

                currency = JSON.parse(currency);

                payload.push(
                    currency
                );
                res.send(JSON.stringify(payload));
            });
    });
}, 5000); // update data every 5 seconds
app.listen(app.get('port'), function () {
    console.log("running at localhost:" + app.get('port'))
});