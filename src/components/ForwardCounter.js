import React from 'react';
import useCounter from '../hooks/UseCounter';
import Card from './Card';

const ForwardCounter = (props) => {
  const counter = useCounter(props.counter);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
