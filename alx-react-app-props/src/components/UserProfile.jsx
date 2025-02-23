import { useContext } from "react";
import { UserContext } from "../UserContext"; // Make sure the path is correct

const UserProfile = () => {
  const user = useContext(UserContext); // Get user data from context

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
