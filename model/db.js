const mongoose = require('mongoose');

const url = "mongodb+srv://testdb:test123@testdb.kbjhv.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(url);

const dbSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
})

const data = mongoose.model('Data', dbSchema)

const note = new Data({
  content: 'db initialised',
  date: new Date(),
})

data.save().then(result => {
  console.log('data saved!')
  mongoose.connection.close()
})