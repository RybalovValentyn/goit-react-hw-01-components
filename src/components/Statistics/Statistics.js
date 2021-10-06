import s from './Statistics.module.css';
import PropTypes from 'prop-types';
function Statistics(item) {
      const {label, percentage} = item
 return (
    <div className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{ `${percentage}%`}</span>
    </div>
        )
}

Statistics.propTypes = {
    item: PropTypes.string.isRequired,
  colors: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'brown'])
}

export default Statistics