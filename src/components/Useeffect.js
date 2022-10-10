import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState();

  const [data1, setData1] = useState('');
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);


  useEffect(() => {
    console.log("without any dependency");
  });

  useEffect(() => {
    console.log(count);
  }, [count]);

  // useEffect(() => {
  //     setTimeout(() =>console.log("settimeout called"),2000);
  //     setInterval(() => {
  //         console.log("first")
  //     }, 3000);

  // },[])

  useEffect(() => {
    console.log("clean up");
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((res) => console.log(res.slice(0, 10)));
  }, []);

  const fakeFetch = person => {
    return new Promise(res => {
      setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
    });
  };
  
  useEffect(() => {
    let canceled = false;
    setLoading(true);
    fakeFetch(person).then(data => {
      if (!canceled) {
        setData(data);
        setLoading(false);
      }
    });
    return () => (canceled = true);
  }, [person]);


  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>add</button>
      <>
      <button onClick={() => setPerson('Nick')}>Nick's Profile</button>
      <button onClick={() => setPerson('Deb')}>Deb's Profile</button>
      <button onClick={() => setPerson('Joe')}>Joe's Profile</button>
      {person && (
        <>
          <h1>{person}</h1>
          <p>{loading ? 'Loading...' : data}</p>
        </>
      )}</>
    </div>
  );
};

export default Useeffect;
