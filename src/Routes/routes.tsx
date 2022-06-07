import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "../Components/Header/Header";
import Community from "../Pages/Community/Community";
import Feed from "../Pages/Feed/Feed";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPosts from "../Pages/MyPosts/MyPosts";
import NewUser from "../Pages/NewUser/NewUser";
import Profile from "../Pages/Profile/Profile";
import { GlobalStyle } from "../Style/GlobalStyle";
import { ProviderPosts } from "../hooks/usePosts";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <ProviderPosts>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/myposts"
            element={
              <PrivateRoute>
                <MyPosts />
              </PrivateRoute>
            }
          />
          <Route
            path="/community"
            element={
              <PrivateRoute>
                <Community />
              </PrivateRoute>
            }
          />
        </Switch>
      </ProviderPosts>
    </Router>
  );
};

export default Routes;
