import React from "react";

function UserInfo({ user = {} }) {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name || "No Name"}</p>
      <p><strong>Username:</strong> {user.userName || "No Username"}</p>
    </div>
  );
}

export default UserInfo;
