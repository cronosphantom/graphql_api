import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@Entity()
@ObjectType()
export class Theme extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  title: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  definition: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  storyReference: string;

  @Field()
  @Column({ nullable: false })
  storyContent: string;

  @Field()
  @Column({ nullable: false })
  visual: string;

}





