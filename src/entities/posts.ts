import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Post {
  @Property()
  title!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @PrimaryKey()
  id!: number;
}
