import { api } from "../../Services/Api";
import { IComment, IMessage, IPost, IUser } from "../../utils/Posts.types";
import * as S from "./Post.styles";

interface IPostProps {
  post: IPost;
  message: IMessage;
  user: IUser;
  comments: IComment[];
}

const Post = ({ post, message, user, comments }: IPostProps) => {
  return (
    <S.Container>
      <img src={user.photo} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>{message.date}</p>
      <p>{message.text}</p>
      <section>
        Comentários
        {comments?.map((comment) => {
          return (
            <div>
              <p>{comment.message.date}</p>
              <p>{comment.message.text}</p>
            </div>
          );
        })}
      </section>
    </S.Container>
  );
};

export default Post;
