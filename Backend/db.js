//  IN db.JS WE WROTE A FUNCTION THAT WILL CONNECT US TO THE DATABASE

const mongoose=require ("mongoose");
const mongoURI='mongodb://localhost:27017/mydb';

const connectToMongo=()=>{

    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongodb...!");
    })
}


module.exports=connectToMongo; 