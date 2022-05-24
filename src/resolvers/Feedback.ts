import { Resolver, Query, Mutation, Arg, ResolverInterface, FieldResolver, Root, Args } from "type-graphql";
import { User, Feedback, Theme } from "../models/";


import { ThemeInput, FeedbackInput } from "../inputs/";
import { LinodeS3Delete, LinodeS3Upload } from "../utils/LinodeS3Upload";



@Resolver(of => Feedback)
export class FeedbackResolver {
  constructor() {

  }

 

  @Query(() => Feedback)
  async feedback(@Arg("id") id: number) {
    let feedbacks: Feedback[] = await Feedback.find({id: id});
    return feedbacks[0];
  }

  @Query(() => [Feedback])
  async feedbacks(@Arg("id") id: number) {
    let feedbacks: Feedback[] = await Feedback.find();
    return feedbacks;
  }

  
  @Mutation(() => Feedback)
  async updateFeedback(
    @Arg("feedBackId") id: string,
    @Arg("data") data: string): Promise<Feedback> {

   
    const obj: any = await Feedback.findOne({
      where: { id: id}
    });

    obj.status = data
    await obj.save()

    return obj
  }


  


}
