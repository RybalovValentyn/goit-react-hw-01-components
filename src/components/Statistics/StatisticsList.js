import Statistics from './Statistics'

function StatisticList( {title, stats } ) {
   return ( 
       <section>
 {title && <h2>{title}</h2>} 
     
   <ul>
{ stats.map(item => (
           <li key = {item.id}>
            <Statistics label = {item.label} percentage = {item.percentage} />
        </li>
    ))}
    </ul>
    </section>);
};

export default StatisticList