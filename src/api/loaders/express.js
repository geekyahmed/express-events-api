import DatabaseLoader from './mongoose.js'

const DatabaseInstance = new DatabaseLoader()

class ExpressApp {
  async loadServer() {
    await DatabaseInstance.loadDatabase()
    logger.simple.info(`Running Server..`)
  }
}

module.exports = ExpressApp