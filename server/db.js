const Sequelize = require('sequelize')
const db = new Sequelize(
    'postgres://localhost:5432/EPC_data'
    )

const Application = db.define('application', {
    appNum: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true
    },
    total_eligible: {
        type: Sequelize.DataTypes.FLOAT
    }
})

const dbSync = async() => {
    try {
        await db.sync()
        console.log('database synced!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbSync,
    models: {
        Application
    }
}