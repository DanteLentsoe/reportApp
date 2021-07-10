import { _prod_ } from "./constants";
import { Post } from "./entities/posts";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "reportsGov",
  debug: !_prod_,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
