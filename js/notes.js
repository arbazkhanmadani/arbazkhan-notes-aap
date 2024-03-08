
//File Uploading...........................
let imgs = document.querySelector('imgs')
const upload = ()=>{
    const file = document.getElementById('subject')
    const files = file.files
    console.log(files)

    const f= files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const f = e.target.result;
 
        // This is a regular expression to identify carriage 
        // Returns and line breaks
        const lines = f.split(/\r\n|\n/);
        //imgs.src = lines.join('\n');
      
    }
    reader.onerror = (e) => alert(e.target.error.name); 
    
    //reader.readAsText(f);
    reader.readAsBinaryString(f)
}



//Json Data........................................
async function data(){

       //Reading file...................................
       const fileResp = await fetch('notes/info.json',{
            headers: {
                "Content-Type": "application/json",
            }
      })
      const file = await fileResp.json()
    



//Dynamic Divs............................   
for (let i = 0; i<file.length; i++) {   



let anc = document.createElement('a')
anc.className = "card-item"
anc.href = "#"

image = document.createElement('img')
image.src =file[i].img
anc.appendChild(image)

span = document.createElement('span')
span.className = "developer"
span.textContent = file[i].title
anc.appendChild(span)



h1 = document.createElement('h6')
h1.className = "detail"
h1.textContent =file[i].detail
anc.appendChild(h1)

btn = document.createElement('a')
btn.className = "btn btn-card" 
btn.textContent="download"
btn.href =file[i].link



anc.appendChild(btn)

let card = document.getElementsByClassName('card-list')[0]
card.appendChild(anc)

}

}
data()




//File Dowanloading.................................
  /* 
(data().then(btn=>{


console.log(btn)
btn.addEventListener('click', download)

async function download(){
   
    //Reading file...................................
    const fileResp = await fetch('notes/joinsql.pdf',{
        headers: {
           "Content-Type": "application/pdf",
       }
   })
    
   const file = await fileResp.blob()
   
    //For getting original file name......................
    const name = fileResp.url
    let idx = name.lastIndexOf('/')
    let filename  = name.substring(idx+1)
    console.log(filename)

    //File reading end.................

     anchor =  document.createElement('a') 
    //Creating download button functionality................
      const blob = new Blob([file],{type:"application/pdf"})
       const url = window.URL.createObjectURL(blob)

       anchor.href = url
       anchor.download = filename
       anchor.click()

       anchor.remove()

       window.URL.revokeObjectURL(url)    
    
}

}) )()
.catch(err =>console.log("error in downloading..............."))
*/