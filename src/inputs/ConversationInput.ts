import { InputType, Field } from "type-graphql";

@InputType()
export class CreateConversationMessageInput {
    @Field()
    conversationId: string
    
    @Field()
    fromUser: string;

    @Field()
    messageDate: Date;

   
    @Field({nullable:false})
    body: string;


}
@InputType()
export class CreateConversationInput {
   
    
    @Field({nullable:false})
    fromUser: string;

    @Field({nullable:false})
    toUser: string;

    @Field({nullable:false})
    messageDate: Date;

   
    @Field({nullable:false})
    body: string;


}
