import React,{useState} from 'react';

export default function Form2(){
	const [name,setName] =useState('');
	const [email,setEmail]=useState('');
	const [uploads,setUploads]=useState('');

	function handleName(e){
      setName(e.target.value)
	}
	function handleEmail(e){
		setEmail(e.target.value)
}
function handleUploads(e){
	setUploads(e.target.value)
}
  return(
		<div>
		<div id="display">
      <span>Name: {name} || Email: {email} || : Upload: {uploads} </span>
      </div>

      <form class="group" >
		<ol>
			<li class="group" onSubmit={e=>{e.preventDefault();setName(name);setEmail(email);setEmail(uploads); }}>
				<label for="countyfield">Name</label>
				<input type="text" name="name" id="namefield" value={name} onChange={handleName}  />
			</li>
	
			<li class="group">
				<label for="emailfield">Email</label>
				<input type="email" multiple name="email" id="emailfield" value={email} onChange={handleEmail}/>
			</li>
	
			<li class="group">
				<label for="filefield">Upload a File</label>
				<input type="file" multiple name="uploads" id="filefield" value={uploads} onChange={handleUploads}/>
			</li>
	
		</ol>
	<button type="submit">send</button>
	</form>
		</div>
		
  )
}