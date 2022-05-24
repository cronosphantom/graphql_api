import { ObjectType, Field, ID } from "type-graphql";
import {User} from './'


@ObjectType()
export class UserLogin {
  @Field( ()=> String)
  status: string;

  @Field({nullable: true})
  token: string;

  @Field( ()=>User)
  user: User;
}