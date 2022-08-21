import React from 'react'
import FollowerCard from '../FollowersCard/FollowerCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        < LogoSearch />
        <ProfileCard location= "homepage" />
        <FollowerCard />
    </div>
  )
}

export default ProfileSide
