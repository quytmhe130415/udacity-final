import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true },
  },
  // ssl: 'require',
  // connection: {
  //   options: `project=ep-sweet-fire-00580533`,
  // },
});
