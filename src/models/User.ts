import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";


@Entity()
@Unique(["email"])
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable:true})
  @Column({nullable:true})
  firstName: string;  

  @Field({nullable:false})
  @Column({nullable:true})
  lastName: string;  

  @Field({nullable:true})
  @Column({nullable:true})
  city: string;  

  @Field({nullable:true})
  @Column({nullable:true})
  state: string;  

  @Field({nullable:true})
  @Column({nullable:true})
  country: string;  

  @Field()
  @Column({nullable:false})
  email: string;    

  @Field({nullable:true})
  @Column({nullable:true})
  mobile: string;    
  

  @Field()
  @Column()
  password: string;

 
 
}


 


