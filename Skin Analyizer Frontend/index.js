let imagePreview2 = document.createElement('img');

let analyizebtn=document.getElementById('analyizebtn')
let comparebtn=document.getElementById('comparebtn')
let analyizecard=document.getElementById('Analyize')
let comparecard=document.getElementById('Compare')
analyizebtn.addEventListener("click",function(){
    if(!analyizebtn.classList.contains('active')){
        analyizebtn.classList.add('active')
        comparebtn.classList.remove('active')
        analyizecard.classList.remove('d-none')
        comparecard.classList.add('d-none')
    }
    
})
comparebtn.addEventListener("click",function(){
    if(!comparebtn.classList.contains('active')){
        analyizebtn.classList.remove('active')
        comparebtn.classList.add('active')
        analyizecard.classList.add('d-none')
        comparecard.classList.remove('d-none')
    }
    
})


function dragNdrop(event) {
    event.preventDefault();
}

function drag() {
    document.querySelector('.dragBox').classList.add('dragOver');
}

function drop() {
    document.querySelector('.dragBox').classList.remove('dragOver');
}

function handleFileUpload1(input) {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.classList.add('imagePreview','img-fluid');

            const uploadBtn = document.getElementById('uploadbtn');
            const dragBox = document.querySelector('.analizeimg');

            // Remove text and button
            dragBox.innerHTML = '';

            // Append image preview
            dragBox.appendChild(imagePreview);

            // Adjust padding-top to 0%
            dragBox.style.paddingTop = '0%';
        };

        reader.readAsDataURL(file);
    }
}
function dragNdrop2(event) {
    fileName2 = URL.createObjectURL(event.target.files[0]);
    
    var previewImg = document.createElement("img");

    previewImg.setAttribute("src", fileName2);
    
    let content2=document.getElementsByClassName('content2')[0]
    content2.innerHTML=""
    
    let preview2=document.getElementsByClassName('showimg2')[0]
    let containimg=preview2.querySelector('img');
  if (containimg){
    containimg.remove()
    preview2.append(previewImg)

  }
  else{
    preview2.append(previewImg)
   
  }
    
}
function dragNdrop3(event) {
    fileName3 = URL.createObjectURL(event.target.files[0]);
   
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName3);
  
  
    let content3=document.getElementsByClassName('content3')[0]
    content3.innerHTML=""
    
    let preview3=document.getElementsByClassName('showimg3')[0]
    let containimg=preview3.querySelector('img');
  if (containimg){
    containimg.remove()
    preview3.append(previewImg)

  }
  else{
    preview3.append(previewImg)
   
  }
    
    
}


let scanbtn=document.getElementById('scanbtn')
scanbtn.addEventListener("click",function(){

if(comparebtn.classList.contains('active')){

   
    let fileInput1 = document.getElementById('uploadFile2');
    let file1 = fileInput1.files[0];
    
    let formData1 = new FormData();
    formData1.append('file', file1);
   
   
    let fileInput2 = document.getElementById('uploadFile3');
    let file2 = fileInput2.files[0];
    
    let formData2 = new FormData();
    formData2.append('file', file2);


console.log('Values inside formData1:');
for (let pair of formData1.entries()) {
    console.log(pair[0], pair[1]);
}


console.log('Values inside formData2:');
for (let pair of formData2.entries()) {
    console.log(pair[0], pair[1]);
}

let data = new FormData();
data.append('src1', formData1);
data.append('src2', formData2);


console.log('Values inside FormData:');
for (let pair of data.entries()) {
    console.log(pair[0], pair[1]);
}
  
let loader =document.getElementsByClassName('bg-text')[0]


let p = fetch('http://0.0.0.0:8000/improvement',{
            method: "POST",
          
    body:data})
        p.then((x) => {

            return x.json()

        })
.then(

    
    
    response =>{ 
       
        
        response.json()})
  .then(data => {
    
    console.log(data);

    const imageBeforeBase64 = data.image_before;
    const imageAfterBase64 = data.image_after;

    
    console.log('data:image/png;base64,' + imageBeforeBase64) 
    console.log('data:image/png;base64,' + imageAfterBase64) 
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Error fetching data:', error);
  });  


}


})