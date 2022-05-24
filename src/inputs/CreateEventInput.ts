import { InputType, Field } from "type-graphql";


@InputType()
export class CreateEventInput {
    
  
    @Field(() => String)
    email: string;
  
    @Field(() => String)
    password: string;
    
    @Field({nullable: true})
    mobile?: string;

    
}