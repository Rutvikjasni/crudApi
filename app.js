const expres = require('express')
const app = expres()

app.get("/",(req,res)=>{
    res.send("Hello World")
});

const PORT = process.env.PORT || 5000
const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    }catch{
            console.log("Error")
    }
}

start()
