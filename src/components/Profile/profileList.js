import Profile from './Profile'
import s from './Profile.module.css'

function ProfileList( {items} ) {
       return (      
       <ul>
{items.map(user => (
    <li key = {user.name} className={s.profileList}>
<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </li>
))

}
       </ul>
   )
   
};

export default ProfileList


