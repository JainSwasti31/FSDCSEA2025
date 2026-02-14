const http=require('http');
const PORT=4005;
const fetchServerData=require('./getData')
const server=http.createServer(async(req,res)=>{
    // res.setHeader('Content-Type','text/json');
    // res.end("<h2>Hii..</h2>")
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if(req.url=="/msg" && req.method=="POST"){
        res.setHeader('Content-Type','text/html');
        res.end('<h2 style="color:white; background-color:red">Welcome to Node Server</h2>')
    }

    if(req.url=="/data" && req.method=="POST"){
        const result=await fetchServerData();
        // console.log("result "+result);
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:result}));
    }
    // console.log(Object.keys(req))
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})