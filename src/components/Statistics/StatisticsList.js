import Statistics from './Statistics';
import s from './Statistics.module.css';


function StatisticList( {title = '', stats} ) {
    
    return ( 
       <section className={s.section}>
 {title && <h2>{title}</h2>} 
     
   <ul className={s.statisticList}>
{ stats.map(item => (
           <li key = {item.id} className={s.statisticItem}>
                <Statistics label = {item.label} percentage = {item.percentage} />
        </li>
    ))}
    </ul>
    </section>);
};



export default StatisticList