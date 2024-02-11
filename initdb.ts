const d = require('./data.ts');

const sql = require('better-sqlite3');
const db = sql('charity.db');

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS statuses (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL
    )
`
).run();

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS contacts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       phone TEXT NOT NULL,
       status INTEGER NOT NULL,
       FOREIGN KEY (status) REFERENCES statuses (id)
    )
`
).run();

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS activities (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
       location TEXT NOT NULL,
       purpose TEXT NOT NULL,
       startTime TEXT NOT NULL,
       endTime TEXT NOT NULL,
       slug TEXT NOT NULL UNIQUE
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO activities VALUES (
            null,
            @name,
            @date,
            @location,
            @purpose,
            @startTime,
            @endTime,
            @slug
        )
     `);

  for (const activity of d.activities) {
    stmt.run(activity);
  }

  const stmt2 = db.prepare(`
        INSERT INTO statuses VALUES (
            null,
            @name
          )
        `);

  for (const status of d.statuses) {
    stmt2.run(status);
  }
}

initData();
