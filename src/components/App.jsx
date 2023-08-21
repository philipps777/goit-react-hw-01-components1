import user from "components/user.json"
import { Profile } from "./Profile/Profile";
import data from 'components/data.json'
import { Statistics } from "./Statistics/Statistics";
import friends from 'components/friends.json';
import {FriendList} from './FriendList/FriendList'
import transactions from 'components/transactions.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import { GlobalStyle } from 'components/GlobalStyle'



export const App = () => {
  return (
    <>      
      <Profile 
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />;
            <GlobalStyle/>
    </>
  );
};
