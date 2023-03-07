import React from "react";
import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((head) => {
    if (head.header) {
      return <Fragment key={head.label}>{head.header()}</Fragment>;
    }
    return (
      <th className="p-2" key={head.label}>
        {head.label}
      </th>
    );
  });
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((head) => {
      return (
        <td className="p-2" key={head.label}>
          {head.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
