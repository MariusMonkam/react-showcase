// this component fetch your data and retrieve it on the webpage
// we will use asynchronous syntax
import React,{useEffect,useState} from 'react';
//import axios to help fetch the data
import axios from 'axios';

export default function FetchData(){

  //Let's define the results as an array
    const [results,setResults]= useState([])

useEffect(()=>{

//We just call getResult()
getResults()
   //only run when component mount not on update
},[])

const getResults = async () => {
  const response = await axios.get(
    "http://hn.algolia.com/api/v1/search?=reacthooks"
  )
  setResults(response.data.hits);
}

  return(
    <div>

    <ul>
    {results.map(result=>(
      <li key={result.objectID}>
        <a href={result.url}> {result.title} </a>
      </li>
    ))}
    </ul>
  
    <a href="https://github.com/MariusMonkam/react-showcase/blob/master/src/components/pages/fetchingdata/FetchAsync.js">Source-code</a>
    
    
    </div>

  )
}