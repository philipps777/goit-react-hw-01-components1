import {FriendsList} from './FriendList.styled'
import {FriendItem} from './FriendItem'

export const FriendList = ({ friends }) => {
  return (
      <FriendsList class="friend-list">
          {friends.map((friend) => (
              <FriendItem{...friend} />
          ))}
      </FriendsList>
  );
};