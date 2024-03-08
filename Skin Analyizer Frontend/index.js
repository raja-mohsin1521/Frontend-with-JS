let togglebtn=document.getElementsByClassName('togglebtn')[0]
let mobileview=document.getElementsByClassName('mobileview')[0]


togglebtn.addEventListener("click",function(){
    if(mobileview.classList.contains('view')){
        mobileview.classList.remove('view')
        mobileview.style.height='0vh'
    }
    else{
        mobileview.classList.add('view')
        mobileview.style.height='30vh'
    }
   
})










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
            imagePreview.style.height='45vh'
            imagePreview.style.width='100%'
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
    previewImg.style.height='45vh'
    previewImg.style.width='100%'
    document.getElementsByClassName('dragBox2')[0].style.paddingTop='0px'

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
    previewImg.style.height='45vh'
    previewImg.style.width='100%'
    document.getElementsByClassName('dragBox3')[0].style.paddingTop='0px'
  
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
data.append("image_before", formData1);
data.append("image_after", formData2);


console.log('Values inside FormData:');
for (let pair of data.entries()) {
    console.log(pair[0], pair[1]);
}
  
let loader =document.getElementsByClassName('bg-text')[0]
loader.classList.remove('d-none')

let mainbox =document.getElementById('main')
mainbox.classList.add('fetching')

let p = fetch('http://178.16.141.33:8500/improvement',{
            method: "POST",
          
    body:data,
    redirect: 'follow'}
    )
        p.then((x) => {

            return x.json()

        })
.then(response =>{ 
       
    console.log(response)
        response.json()})
  .then(data => {


    
    console.log(data);

    let loader =document.getElementsByClassName('bg-text')[0]
loader.classList.add('d-none')

let mainbox =document.getElementById('main')

mainbox.classList.remove('fetching')
mainbox.classList.add('d-none')



let result=document.createElement('div')
result.classList.add('row','text-center','py-5')
result.innerHTML=`<div class="row text-center py-5">
<div class="col-md-8 col-12 offset-md-2">
  <h5 class="lead mt-5">The Leading AI Acne Analyzer</h5>
  <h4 class="display-3 mt-3">Explore Ai Enhanced Skin Acne Analysis</h4>
  <p class="lead mt-4" style="padding: 0% 10%">
    Uncover the path to radiant skin with our revolutionary Acne
    Analyzer Tool. Say goodbye to guesswork and hello to personalized
    skincare solutions tailored just for you.
  </p>
</div>
</div>

<div class="row mt-5 pt-5">
<div class="col-md-6 col-12">
  <div class="row text-center">
    <div class="col">
      <img src='data:image/png;base64,` +  data.image_before+`' class="rounded-5" alt="" />
    </div>
  </div>
  <div class="row mx-5 px-lg-5 mt-5">
    <div class="col">
      <h3>
        Skin Score: <span class="text-danger">+ ` +  data.PercentageBefore+`+</span>
        <span
          class="bg-danger"
          style="
            font-size: medium;
            color: #ffff;
            font-weight: 400;
            padding: 10px 20px;
            border-radius: 30px;
          "
          >Alarming</span
        >
      </h3>
      <h3>Acne:</h3>
      <p>
      ` +  data.Acne_pimples+`
      </p>
      <h3>Discription</h3>
      <p>
      ` +  data.first_image_des+`
      </p>
    </div>
  </div>
</div>
<div class="col-md-6 col-12">
  <div class="row text-center">
    <div class="col">
      <img src='data:image/png;base64,` +  data.image_after+`' class="rounded-5" alt="" />
    </div>
  </div>
  <div class="row mx-5 px-lg-5 mt-5">
    <div class="col">
      <h3>
        Skin Score: <span class="text-success">` +  data.PercentageAfter+`</span>
        <span
          class="bg-success"
          style="
            font-size: medium;
            color: #ffff;
            font-weight: 400;
            padding: 10px 20px;
            border-radius: 30px;
          "
          >Average</span
        >
      </h3>
      <h3>Acne:</h3>
      <p>
      ` +  data.Acne_pimples+`
      </p>
      <h3>Discription</h3>
      <p>
      ` +  data.second_image_des+`
      </p>
    </div>
  </div>
</div>
</div>
<div class="row text-center mt-5 py-5" id="conclusion">
<h6>Conclusion</h6>
<p>
  `+data.conclusion+`
</p>
</div>`
let restultscontainer=document.getElementById('result')
restultscontainer.append(result)

    
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



