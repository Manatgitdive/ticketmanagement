import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Mainprofile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading we will redirect to create help ticket...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      
        <button onClick={()=>{
            window.location.href="/Ticket"
        }}>CREATE HELP TICKET</button>
    
      </div>
    )
  );
  
};

export default Mainprofile;