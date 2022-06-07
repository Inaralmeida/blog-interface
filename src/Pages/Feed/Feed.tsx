import { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
import { api } from "../../Services/Api";
import { IComment, IPost, IUser } from "../../utils/Posts.types";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  function data() {
    Promise.all([api.get("/users"), api.get("/posts"), api.get("/comments")])
      .then((response) => {
        const [users, posts, comments] = response;
        setComments(comments.data);
        setUsers(users.data);
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <h1>Feed</h1>
      {!!posts ? (
        posts.map((post: any, index: number) => {
          const [user] = users.filter(
            (user: IUser) => user.token === post.message.author_Id
          );
          console.log(user);
          const comment = comments.filter(
            (comment: IComment) => comment.post_id === post.id
          );

          return (
            <Post
              key={index}
              comments={comment}
              message={post.message}
              post={post}
              user={user}
            />
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Feed;
