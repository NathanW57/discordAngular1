import {Role} from "./Role";

export type User =

  {
    id?:number;

    firstname : string;

    lastname : string;

    email : string;

    password? : string;

    role : Role[]

  }
