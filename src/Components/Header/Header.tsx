import { Link } from "react-router-dom";
import styled from "styled-components";
import { isAuthenticated } from "../../Routes/auth";
import { DefaultTheme } from "../../Style/Theme";
import { usePosts } from "../../hooks/usePosts";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${DefaultTheme.gray};
`;

const Header = () => {
  const auth = isAuthenticated();
  const context = usePosts();
  return (
    <SHeader>
      {auth ? (
        <>
          <Link to="/feed">Feed</Link>
          <Link to="/myposts">Meu Posts</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/community">Comunidade</Link>
          <button onClick={context?.actions?.logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/newuser">Cadastro</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </SHeader>
  );
};

export default Header;
