import Client from './models/client.model.js'
import Pet from './models/pet.model.js'

Client.sync()
Pet.sync()

//await Client.create({name: "Endeavor", document: "202.002.002-2"})
//await Pet.create({name: "Donatello", type: "Turtle", breed: "Jabuti", birth: "10/10/1993", ClientId: 2})
Client.findAll().then(function(res) {
    for(let r of res) {
        console.log(r.dataValues)
    }
})
Pet.findAll().then(res => {
    for(let r of res) {
        console.log(r.dataValues)
    }
})