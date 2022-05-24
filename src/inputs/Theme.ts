import { InputType, Field } from "type-graphql";

@InputType()
export class ThemeInput {
    @Field()
    title: string;

    @Field({ nullable: false })
    definition?: string;

    @Field({ nullable: false })
    storyReference?: string;

    @Field({ nullable: false })
    storyContent?: string;

    @Field({ nullable: false })
    visual?: string;



}

