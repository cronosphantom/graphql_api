import { Resolver, Query, Mutation, Arg, ResolverInterface, FieldResolver, Root, Args } from "type-graphql";



import { CreateUserInput } from "../inputs/CreateUserInput";
import { UpdateUserInput } from "../inputs/UpdateUserInput";
import { LinodeS3Delete, LinodeS3Upload } from "../utils/LinodeS3Upload";

import { DeleteResult, getManager, Repository } from "typeorm";
import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcryptjs';
import { customAlphabet, nanoid } from 'nanoid'
import { mailer } from "../utils/mailer";
import { Event } from "../models/Events";
import { CreateEventInput } from "../inputs/CreateEventInput";


@Resolver(of => Event)
export class EventResolver {
  constructor( private userRepo: Repository<Event>) {

  }

  

//   @Mutation(() => Event)
//   async createEvent(@Arg("data", () => CreateEventInput) data: CreateEventInput): Promise<Event> {
    
//     // const event = await Event.create<Event>(data).save();
//     // console.log(event);
//     // event.save()
    
//    // return event;
//   }
  


}
