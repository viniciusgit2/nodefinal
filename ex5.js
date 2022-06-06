const express =require("express")
const Router =  express.Router()

Router.use((req,res,next)=> {
  const init = Date.now()
  next()
  .console.log("tempo "(Date.now()-init,"ms"),)})
Router.get("/produtos:id", (req,res) => {
  res.json({id:req.params.id,name:"caneta"})
})
Router.get("clientes/:id",(req,res)=>{
  res.json(req.params.id,"joao")}
)
module.exports = Router
