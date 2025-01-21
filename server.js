
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('URL: ', req.url)
//   console.log('oi')
//   res.write('Brinks')

//   return res.end()
// })

// server.listen(3333, () => {
//   console.log('Server is running on port 3333')
// })


import { fastify } from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
  console.log('Alou')
})

server.get('/about', async (request, reply) => {
  console.log('Sobre')
})

server.get('/node', async (request, reply) => {
  console.log('Node')
})

server.listen({
  port: 3333
})
