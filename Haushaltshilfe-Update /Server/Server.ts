import * as Http from "http"; 
import * as Url from "url"; 

export namespace haushaltshilfe {
    let server: Http.Server = Http.createServer(); 
    console.log(server); 


    let port: number | string | undefined = process.env.PORT; 

    if (port == undefined )
        port = 5001; 

    console.log("Server starting on port:" + port);   

    server.listen(port); 
    server.addListener("request", handleRequest); 

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("what's up?"); 
        console.log(_request.url); 

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Content-Allow-Origin", "*"); 
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); 
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>"); 
            }

            let jsonstring: string = JSON.stringify(url.query); 
            _response.write(jsonstring); 

        }
        


       

        _response.write("Hallo, ich habe geantwortet :)");
        _response.end(); 

    }
}