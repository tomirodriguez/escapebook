import { createContext } from "react";
import User from "../model/User";

export interface UserData {
  user: User | null;
  loaded: boolean;
}

const UserContext = createContext<UserData>({ user: null, loaded: false });

export default UserContext;
