const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  console.log(`mongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB
