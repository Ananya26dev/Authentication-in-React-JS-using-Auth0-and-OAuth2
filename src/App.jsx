import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div>
            <b>Welcome,</b> {user.name}!
          </div>
        </>
      ) : (
        <button className="login-button" onClick={() => loginWithRedirect()}>
          LogIn
        </button>
      )}
    </div>
  );
};

export default App;
