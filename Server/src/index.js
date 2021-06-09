
const config=require('./config');
const app = require('./server');


app.listen(8080,config.HOST,()=>{
    console.log("Server is running")
})