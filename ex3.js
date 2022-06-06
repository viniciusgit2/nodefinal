const express= require ("express")
const server = express()
server.get("api/",function (req,res,next){
console.log("inicio")
next()
})
server.listen(3000, () =>console.log("executando"))
