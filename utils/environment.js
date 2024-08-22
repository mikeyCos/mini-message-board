import dotenv from "dotenv";

dotenv.config();

export default {
  PGDATABASE: process.env.PGDATABASE,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGHOST: process.env.PGHOST || "localhost",
  port: process.env.PORT || 3000,
};
