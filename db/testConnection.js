const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "top_users",
  password: "password",
  port: 5432
});

(async () => {
  try {
    console.log("Testing database connection...");
    const res = await pool.query("SELECT NOW()");
    console.log("Connected to database at:", res.rows[0].now);
    pool.end();
  } catch (err) {
    console.error("Database connection error:", err.stack);
  }
})();

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Database connected:', res.rows[0]);
    }
    pool.end();
  });