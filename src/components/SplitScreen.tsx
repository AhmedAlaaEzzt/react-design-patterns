type TSplitScreenProps = {
  Left: React.ReactNode;
  Right: React.ReactNode;
};

export function SplitScreen(props: TSplitScreenProps) {
  const { Left, Right } = props;

  return (
    <div className="flex">
      <div className="flex-grow">{Left}</div>
      <div className="flex-grow">{Right}</div>
    </div>
  );
}
