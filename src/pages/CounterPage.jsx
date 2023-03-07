import Button from "../components/Button";
import useCounter from "../hook/UseCounter";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);
  return (
    <div className="flex items-between">
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
