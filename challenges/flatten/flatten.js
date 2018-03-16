function flatten(arr) { 
	let flat = [];
	for (let index=0; index<arr.length; index++) {
		let elem = arr[index];

		if (Array.isArray(elem)) { 
			flat = flat.concat(flatten(elem));	
		} else {
			flat.push(elem);
		}  
		
	}
	return flat;
}
