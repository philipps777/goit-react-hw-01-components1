import {StatsWrapper, StatsHeader, StatsList, StatsListItem} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    const getRandomColor = () => {
        const getRandomValue = () => Math.floor(Math.random() * 256);
        return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
    };

    return (
        <StatsWrapper className="statistics">
            {title && <StatsHeader className="title">{title}</StatsHeader>}
            <StatsList className="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <StatsListItem className="item" key={id} style={{backgroundColor: getRandomColor()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </StatsListItem>
                ))}
            </StatsList>
        </StatsWrapper>
    );
}