import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
  #videos = new Map() // # chave privada

  list(search) {
    return Array.from(this.#videos.entries())
      .map(([id, video]) => ({ id, ...video }))
      .filter(video => {
        if (!search) return true
        return video.title.includes(search)
      })
  }

  create(video) {
    const id = randomUUID()
    this.#videos.set(id, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}