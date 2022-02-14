const getFlagValue = require('./getFlags')

console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)
