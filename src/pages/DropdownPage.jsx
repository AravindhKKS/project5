import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const hanldeSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
    { label: "Red", value: "red" },
  ];

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={hanldeSelect} />
    </div>
  );
}

export default DropdownPage;
