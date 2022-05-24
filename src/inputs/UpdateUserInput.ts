import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateUserInput {
  

 
  @Field({nullable:true})
  firstName: string;

  @Field({nullable:true})
  email: string;

  @Field({nullable:true})
  lastName: string;

  @Field({nullable:true})
  avatar: string;

  @Field({nullable:true})
  birthday: Date;

  @Field({nullable:true})
  gender: string;

  @Field({nullable:true})
  bio: string;

  @Field({nullable:true})
  status: string;

  @Field({nullable:true})
  postalcode: string;

  @Field({nullable:true})
  hasLittleChildren: boolean;

  @Field({nullable:true})
  hasAdultChildren: boolean;

  @Field({nullable:true})
  isSmoker: string;

  @Field({nullable:true})
  isDrinker: string;

  @Field({nullable:true})
  hasNewMatches: boolean;

   
  }