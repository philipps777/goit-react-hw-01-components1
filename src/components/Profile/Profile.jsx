import{ProfileWraper, ProfileCard, UserAvatar, ProfileHeader, ProfileInfo, StatsList, StatsItem} from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileWraper className="profile">{
        <ProfileCard className="description">
         <UserAvatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
        <ProfileHeader className="name">{username}</ProfileHeader>
        <ProfileInfo className="tag">@{tag}</ProfileInfo>
        <ProfileInfo className="location">{location}</ProfileInfo>

        <StatsList className="stats">
    <StatsItem>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </StatsList>
        </ProfileCard>}
        </ProfileWraper>
        
}