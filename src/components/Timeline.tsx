import { ReactNode } from "react";

type Date = {
  year: number;
  month?: number;
};
type Props = {
  list: {
    data: ReactNode;
    from: Date;
    to?: Date;
  }[];
};

const Timeline = ({ list }: Props) => {
  const showDate = (date: Date) => (
    <>
      {date.year}
      {date.month ? `/${date.month}` : ""}
    </>
  );
  const showDuration = (from: Date, to?: Date) =>
    to && from.year === to.year && from.month === to.month ? (
      showDate(from)
    ) : (
      <>
        {showDate(from)} - {to ? showDate(to) : "Present"}
      </>
    );
  return (
    <ol className="m-3 border-l border-crimson-700">
      {list.map((v, i) => (
        <li key={i} className="my-3">
          <div className="pl-4 opacity-60 border-b border-crimson-500">
            {showDuration(v.from, v.to)}
          </div>
          <div className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-crimson-500"></div>
          <div className="pl-4">{v.data}</div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
