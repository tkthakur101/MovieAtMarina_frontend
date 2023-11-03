import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {
 const [movies, setMovies] = useState();
  const items = [];
 const getMovies = async () =>{

     try
     {
       const response = await api.get("/movie");
       console.log(response.data);
       setMovies(response.data);


           for (const [key, value] of Object.entries(response.data)) {
             items.push(<li key={key}>{key}: {value}</li>);
           }
           console.log(items);
     }
     catch(err)
     {
       console.log(err);
     }
   }
     useEffect(() => {
       getMovies();
     },[])





  return (
    <div className="App">
 <ul>{items}</ul>
    </div>
  );
}
export default App;
