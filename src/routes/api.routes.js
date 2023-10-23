import express from 'express'
import breeds from '../controllers/dogbreed.controller.js'
import clientController from '../controllers/client.controller.js'
import petController from '../controllers/pet.controller.js'

const routes = express.Router()

routes.get('/breed', breeds.getAny)
routes.get('/breeds/:id', breeds.getOne)

routes.get('/clients', clientController.findAll)
routes.get('/clients/:id', clientController.findByPk)
routes.post('/clients', clientController.create)
routes.put('/clients/:id', clientController.update)
routes.delete('/clients/:id', clientController.deleteByPk)

routes.get('/pets', petController.findAll)
routes.get('/pets/:id', petController.findByPk)
routes.post('/pets', petController.create)
routes.put('/pets/:id', petController.update)
routes.delete('/pets/:id', petController.deleteByPk)
routes.get('/clients/:id/pets', petController.findPetsOfClient)

export default routes