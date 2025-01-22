import { sql } from './db.js';

sql`DROP TABLE IF EXISTS videos`.then(() => {
  console.log('Table dropped');
})

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INT,
    url TEXT
  )`.then(() => {
    console.log('Table created');
  }).catch(err => {
    console.error('Error creating table:', err);
  });