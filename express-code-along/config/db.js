const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline)
  } catch {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
