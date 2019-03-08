const { User } = require('../models')
const { encrypText } = require('../lib')

exports.create = async (req, res) => {
  let data = req.body
  delete data.passwordConfrimation
  try {
    let alreadyExits = await User.find({ where: { username: data.username } })
    if (alreadyExits) {
      return res.status(400).json({ status: 'fail', message: 'ya estas registrado, ve a iniciar sesion' })
    }
    let { salt, encode } = await encrypText(data.password)
    data.salt = salt
    data.password = encode
    await User.create(data)
    res.status(201).json({ status: 'ok' })
  } catch (e) {
    res.status(500).json({ error: { message: 'estamos presenttando problemas, por favor intenta mas tarde' } })
  }
}
