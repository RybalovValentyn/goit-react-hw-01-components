import s from './Statistics.module.css';

function Statistics(item) {
      const {label, percentage} = item
 return (
    <div className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{ percentage}</span>
    </div>
        )
}
export default Statistics