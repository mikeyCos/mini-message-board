import pool from "./pool.js";

const queries = {
  getAllMessages: async () => {
    const { rows } = await pool.query(`
      SELECT * FROM messages
      ORDER BY TIMESTAMP DESC;
      `);
    return rows;
  },
  // rows should always be length of 1
  getMessage: async (id) => {
    const { rows } = await pool.query(
      `
      SELECT * FROM messages
      WHERE id = $1;
      `,
      [id]
    );
    const message = rows.reduce((accumulator) => ({ ...accumulator }));
    return message;
  },
  insertMessage: async ({ title, body, username }) => {
    await pool.query(
      `
      INSERT INTO messages (username, title, body)
      VALUES ($1, $2, $3);
      `,
      [username, title, body]
    );
  },
};

export default queries;
