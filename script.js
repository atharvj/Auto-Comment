document.getElementById("myFile").addEventListener("input",function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('myFile'),
      input.files[0])
  }
})



function placeFileContent(target, file) {
    readFileContent(file).then(content => {
        fetch('http://127.0.0.1:5000/', {
            method: "POST",
            body: content
        }).then(res => res.text()).then(res=>{
            document.getElementById("result").value = res
            console.log(res)
            console.log(document.getElementById("result"))
        })
    }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function Download() {
    document.getElementById("myFile").readFile('filename.txt', )

}
