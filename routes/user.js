const route = require('express').Router()
const Actions = require('../controllers/user')
const { check, validationResult } = require('express-validator/check')

route.get('/', (req, res) => {
  res.send('ya estamos en el enrutador de usuarios')
})
route.post('/', [
  check('email').isEmail().withMessage('este campo no puede ser vacio'),
  check('username').isString(),
  check('password').isString().isLength({ min: 6 }).withMessage('la contrasenio debe ser mninimo de 6 caracteres'),
  check('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      console.log('no son iguales')
      throw new Error('las contrasenias no coinciden')
    }
    return true
  })
], (req, res, next) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  next()
}, Actions.create)

module.exports = route
