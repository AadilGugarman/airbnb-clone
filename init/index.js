const mongoose = require('mongoose')
const initData = require('./data.js')
const Listing = require('../models/listing.js');
const User = require('../models/user.js');

const MongoURL = 'mongodb://127.0.0.1:27017/airbnb'


main().then((res)=>{
    console.log('connected to init DB')
}).catch((err) =>{
  console.log(err)
})
async function main(){
    await mongoose.connect(MongoURL)
}

const initDB =async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner:'685bc055e81595229b548a61'}))
    await Listing.insertMany(initData.data)

}
initDB();

// const delDB =async ()=>{
//      await Review.deleteMany({})

// }
// delDB();
