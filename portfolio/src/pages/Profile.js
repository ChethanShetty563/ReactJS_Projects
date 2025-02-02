import { useEffect, useState } from "react";
import "./Profile.css";
import Link from "../components/Link";
import List from "../components/List";

function Profile({ username }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await response.json();
      setProfile(profileData);
    }
    fetchData();
    console.log(profile);
    setLoading(false);
  }, [username]);

  const items = [
    {
      field: "html_url",

      value: <Link url={profile.html_url} title={profile.html_url} />,
    },

    {
      field: "repos_url",

      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },

    { field: "name", value: profile.name },

    { field: "company", value: profile.company },

    { field: "location", value: profile.location },

    { field: "email", value: profile.email },

    { field: "bio", value: profile.bio },
  ];

  return (
    <div>
      <h2>About Me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List items={items} />
        </div>
      )}
    </div>
  );
}

export default Profile;
