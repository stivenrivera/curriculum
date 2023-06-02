Array.prototype.slice.call(document.getElementsByTagName('input')).forEach(element => { 
	element.addEventListener('change', (selected) => {
		let name = selected.target.id
		
		let head  = document.getElementsByTagName('head')[0];

		if(document.getElementsByTagName('link').length > 1) {
			head.removeChild(document.getElementsByTagName('link')[1])
		}

	    let link  = document.createElement('link');
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/'+name+'.css';
	    head.appendChild(link);


	}) 
})