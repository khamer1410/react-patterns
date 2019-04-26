import React, {useState, useEffect} from 'react'
import axios from 'axios'

const GITHUB_URL = 'https://api.github.com'

export const ProfileCard = () => {
  const [profile, setProfile] = useState({})

  useEffect(()=> {
    axios.get(`${GITHUB_URL}/users/khamer1410`).then(({data}) => setProfile(data))
  }, [])
  console.log(profile);

  return(
    <div>
      <h3>Name {profile.name}</h3>
      <img src="" alt=""/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nihil? Beatae, illum totam similique, ad aliquam veniam amet atque nulla quibusdam cumque dolorem accusantium commodi debitis minima, et fugiat. Dolor!</p>
      <p>repo</p>
    </div>
  )
}