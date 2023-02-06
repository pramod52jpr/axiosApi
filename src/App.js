import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState([]);
  const [error, setError] = useState("");
  useEffect(()=>{
    axios.get("https://dummyjson.com/posts")
    .then((data)=>{
      return setArray(data.data.posts);
    }).catch((error)=>setError(error.message));
  })
  return (<>
  <div className="container">
    {array===[]?<h2>{error}</h2>:array.map((data)=>{
      return <div className="datacontainer" key={data.id}>
        <div className="title">{data.title}</div>
        <div className="body">{data.body}</div>
      </div>
    })}
  </div>
  </>
  );
}

export default App;
