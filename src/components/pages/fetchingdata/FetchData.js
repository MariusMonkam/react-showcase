// this component fetch your data and retrieve it on the webpage
//
import React,{useEffect,useState} from 'react';
//import axios to help fetch the data
import axios from 'axios';
import FetchAsync from './FetchAsync'
import FetchSearch from './FetchSearch'




export default function FetchData(){

  //Let's define the results as an array
    const [results,setResults]= useState([])

useEffect(()=>{

  //traditional syntax
  axios.get("http://hn.algolia.com/api/v1/search?=reacthooks")
  //to resolve our promise
   .then(response=>{
     console.log (response.data);

     setResults(response.data.hits);
    
   });
   //only run when component mount not on update
},[])

  return(
    <div>
     <h1> Simple Fetching</h1>

    <ul>
    {results.map(result=>(
      <li key={result.objectID}>
        <a href={result.url}> {result.title} </a>
      </li>
    ))}
    </ul>
  
    <a href="http://github.com/MariusMonkam/react-showcase/blob/master/src/components/pages/fetchingdata/FetchData.js">Source-code</a>
    <hr/>
    <div>
      <h1>Fetching with Async syntax</h1>
      <FetchAsync/>
    </div>
    <hr/>
    <div>
      <h1>Fetching Data upon Submitting Form</h1>
      <FetchSearch/>
    </div>
    </div>

  )
}