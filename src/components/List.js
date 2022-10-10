import React, { useState ,useEffect} from 'react'

const List = ({getItem}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItem(10))
        console.log("updating item")
    },[getItem])


  return items.map((item)=> <div key={item}>{item}</div>)
}

export default List