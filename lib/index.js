const crypto = require('crypto')

const encrypText = async (text, salt) => {
  if (!salt) {
    salt = crypto.randomBytes(20)
    salt = salt.toString('hex')
  }
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(text, salt, 512, 512, 'sha512', (err, derivedKey) => {
      if (err) reject(new Error('error coding password ', err.stack))
      let encode = derivedKey.toString('hex')
      resolve({ salt, encode })
    })
  })
}

module.exports = {
  encrypText
}
