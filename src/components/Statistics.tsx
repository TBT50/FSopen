import { StatisticsItem } from "./StatisticsItem";

interface StatisticsProps {
  goodFeedback: number;
  neutralFeedback: number;
  badFeedback: number;
}

export const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}: StatisticsProps) => {
  let sum = 0;
  let average = 0;
  let positiveFeedback;

  sum = goodFeedback + neutralFeedback + badFeedback;

  if (sum !== 0) {
    average = (goodFeedback + badFeedback * -1) / sum;
    positiveFeedback = (goodFeedback * 100) / sum;
  }

  if (sum === 0)
    return <h2 className="statistics-header">No feedback given</h2>;

  return (
    <>
      <h2 className="statistics-header">Statistics</h2>
      <ul className="statistics-list">
        <StatisticsItem label="Good" value={goodFeedback} />
        <StatisticsItem label="Neutral" value={neutralFeedback} />
        <StatisticsItem label="Bad" value={badFeedback} />
        <StatisticsItem label="All" value={sum} />
        <StatisticsItem label="Average" value={average ? average : 0} />
        <StatisticsItem
          label="Positive"
          value={positiveFeedback ? positiveFeedback : 0}
        />
      </ul>
    </>
  );
};
