const express= require ("express")
const server = express()
server.get("./",function (req,res,next){
console.log("inicio")
})
server.listen(3000, () =>console.log("executando"))
