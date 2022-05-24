import { InputType, Field } from "type-graphql";


@InputType()
export class CreateUserInput {
    
  
    @Field(() => String)
    email: string;
  
    @Field(() => String)
    password: string;
    
    @Field({nullable: true})
    mobile?: string;

    
}