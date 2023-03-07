import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import UseSort from "../hook/UseSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handClick } = UseSort(data, config);
  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer bg-gray-200"
          onClick={() => handClick(column.label)}
        >
          <div className="flex items-center ">
            {" "}
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updateConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
