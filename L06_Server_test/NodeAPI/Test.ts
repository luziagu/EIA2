namespace L06_NodeAPI {

    console.log("Hallo"); 
    let x: number = 0; 
    console.log(x); 

    console.log(process.env.USER); 
    console.log(process.env.PORT); 

    console.log(process.argv); 
    console.log("Hallo" + process.argv[2]); 

    setTimeout(handleTimeout, 2000); 

    function handleTimeout(_event: Event): void {
        console.log("Timeout"); 

    }

}