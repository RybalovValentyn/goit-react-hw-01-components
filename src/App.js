
import ProfileList from './components/Profile/profileList';
import Section from './components/Profile/section';
import users from './components/Profile/user.json';
import statisticalData from './components/Statistics/statisticalData.json';
import StatisticList from './components/Statistics/StatisticsList';
import FriendsList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

function App() {
  return (
   <div>
        <Section title ='My Profile' className="App">
           <ProfileList items= {users}/>
        </Section>  

        <StatisticList  title ='Upload stats' stats = {statisticalData} />

        <StatisticList stats = {statisticalData} />

        <FriendsList friends = {friends} />
        
  </div>
  );
}

export default App;
