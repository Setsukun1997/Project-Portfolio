const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

db.run(`CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  amount REAL
)`);

module.exports = {
  getTransactions: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM transactions', [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  addTransaction: (description, amount) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO transactions (description, amount) VALUES (?, ?)', [description, amount], function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, description, amount });
      });
    });
  }
};
