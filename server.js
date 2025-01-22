import { fastify } from 'fastify'
import { DatabaseMemory } from './database-mem.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabaseMemory()

server.get('/videos', async (request, reply) => {
  const search = request.query.title
  return reply.status(200).send(database.list(search))
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
  host: '0.0.0.0',
  port: process.env.port ?? 3333
})
