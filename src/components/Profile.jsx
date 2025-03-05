import ProfilePicture from './ProfilePicture';
import UserInfo from './UserInfo';
import { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState({
      name: "Francesca A. Lugay",
      userName: "csc_lgy",
    });  

     const handleNameChange = (event) => {
      setUser((prevUser) => ({
        ...prevUser,
        name: event.target.value,
      }));
    };

    return (
      <div>
        <center>
        <h1>User Profile</h1>
        <hr></hr>
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4" id="ProfileDiv">
              <br></br>
              <ProfilePicture />
              <UserInfo user={user} />
              <label>
                <input 
                  type="text"
                  id='InputField' 
                  value={user.name} 
                  onChange={handleNameChange} 
                />
              </label>
              <br></br>
              <br></br>
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </center>
      </div>
    );
  };
  
  export default Profile;