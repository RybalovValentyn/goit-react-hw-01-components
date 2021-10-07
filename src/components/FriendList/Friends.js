import s from './FriendList.modele.css'

function Friends(friend) {
    const {avatar, name} = friend
  return (
    <div className={s.itemContainer}>
    <span className={s.status}>.</span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </div>
  )  
}

export default Friends