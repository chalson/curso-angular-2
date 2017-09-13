function hacerAlgoPromesa(){
    //return new Promise(funcion (resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('haciendo algo...');
        setTimeout(resolve,1000);
    })
}

function msgAfterTimeout (msg, who, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${msg} Hello ${who}!`), 
			timeout)
	})
}

msgAfterTimeout("", "Foo", 1000)
.then((msg) =>
	msgAfterTimeout(msg, "Bar", 2000))
    .then((msg) => {
	console.log(`done after 300ms:${msg}`)
})