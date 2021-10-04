import ProfileList from './components/Profile/profileList';
import Section from './components/Profile/section';
import users from './components/Profile/user.json';
import statisticalData from './components/Statistics/statisticalData.json';
import StatisticList from './components/Statistics/StatisticsList';

function App() {
  return (
   <div>
        <Section title ='My Profile' className="App">
           <ProfileList items= {users}/>
        </Section>  

        <StatisticList  title ='SectionName' stats = {statisticalData} />

        <StatisticList stats = {statisticalData} />
        
  </div>
  );
}

export default App;
