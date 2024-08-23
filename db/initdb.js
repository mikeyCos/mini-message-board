import pg from "pg";
import env from "../utils/environment.js";

const { Client } = pg;
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, DATABASE_URL } = env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(20),
  title VARCHAR(180),
  body VARCHAR (300),
  timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, title, body)
VALUES ('Tom', 'Foo', 'Foo body text'),
  ('Anonymous', 'Bar', 'Bar body text')
`;

const initDB = async () => {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: {
      require: true,
    },
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
};

initDB();
