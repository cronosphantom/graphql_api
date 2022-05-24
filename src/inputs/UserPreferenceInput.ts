import { InputType, Field } from "type-graphql";

@InputType()
export class UserPreferenceInput {

    @Field({nullable: false})
    userId: number

    @Field({ nullable: true })
    ageRangeStart: number;

    @Field({ nullable: true })
    ageRangeEnd: number;

    @Field({ nullable: true })
    gender: string;

    @Field({ nullable: true })
    locationRange: number;

    @Field({ nullable: true })
    postalcode: string;
    
    @Field({ nullable: true })
    hasLittleChildren: string;

    @Field({ nullable: true })
    hasAdultChildren: string;

    @Field({ nullable: true })
    isSmoker: string;

    @Field({ nullable: true })
    isDrinker: string;

}