import { InputType, Field } from "type-graphql";


@InputType()
export class UserPondInput {
    
    
    @Field(() => String)
     user: string;

    @Field(() => String)
    fish: string;

    @Field(() => Date)
    addedDate: Date;

    @Field(() => String)
    status: string;
   
  
  
}