import Subject from './Subject';
import User from './User';

export default interface Post {
  id: number;
  titulo: string;
  texto: string;
  postDate: string;
  subject: Subject | null;
  user: User | null;
}