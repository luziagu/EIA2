"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var haushaltshilfe;
(function (haushaltshilfe) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("what's up?");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonstring = JSON.stringify(url.query);
            _response.write(jsonstring);
        }
        _response.write("");
        _response.end();
    }
})(haushaltshilfe = exports.haushaltshilfe || (exports.haushaltshilfe = {}));
//# sourceMappingURL=Server.js.map