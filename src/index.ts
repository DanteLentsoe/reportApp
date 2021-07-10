import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constants";
import { Post } from "./entities/posts";
import mircoConfig from "./mikro-orm.config";

const mainServer = async () => {
  const orm = await MikroORM.init(mircoConfig);
  const post = orm.em.create(Post, { title: "First Post" });
  console.log("--------sql------");
  await orm.em.persistAndFlush(post);
};

mainServer().catch((error) => {
  console.error(error);
});
