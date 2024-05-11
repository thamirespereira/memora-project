import Post  from "./Post";

export default interface User {
  id: number;
  name: string;
  user: string;
  image: string;
  email: string;
  password: string;
  post?: Post | null;
}