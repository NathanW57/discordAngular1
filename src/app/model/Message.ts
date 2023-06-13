// model/Message.ts
import {User} from "./User";

export interface Message {
  id: number;
  content: string;
  sender: User;
}
