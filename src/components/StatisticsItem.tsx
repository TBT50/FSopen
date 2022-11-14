interface StatisticsItemProps {
  label: string;
  value: number;
}

export const StatisticsItem = ({ label, value }: StatisticsItemProps) => {
  return (
    <li>
      <span>{label}</span>
      <span>{value}</span>
    </li>
  );
};
