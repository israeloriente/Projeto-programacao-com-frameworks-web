export namespace AuthService {
  export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };
}
