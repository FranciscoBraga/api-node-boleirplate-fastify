import fastify from "fastify";
import { request } from "http";

const server = fastify({logger:true})

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

server.get("/teams",(request,response)=>{
    response.type('aplication/json').code(200)

    return {teams}
});

server.get("/drivers",(request,response)=>{
    response.type('aplication/json').code(200)

    return {drivers}
})

server.listen({port:3333},()=>console.log("Server init"));
