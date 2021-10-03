import s from './Profile.module.css';

function Profile(user) {
const {  name, tag, location, avatar, stats }  = user

return (
    <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt={name}
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)

}

export default Profile