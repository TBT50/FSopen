interface FeedbackButtonsProps {
  handleGoodFeedback: React.MouseEventHandler<HTMLButtonElement>;
  handleNeutralFeedback: React.MouseEventHandler<HTMLButtonElement>;
  handleBadFeedback: React.MouseEventHandler<HTMLButtonElement>;
}

export const FeedbackButtons = ({
  handleGoodFeedback,
  handleNeutralFeedback,
  handleBadFeedback,
}: FeedbackButtonsProps) => {
  return (
    <ul className="feedback-buttons">
      <li>
        <Button clickAction={handleGoodFeedback}>good</Button>
      </li>
      <li>
        <Button clickAction={handleNeutralFeedback}>neutral</Button>
      </li>
      <li>
        <Button clickAction={handleBadFeedback}>bad</Button>
      </li>
    </ul>
  );
};

interface ButtonProps {
  clickAction: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button = ({ clickAction, children }: ButtonProps) => {
  return (
    <button type="button" onClick={clickAction}>
      {children}
    </button>
  );
};
