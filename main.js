import expres, { request, response } from "express";

const app = expres();
const PORT = 8000;

app.listen(PORT ,()=>{
    console.log(`The server running on port ${PORT}`);
    
})

app.get('/', (request, response) =>{
    response.json({"message" : `Working on PORT` })
})

