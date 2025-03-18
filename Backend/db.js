const mongoose = require('mongoose')
const url = process.env.DATABASE
const createcontact = async() => {
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => { console.log("database conntected successfully") });
}
module.exports = createcontact;