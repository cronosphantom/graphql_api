import { InputType, Field } from "type-graphql";


@InputType()
export class CreateActivityInput {
    
  
    @Field(() => String)
    email: string;
  
    
}