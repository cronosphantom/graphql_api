import { InputType, Field } from "type-graphql";

@InputType()
export class CreateMatchInput {
  
    @Field()
    userId: string;

    @Field()
    matchUserId: string;

    @Field() 
    matchDate: Date;

    //TODO: Add maybe as possible status.
    @Field()
    status: string;
}