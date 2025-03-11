import { randomUUID } from 'node:crypto'
import { sql } from './db.js';

export class DatabasePostgres {
  async list(search) {
    if (search) {
      const videos = await sql`select title, description, duration, url from videos where title ilike ${'%' + search + '%'}`
      return videos.length ? videos : [];
    } else {
      return await sql`select title, description, duration, url from videos`
    }
  }

  async create(video) {
    const id = randomUUID()
      await sql`insert into videos (id, title, description, duration, url) values (${id}, ${video.title}, ${video.description}, ${video.duration}, ${video.url})`
  }

  async update(id, video) {
    await sql`update videos set title = ${video.title}, description = ${video.description}, duration = ${video.duration}, url = ${video.url} where id = ${id}`
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`
  }
}