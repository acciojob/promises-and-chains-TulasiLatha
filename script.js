//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit",function(e){
	e.preventDefault();
	const ageInput=document.getElementById("age");
	const nameInput=document.getElementById("name");

   const age = parseInt(ageInput.value, 10);
            const name = nameInput.value.trim();
	if(!NAN(age)||age<==0&&name=== ""){
		alert(inputs cannot be empty);
		return
	}
	const promise=new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000);
		
	})
	promise.
		then((message)=>{
		alert(message)})
	  .catch((error)=>{
		 alert(error)
	  })
	

	
ageInput.value = "";
            nameInput.value = "";
	
})