import { randomUUID } from 'node:crypto'
import { sql } from './db.js';

export class DatabasePostgres {
  list(search) {
    let videos

    if (search) {
      videos = `select * from videos where title ilike ${'%' + search + '%'}`
    } else {
      videos = 'select * from videos'
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