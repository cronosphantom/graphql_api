import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToOne, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";



@Entity()
@ObjectType()
export class Team extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({nullable:false})
  name: string;    
  
  @Field({nullable:false})
  @Column({nullable:false})
  event: string; 

 
}


 


