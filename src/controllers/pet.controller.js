import Pet from '../models/pet.model.js'
import Client from '../models/client.model.js'

function findAll(request, response) {
    Pet.findAll().then(results => {
        response.json(results).status(200)
    }).catch(e => console.log(e))
}

function findByPk(request, response) {
    Pet.findByPk(request.params.id, {include: Client}).then(result => {
        response.json(result).status(200)
    }).catch(e => console.log(e))
}

function findPetsOfClient(request, response) {
    Pet.findAll({ where: { ClientId: request.params.id } }).then(result => {
        response.json(result).status(200)
    }).catch(e => console.log(e))
}

function create(request, response) {
    Pet.create({
        name: request.body.name,
        type: request.body.type,
        breed: request.body.breed,
        birth: request.body.birth,
        ClientId: request.body.ClientId
    }).then((result) => {
        response.json(result).status(201)
    }).catch((e) => console.log(e))
}

function update(request, response) {
    Pet.update({
        name: request.body.name,
        type: request.body.type,
        breed: request.body.breed,
        birth: request.body.birth,
        ClientId: request.body.client
    }, {
        where: {
            id: request.params.id
        }
    }).then(result => {
        response.json(result).status(200)
    }).catch((e) => console.log(e))
}

function deleteByPk(request, response) {
    Pet.destroy({
        where: {
            id: request.params.id
        }
    }).then(result => {
        if (result == 1) {
            response.status(200).send()
        } else {
            response.status(404).send()
        }
    }).catch((e) => console.log(e))

}

export default { findAll, findByPk, deleteByPk, create, update, findPetsOfClient }
