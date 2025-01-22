import { sql } from './db.js';

sql`
  CREATE TABLE videos (
    title TEXT,
    description TEXT,
    duration INT,
    url TEXT
  )`.then(() => {
    console.log('Table created');
  }).catch(err => {
    console.error('Error creating table:', err);
  });