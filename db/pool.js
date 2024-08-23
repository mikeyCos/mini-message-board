import pg from "pg";
import env from "../utils/environment.js";

const { Pool } = pg;
const { DATABASE_URL } = env;

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

export default pool;
