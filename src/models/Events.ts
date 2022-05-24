import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToOne, OneToMany, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Team } from ".";


@Entity()
@ObjectType()
export class Event extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({nullable:false})
  theme: string;    

  @Field({nullable:false})
  @Column({nullable:false})
  mode: string;  
  
  @Field({nullable:false})
  @Column({nullable:false})
  onDate: string;  

  @Field({nullable:false})
  @Column({nullable:false})
  endDate: string;  

  @Field({nullable:false})
  @Column({nullable:false})
  firebaseEventId: string;  
  
  @Field({nullable:false})
  @Column({nullable:false})
  joinCode: string;  

  @Field()
  @Column({nullable:false})
  numTeams: number;

  @Field(() => [Team])
  @OneToMany(() => Team, team => team.event)
  teams: Team[]
 
}

@ObjectType()
export class AllEvents {

  @Field( ()=>Event)
  Events: Event;
}
 


