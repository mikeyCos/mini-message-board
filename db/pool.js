import pg from "pg";
import env from "../utils/environment.js";

const { Pool } = pg;
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST } = env;

const pool = new Pool({
  host: PGHOST,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

/* const pool = new Pool({
  connectionString: dbURL,
}); */

export default pool;
