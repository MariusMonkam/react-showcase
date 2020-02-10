// this component fetch your data and retrieve it on the webpage
// we will use asynchronous syntax
import React,{useEffect,useState} from 'react';
//import axios to help fetch the data
import axios from 'axios';

export default function FetchSearch(){

  //Let's define the results as an array
    const [results,setResults]= useState([])
    //we create a peace of state
    const [query,setQuery]=useState('react hooks')


useEffect(()=>{

//We just call getResult()
getResults()
   //only run query when component mount and  update
},[])

const getResults = async () => {
  const response = await axios.get(
    `http://hn.algolia.com/api/v1/search?query=${query}`
  )
  setResults(response.data.hits);
}

  return(
    <>
    
   <div className="row col-4">
   <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/>
    <button type ="button" onClick={getResults}> Search</button>
   </div>
    <ul>
    {results.map(result=>(
      <li key={result.objectID}>
        <a href={result.url}> {result.title} </a>
      </li>
    ))}
    </ul>
  
    <a href="https://github.com/MariusMonkam/react-showcase/blob/master/src/components/pages/fetchingdata/FetchSearch.js">Source-code</a>
    
    
    </>

  )
}