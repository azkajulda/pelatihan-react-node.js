const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{ useNewUrlParser: true})

// membuat Model User
const User = mongoose.model('User', {
    name: {type: String},
    age: {type: Number}
})

const me = new User({
    name: 'Azka',
    age: '20'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})