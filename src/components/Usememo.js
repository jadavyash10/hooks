import React,{useState,useMemo} from 'react'

const Usememo = () => {
    const [num,setNum] = useState(0)
    const [num2,setNum2] = useState(0)

    const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];

  const computeLetterCount = (word) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

  const letterCount = useMemo(() => computeLetterCount(word), [word]);


    const incOne = () =>{
        setNum(num + 101)
    }
    const incOne2 = () =>{
        setNum2(num2 + 100)
    }
    const iseven = useMemo(() =>{
        let i = 0 
        while(i < 2000000000) i++
       return  num%2 === 0
    },[num])
  return (
    <div>
        {num}
        <span>{iseven ? 'even' : 'odd'}</span>
        <button onClick={incOne}>Increment</button>
        {num2}
        <button onClick={incOne2}>Increment2</button>

        <div >
      <h2>Compute number of letters</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <h2>Increment a counter</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </div>
  )
}

export default Usememo