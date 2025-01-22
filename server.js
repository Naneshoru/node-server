import { fastify } from 'fastify'
import { DatabaseMemory } from './database-mem.js'

const server = fastify()

const database = new DatabaseMemory()

server.get('/videos', async (request, reply) => {
  return reply.status(200).send(database.list())
})

server.post('/videos', async (request, reply) => {
  const { title, description, url, duration } = request.body

  database.create({
    title,
    description,
    url, 
    duration
  })

  return reply.status(201).send()
})

server.put('/videos/:id', async (request, reply) => {
  const { title, description, url, duration } = request.body

  database.update(request.params.id, { 
    title,
    description,
    url,
    duration
  })

  return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
  const id = request.params.id
  database.delete(id)

  return reply.status(204).send()
})

server.listen({
  port: 3333
})
