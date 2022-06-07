export const isAuthenticated = () => {
  const hasToken = localStorage.getItem("token") ? true : false;
  return hasToken;
};
