import { Resolver, Query, Mutation, Arg, ResolverInterface, FieldResolver, Root, Args } from "type-graphql";
import { User, UserLogin } from "../models/";


import { CreateUserInput } from "../inputs/CreateUserInput";
import { UpdateUserInput } from "../inputs/UpdateUserInput";
import { LinodeS3Delete, LinodeS3Upload } from "../utils/LinodeS3Upload";

import { DeleteResult, getManager, Repository } from "typeorm";
import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcryptjs';
import { customAlphabet, nanoid } from 'nanoid'
import { mailer } from "../utils/mailer";


@Resolver(of => User)
export class UserResolver {
  constructor( private userRepo: Repository<User>) {

  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  async user(@Arg("id") id: number) {
    let users: User[] = await User.find({id: id});
    return users[0];
  }

  @Query(() => Boolean)
  async emailExists(
    @Arg("email", {nullable: false}) email: string) {
      email = email.toLocaleLowerCase();
      const user = await User.find({where: {email: email}});
      if (!(typeof user != "undefined" && user != null && user.length != null &&
      user.length > 0)) {
        return false;
      }
      return true;
    }
    @Query(() => Boolean)
    async userNameExists(
      @Arg("userName", {nullable: false}) userName: string) {
        
        const user = await User.find({where: {userName: userName}});
        if (!(typeof user != "undefined" && user != null && user.length != null &&
        user.length > 0)) {
          return false;
        }
        return true;
      }
 @Query(()=> Number)
 async userMessageCount(@Arg("userId", {nullable:false}) userId: string){
   const mCount = await getManager().query(`Select count(id) from conversation_user where "hasSeenNew"=false and "userId"='${userId}'`)
  
   return mCount[0]['count'];
 }

  @Query(() => UserLogin)
  async userLogin(
    @Arg("email", { nullable: false }) email: string,
    @Arg("password", { defaultValue: 2 }) password: string) {
      
    let status="invalid"
    let token = ""

    // find User 
    const user = await User.find({where: {email: email.toLowerCase()}});

    let foundUser: any = {}
    if (!(typeof user != "undefined" && user != null && user.length != null &&
      user.length > 0)) {
      //throw new Error('No such user found')
      status = "failure"
      token = "Invalid Username or Password"
      foundUser = {
        id: "NOTFOUND",
        name: "NOTFOUND",
        password: "INVALID"
      }
     
    } else {
      foundUser = user[0]
      if (bcrypt.compareSync(password, foundUser.password)) {


        //status = foundUser.status
        status = "success"

      }
      else {

        status = "failure"
        token = "Invalid  Password"
        foundUser = {
          id: "NOTFOUND",
          name: "NOTFOUND",
          password: "INVALID"
        }
      }
    }
     console.log(status)
    return {
      status:status,
      token:token,
      user: foundUser,
    }
  }
  
  // ------- VERIFICATION ------------ //
 


    

    
   






  @Mutation(()=> Boolean)
  async resetPassword(@Arg("userId") userId: string,
  @Arg("password") password: string) {
    const user = await User.findOne(userId);

    if(user)
    {
      let hash = bcrypt.hashSync(password, 10);
      user.password = hash
     
      user.save()
      return true
    }
    
    return false
   
   
  }






  @Mutation(() => User)
  async updateUser(
    @Arg("data", () => UpdateUserInput) data: UpdateUserInput,
    @Arg("id") id: Number): Promise<User> {
    //If Password is included .. remove it Can't Change Passwords here

    // let hash = bcrypt.hashSync(data.password, 10);
    // data.password = hash


    const user: any = await User.findOne({
      where: { id: id}
    });

    return User.save({
      ...user, // existing fields
      ...data // updated fields
    });


  }
  @Mutation(() => User)
  async createUser(@Arg("data", () => CreateUserInput) data: CreateUserInput): Promise<User> {
    let hash = bcrypt.hashSync(data.password, 10);
    data.password = hash
    console.log(data)
    const user = await User.create<User>(data).save();
    console.log(user);
    user.save()
    
    return user;
  }
  @Mutation(() => User)
  async updateAvatar(
    @Arg("avatar") avatar: string,
    @Arg("userId") userId: Number): Promise<User> {

    let imgUrl = await LinodeS3Upload(avatar);
    if (imgUrl === 'error') throw new Error("Uploading Image Error");

    const user: any = await User.findOne({
      where: { id: userId}
    });

    return await User.save({
      ...user,
      avatar: imgUrl 
    });
  }

  @Mutation(() => User)
  async updateUserPassword(@Arg("password") password: string, @Arg("id") id: number): Promise<User> {

    let hash = bcrypt.hashSync(password, 10);


    await User.update(id, {password: hash});

    const user: any = await User.findOne({
      where: { id: id}
    });

    return user;
  }

  @Mutation(() => String)
  async deleteUser(@Arg("id") id: number) : Promise<String> {

    const deleteResult: DeleteResult = await User.delete({id: id});
    if (deleteResult.affected === 0) return "failed. No user exists";

    return "success";
  }


}
