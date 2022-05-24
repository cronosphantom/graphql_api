import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserMessageInput {
    
    @Field()
    fromUserId: string;

    @Field()
    toUserId: string;

    @Field()
    messageDate: Date;

    @Field()
    status: string;

    @Field({nullable:true})
    body: string;

    @Field({nullable:true})
    subject: string;

}
@InputType()
export class UpdateUserMessageInput {
   
    @Field()
    status: string;

     
}
