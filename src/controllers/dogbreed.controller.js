const breeds = ['Golden Retriever', 'French Bulldog', 
'Cocker Spaniel', 'Shih Tzu', 'Border Collie', 'Beagle', 'German Spitz',
'Poodle', 'Yorkshire Terrier', 'Welsh Corgi', 'Siberian Husky']

function getAny(request, response) {
    const i = Math.floor(Math.random() * breeds.length)
    response.send(breeds[i])
}

function getOne(request, response) {
    response.send(breeds[request.params.id])
}

export default { getAny, getOne }