import express from 'express'
import connectDevDB from '../config/db.js'
const app = express()

class DatabaseLoader {
    loadDatabase() {
        //Configure Environments
        switch (app.get('env')) {
            case 'development':
                connectDevDB()
                break
            case 'production':
                connectProdDB()
                break
            case 'test':
                connectTestDB()
                break
            default:
                throw Error('Unknown Environment')
        }
    }
}

module.exports = DatabaseLoader