import { InputType, Field } from "type-graphql";

@InputType()
export class UserPhotoInput {
  
    @Field()
    userId: string;

     
    @Field()
    imageUrl: string;

    @Field({nullable:true})
    imageNote: string;
}