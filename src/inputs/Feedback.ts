import { InputType, Field } from "type-graphql";


@InputType()
export class FeedbackInput {
    
    @Field()
    name: string;    
  
    @Field({nullable:false})
    email?: string;    
    
    @Field({nullable:false})
    onDate?: Date; 
  
    @Field({nullable:false})
    message?: string;
  
    @Field({nullable:false})
    status?: string;
}

