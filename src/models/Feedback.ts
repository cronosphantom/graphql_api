import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@Entity()
@ObjectType()
export class Feedback extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({nullable:false})
  name: string;    

  @Field({nullable:false})
  @Column({nullable:false})
  email: string;    
  
  @Field({nullable:false})
  @Column({nullable:false})
  onDate: Date; 

  @Field()
  @Column({nullable:false})
  message: string;

  @Field()
  @Column({nullable:false})
  status: string;
 
}


 


