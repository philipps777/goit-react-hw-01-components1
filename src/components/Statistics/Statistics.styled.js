import styled from 'styled-components';

export const StatsWrapper = styled.section`
  margin-top: 20px;
  display: grid;
  justify-content: center;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const StatsHeader = styled.h2`
  text-align: center;
  padding: 25px;
  background: white;
`;

export const StatsListItem = styled.li`
  display: grid;
  width: 60px;
  text-align: center;
  row-gap: 10px;
  padding: 10px;
  color: white;
`;
