import ProfileList from './components/Profile/profileList';
import Section from './components/Profile/section'
import users from './components/Profile/user.json'


function App() {
  return (
   
        <Section title ='My Profile' className="App">
           <ProfileList items= {users}/>
        </Section>
    
  );
}

export default App;
