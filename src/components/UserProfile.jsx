import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h1>Hello</h1>
      <img
        src={user?.picture?.large}
        alt={`${user?.name?.first} ${user?.name?.last}`}
      />
      <h1>
        {user?.name?.first} {user?.name?.last}
      </h1>
      <p>Email: {user?.email}</p>
      <p>
        Location: {user?.location?.city}, {user?.location?.country}
      </p>

      <button className={styles.btn} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
}

export default UserProfile;
