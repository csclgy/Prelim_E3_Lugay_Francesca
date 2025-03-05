import React from "react";

function ProfilePicture({ profilePic }) {
  const defaultPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK5TAtmcluu-bMDlLuEOQwHWRR1YuoXKJbA&s";

  return (
    <div>
      <img
        src={profilePic || defaultPic}
        alt="Profile"
        style={{ width: 200, height: 200, borderRadius: "50%" }}
      />
    </div>
  );
}

export default ProfilePicture;