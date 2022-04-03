import React, { useState } from 'react';

function Test() {

    const [count, setCount] = useState(0);

    const onsuccessFatch = (data) => {

        console.log(data);
        setCount(data['1']);
    }

    const onCatch = (e)=>{
        console.log('e ' + e);
        setCount('error');
    }

    const handleClick = () => {
        console.log('start fatch');
        fetch('/testRest')
        .then(response => response.json())
        .then(data => onsuccessFatch(data))
        .catch(error => onCatch(error));

        console.log('end fatch');
    }

  return (
    <div>
      <h1>Amit Koren</h1>
      <button onClick={handleClick}>send</button>
      <span>{count}</span>
    </div>
  );
}

export default Test;
