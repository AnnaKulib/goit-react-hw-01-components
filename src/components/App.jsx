import React from "react";
import Profile from "./profile/Profile";
import user from "./profile/user.json";
import Statistics from "./statistics/Statistics";
import data from "./statistics/data.json";
import FriendList from "./friendList/FriendList";
import friends from './friendList/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"

export default function App() {
  return (
    <div className="App">
  <Profile
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar}
        stats={user.stats}
      /> 
      <Statistics title="Upload stats" stats={data}/> 
      <Statistics stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />;
</div>
  )
};