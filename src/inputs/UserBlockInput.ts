import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserBlockInput {
  
 @Field(() => String)
 userId: string;

 @Field({nullable:true})
 reason: string;

 @Field(() => String)
 status: string;

 @Field(() => Boolean)
 isReported: Boolean;
}