import { ConnectionOptions } from "typeorm"; 
import * as dotenv from "dotenv";

dotenv.config();

const ormconfig: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASENAME,
  synchronize: true,
  logging: false,
  // entities: ["dist/entity/**/*.js"],
  // migrations: ["src/migration/**/*.ts"],
  // subscribers: ["src/subscriber/**/*.ts"],
  // cli: {
  //   entitiesDir: "src/entity",
  //   migrationsDir: "src/migration",
  //   subscribersDir: "src/subscriber",
  // },
};

console.log(process.env.DB_DATABASENAME);

export default ormconfig; 
