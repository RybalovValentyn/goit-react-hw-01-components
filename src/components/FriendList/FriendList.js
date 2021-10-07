import Friends from './Friends'
import s from './FriendList.modele.css'

function FriendsList({friends}) {
    console.log(friends);
    return (
        <ul className={s.friendList}>
{ friends.map(friend => (
            <li key = {friend.id} className={s.friendItem}>
                <Friends avatar = {friend.avatar} name = {friend.name} isOnline = {friend.isOnline}/>
        </li>
    ))}



</ul>
    )
}

export default FriendsList