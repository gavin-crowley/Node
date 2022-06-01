const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data, parse and add values to req.body
app.use(express.urlencoded({ extended: false }))
// parse json for incoming data via javascript frontend
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})


// using javascript on frontend
app.post('/api/people', (req, res) => {
  console.log(req.body);
  const { nom } = req.body 
  if (!nom) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: nom })
})


app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

// using HTML <form></form> on frontend
app.post('/login', (req, res) => {
  console.log(req.body);
  const { nom } = req.body
  if (nom) {
    return res.status(200).send(`Welcome ${nom}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { nom } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = nom
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
