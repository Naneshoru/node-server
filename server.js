import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'
// import { DatabaseMemory } from './database-mem.js'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.get('/videos', async (request, reply) => {
  const search = request.query.title

  const videos = await database.list(search)
  
  return reply.status(200).send(videos)
})

server.post('/videos', async (request, reply) => {
  const { title, description, url, duration } = request.body

  await database.create({
    title,
    description,
    url, 
    duration
  })

  return reply.status(201).send()
})

server.put('/videos/:id', async (request, reply) => {
  const { title, description, url, duration } = request.body

  await database.update(request.params.id, { 
    title,
    description,
    url,
    duration
  })

  return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
  const id = request.params.id
  await database.delete(id)

  return reply.status(204).send()
})

server.listen({
  host: '0.0.0.0',
  port: process.env.port ?? 3333
})
