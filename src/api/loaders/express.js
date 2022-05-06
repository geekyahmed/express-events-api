import DatabaseLoader from './mongoose.js'

const DatabaseInstance = new DatabaseLoader()

export default class ExpressApp {
    async loadServer() {
        await DatabaseInstance.loadDatabase()
        console.log(`Running Server..`)
    }
}

