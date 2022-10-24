import { ReactNode } from "react";

export type TimeLineRow = {
  begin: string;
  end: string;
  node: ReactNode;
};

const TimeLineTable = ({ timeLineRows }: { timeLineRows: TimeLineRow[] }) => (
  <table className="w-full">
    <tbody>
      {timeLineRows.map((tlr) => (
        <tr className="border-b border-rose-500" key={tlr.node.toString()}>
          <td className="p-2">
            {tlr.begin === tlr.end ? tlr.begin : `${tlr.begin} - ${tlr.end}`}
          </td>
          <td className="p-2">{tlr.node}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TimeLineTable;
