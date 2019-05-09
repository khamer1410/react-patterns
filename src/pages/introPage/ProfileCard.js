import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const GITHUB_URL = "https://api.github.com";

export const ProfileCard = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get(`${GITHUB_URL}/users/khamer1410`)
      .then(({ data }) => setProfile(data));
  }, []);
  console.log(profile);

  return (
    <ProfileInfo>
      <div className='header'><h2>About me <span className="subtitle"><sub>live data from Github</sub></span></h2></div>
      <div className="profile">
        <div className="profilePicture">
          <img
            src={profile.avatar_url}
            alt="profile"
          />
        </div>

        <div className="profileStats">
          <h3>
            <span role="img" aria-label="sunglases"> 😎 </span>
            <span>{profile.name}</span>
          </h3>

          <h3>
            <span role="img" aria-label="location"> ⚓ </span>
            <span>{profile.location}</span>
          </h3>

          <h3>
            <span role="img" aria-label="devil"> 🖥️ </span>
            <span>Public repos: {profile.public_repos}</span>
          </h3>
        </div>
      </div>
    </ProfileInfo>
  );
};

const ProfileInfo = styled.div`
  .header{
    text-align: center;

    .subtitle {
      font-weight:normal;
      font-size: 15px;
    }
  }
  .profile {
    display: flex;
  }

  .profilePicture {
    width: 150px;
    img {
      border-radius: 50%;
      max-width: 100%;
    }
  }

  .profileStats {
    margin-left: 20px;
  }
`;
