import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const db = {
    development: {
        connectionString: process.env.MONGODB_URL
    }
}

if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true)
}

const opts = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    useUnifiedTopology: true,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connection = str => {
    mongoose
        .connect(str, opts)
        .then(() => {
            console.log('MongoDB connection successful')
        })
        .catch(err => {
            console.error(err)
        })
}

//Configure DB
export const connectDevDB = () => {
    connection(db.development.connectionString)
}


