import ExpressApp from './api/loaders/express.js'
import express from 'express'
// import routes from './api/routes/routes.js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const loader = new ExpressApp()

const app = express()

async function runServer() {
    'use strict';
    //Setting Up Express
    app.use(express())
    app.use(express.json({ limit: '50mb' }))

    app.disable('x-powered-by') // OWASP recommendation, kind of redundant as helmet should be setting this anyway

    // routes(app)
    await loader.loadServer()

    app.listen(process.env.PORT || 5000, err => {
        if (err) {
           throw new Error(err)
        }
        console.log(`Server is Running On PORT ${process.env.PORT}`)
    })
}

runServer()

