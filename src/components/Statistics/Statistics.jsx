import {StatsWrapper, StatsHeader, StatsList, StatsListItem} from './Statistics.styled'

export const Statistics = ({stats}) => {
    const getRandomColor = () => {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
    };
    return <>{
        <StatsWrapper class="statistics">
  <StatsHeader class="title">Upload stats</StatsHeader>

  <StatsList class="stat-list">
    {stats.map(({id, label, percentage}, index) => {
        return <StatsListItem class="item" key={id} style={{backgroundColor: getRandomColor()}}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
      </StatsListItem>
    })}
    
   
  </StatsList>
</StatsWrapper>
    }
    </>
}