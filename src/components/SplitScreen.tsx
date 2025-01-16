type TSplitScreenProps = {
  children: React.ReactNode[];
};

export function SplitScreen(props: TSplitScreenProps) {
  const { children } = props;
  const [left, right] = children;
  return (
    <div className="flex">
      <div className="flex-grow">{left}</div>
      <div className="flex-grow">{right}</div>
    </div>
  );
}
