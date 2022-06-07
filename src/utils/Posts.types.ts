export interface IUser {
  username: string;
  name: string;
  password: string;
  token: string;
  photo?: string;
  posts?: string[];
  comments?: string[];
}
export interface IMessage {
  date: string;
  text: string;
  author_Id: string;
}

export interface IComment {
  message: IMessage;
  post_id: string;
  comment_id: string;
}
export interface IPost {
  message: IMessage;
  avaliations?: number[];
  comments?: string[];
  post_id: string;
}

export interface IPosts {
  posts: IPost[];
}
export interface IComments {
  comments: IComment[];
}
export interface IUsers {
  users: IUser;
}
