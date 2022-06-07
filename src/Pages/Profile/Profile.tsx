import { usePosts } from "../../hooks/usePosts";
import * as S from "./Profile.styles";
const Profile = () => {
  const context = usePosts();
  console.log(context);

  return (
    <S.Container>
      <S.Header>
        <p>Profile</p>
      </S.Header>
      <S.Content>
        <div className="photo">
          <img
            src={context?.states?.user.photo}
            alt={context?.states?.user.username}
          />
        </div>
        <div className="username">
          <label htmlFor="">Username</label>
          <p>{context?.states?.user.username}</p>
        </div>
        <div className="name">
          <h1>name</h1>
        </div>
        <div className="all_post_lists">
          <h1>all-post-lists</h1>
        </div>
        <div className="all_comments_lists">
          <h1>all-comments-lists</h1>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
