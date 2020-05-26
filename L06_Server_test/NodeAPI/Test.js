"use strict";
var L06_NodeAPI;
(function (L06_NodeAPI) {
    console.log("Hallo");
    let x = 0;
    console.log(x);
    console.log(process.env.USER);
    console.log(process.env.PORT);
    console.log(process.argv);
    console.log("Hallo" + process.argv[2]);
    setTimeout(handleTimeout, 2000);
    function handleTimeout(_event) {
        console.log("Timeout");
    }
})(L06_NodeAPI || (L06_NodeAPI = {}));
//# sourceMappingURL=Test.js.map