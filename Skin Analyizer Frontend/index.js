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

function handleFileUpload(input) {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.classList.add('imagePreview','img-fluid');

            const uploadBtn = document.getElementById('uploadbtn');
            const dragBox = document.querySelector('.dragBox');

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