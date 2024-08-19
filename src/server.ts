import fastify from "fastify";
import cors from '@fastify/cors'

const server = fastify({logger:true})

server.register(cors,{
    origin:"*"
})

const drivers =[
    {id:1,name:"Max Verstappen",team:"Red Bull Racing"},
    {id:2,name:"Logan Sargeant",team:"Willians"},
    {id:3,name:"Daniel Ricciardo",team:"RB"},
];

const  teams = [
    {id:1,name:"Red Bull Racing"},
    {id:2,name:"Willians"},
    {id:3,name:"RB"},
];

server.get("/teams",async (request,response)=>{
    response.type('aplication/json').code(200)

    return {teams}
});

server.get("/drivers",async(request,response)=>{
    response.type('aplication/json').code(200)

    return {drivers}
});

interface DriverParams{
    id:string
}

server.get<{Params:DriverParams}>("/drivers/:id",async(request,response)=>{
    response.type('aplication/json').code(200)

    const id = parseInt(request.params.id);

    const driver = drivers.find((d)=> d.id === id);

    return {driver}
});

server.listen({port:3333},()=>console.log("Server init"));
