import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Routes/auth";
import { api } from "../Services/Api";
import { IUser } from "../utils/Posts.types";

type IPostsActions = {
  handleCreateNewUser: (data: IUser) => void;
  handleLogin: (username: string, password: string) => string | any;
  logout: () => void;
};

export type IPostsState = {
  user: IUser;
  errorLogin: {
    username: boolean;
    password: boolean;
  };
};

export type IPostsContext = {
  actions?: IPostsActions;
  states?: IPostsState;
};

type ProviderPostsProps = {
  children: ReactNode;
};

const PostsContext = createContext<IPostsContext>({});

const initialUser: IUser = {
  username: "",
  name: "",
  password: "",
  token: "",
  photo: "",
  comments: [],
  posts: [],
};

function useProviderPosts(): IPostsContext {
  const [user, setUser] = useState<IUser>(initialUser);
  const redirect = useNavigate();
  const [errorLogin, setErrorLogin] = useState({
    password: false,
    username: false,
  });
  function handleCreateNewUser(data: IUser) {
    const body = {
      ...data,
      id: data.username,
      photo: !!data.photo
        ? data.photo
        : "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png",
    };
    api
      .post("/users", body)
      .then((data) => {
        isAuthenticated();
        handleLogin(body.username, body.password);
      })
      .catch((err) => console.error(err));
  }
  function handleLogin(username: string, password: string) {
    if (!!username) {
      try {
        api.get(`/users/${username}`).then((response) => {
          const data = response.data;

          if (data.password === password) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.id);
            setUser({ ...data });
            isAuthenticated();
            redirect("/feed");
          } else {
            setErrorLogin((prev) => ({
              ...prev,
              password: true,
            }));
          }
        });
      } catch (err) {
        return err;
      }
    } else {
      setErrorLogin((prev) => ({
        ...prev,
        username: true,
      }));
    }
  }
  function logout() {
    localStorage.clear();
    setUser(initialUser);
    redirect("/");
  }
  const actions: IPostsActions = {
    handleCreateNewUser,
    handleLogin,
    logout,
  };
  const states: IPostsState = {
    user,
    errorLogin,
  };
  return { actions, states };
}

export function usePosts(): IPostsContext {
  return useContext(PostsContext);
}

export function ProviderPosts({ children }: ProviderPostsProps) {
  const posts = useProviderPosts();
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
}
