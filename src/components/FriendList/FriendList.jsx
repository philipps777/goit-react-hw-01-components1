import {FriendsList, FriendsListItem} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return <FriendsList class="friend-list">
    {friends.map(({id,avatar, name, isOnline}) => { 
        const color = isOnline ? "green": "red"; 
        return <FriendsListItem class="item" key={id}>
        <span class="status"style = {{
                    background: color,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                }}></span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </FriendsListItem>
    }
    )}
  </FriendsList>
}