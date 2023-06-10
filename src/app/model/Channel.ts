import {UserGroupFinest} from "./UserGroupFinest";

export type Channel={

  id:number;

  name?:string;

  visibility?:string;

  members?:UserGroupFinest[];

  subscribers?:UserGroupFinest[];

  messages?:any[];


}
