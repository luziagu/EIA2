"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var haushaltshilfe;
(function (haushaltshilfe) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Luziagu:EIA2@eia2-lozyt.mongodb.net/EIA2?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log(server);
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Haushaltshilfe").collection("orders");
        console.log("Database connection", orders != undefined);
    }
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
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.write("");
        _response.end();
    }
    let anyOrder = [];
    async function retrieveOrders() {
        let cursor = await orders.find();
        await cursor.forEach(revealOrders);
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
    function revealOrders(_item) {
        let jsonString = JSON.stringify(_item);
        anyOrder.push(jsonString);
    }
})(haushaltshilfe = exports.haushaltshilfe || (exports.haushaltshilfe = {}));
//# sourceMappingURL=Server.js.map