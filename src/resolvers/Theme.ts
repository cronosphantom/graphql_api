import { Resolver, Query, Mutation, Arg, ResolverInterface, FieldResolver, Root, Args } from "type-graphql";
import { User, UserLogin, Theme } from "../models/";


import { ThemeInput } from "../inputs/";
import { LinodeS3Delete, LinodeS3Upload } from "../utils/LinodeS3Upload";



@Resolver(of => Theme)
export class ThemeResolver {
  constructor() {

  }



  @Query(() => Theme)
  async theme(@Arg("id") id: number) {
    let themes: Theme[] = await Theme.find({ id: id });
    return themes[0];
  }

  @Query(() => [Theme])
  async themes() {
    let themes: Theme[] = await Theme.find();
    return themes;
  }

  @Mutation(() => Theme)
  async createTheme(@Arg("data", () => ThemeInput) data: ThemeInput): Promise<Theme> {

    const obj = await Theme.create<Theme>(data).save();

    obj.save()

    return obj;
  }

  @Mutation(() => Theme)
  async updateTheme(
    @Arg("id") id: Number,
    @Arg("title") title: String,
    @Arg("definition") definition: String,
    @Arg("storyReference") storyReference: String,
    @Arg("storyContent") storyContent: String,
    @Arg("visual") visual: String): Promise<Theme> {

    const theme: any = await Theme.findOne({
      where: { id: id }
    });

    return await Theme.save({
      ...theme,
      title: title,
      definition: definition,
      storyReference: storyReference,
      storyContent: storyContent,
      visual: visual
    });
  }
}
