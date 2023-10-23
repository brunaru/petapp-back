import Client from '../models/client.model.js'
import Pet from '../models/pet.model.js'

function findAll(request, response) {
    Client.findAll().then(results => {
        response.json(results).status(200)
    }).catch(e => console.log(e))
}

function findByPk(request, response) {
    Client.findByPk(request.params.id, {include: Pet}).then(result => {
        response.json(result).status(200)
    }).catch(e => console.log(e))

}

async function create(request, response) {
    Client.create({
        name: request.body.name,
        document: request.body.document
    }).then((result) => {
        response.status(201).json(result)
    }).catch((e) => console.log(e))
}

async function update(request, response) {
    Client.update({
        name: request.body.name,
        document: request.body.document
    }, {
        where: {
            id: request.params.id
        }
    }).then(result => {
        response.status(200).json(result)
    }).catch((e) => console.log(e))
}

async function deleteByPk(request, response) {
    Client.destroy({
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

export default { findAll, findByPk, deleteByPk, create, update }