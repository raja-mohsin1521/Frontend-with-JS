let url = document.getElementById('url')
let niche = document.getElementById('niche')
let region = document.getElementById('region')
let engine = document.getElementById('engine')
let suggestbtn = document.getElementById('suggestbtn')

url.addEventListener("change", function () {
  suggestbtn.disabled = false;
})
niche.addEventListener("change", function () {
  suggestbtn.disabled = false;
})
region.addEventListener("change", function () {
  suggestbtn.disabled = false;
})
suggestbtn.addEventListener("change", function () {
  suggestbtn.disabled = false;
})

suggestbtn.addEventListener("click", function () {
  if (url.value == "" || niche.value == "" || region.value == "" || engine.value == "Select the Engine You Want To Use") {
    alert('Please Fill out all the fields')
  }
  else {
    suggestbtn.disabled = true;
    const h = document.querySelectorAll('.heading');

    h.forEach(heading => {
      h.remove();
    });
    const boxes = document.querySelectorAll('.card');

    boxes.forEach(box => {
      box.remove();
    });
    addtitle()
    createSuggestions()
    thumbnail()
    addthumbnil()
  }
})


function addthumbnil() {
  let results = document.getElementsByClassName('results')[1]
  let heading = document.createElement('div')
  heading.classList.add('row', 'text-center', 'order-first', 'heading')
  heading.innerHTML = `<div class="col">
  <h1 class="display-3">Thumbnail Idea </h1>
  </div>`
  results.append(heading)
}



function thumbnail(){

let thumbnailSuggestions='aaaaaa'
let discription='bbbbbbbbbb'



  let suggestioncontainer = document.getElementsByClassName('thumbnil-container')[0]
  const createCards = document.createElement('div')
  createCards.classList.add('col-md-4', 'col-sm-6', 'col-12', 'card', 'py-5','mb-5')
  createCards.setAttribute('id', '1')
  createCards.innerHTML = `    <div class="row">
<div class="col-12"><h1 class="display-6">Idea</h1></div>
<div class="col-12"><p class="lead title">`+thumbnailSuggestions+`</p></div>
</div>

<div class="row">
<div class="col-12"><h1 class="display-6">Discription</h1></div>
<div class="col-12"><p class="lead discription">`+discription+`</p></div>
</div>

<div class="row mt-3">
<div class="col-12">
<button class="btn btn-success copybtn" >Copy to Clipboard</button>
</div>
</div>`
  suggestioncontainer.append(createCards)

  let copybtn = createCards.getElementsByClassName('copybtn')[0]
  copybtn.addEventListener("click", function (event) {

    let databtn = event.target

    let datacontainer = databtn.parentElement.parentElement.parentElement
    let title = datacontainer.getElementsByClassName('title')[0].innerHTML
    let discription = datacontainer.getElementsByClassName('discription')[0].innerHTML
    navigator.clipboard.writeText('title:' + 'title' + '\ndiscription:' + 'disc')
    alert('Copied to Clipboard')
  })
}


function createSuggestions() {


  const suggestions = [{
    id: 0,
    title: "Dell ",
    disc: "lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun"

  },
  {
    id: 1,

    title: "Lenovo",
    disc: "lorem lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun"

  }, {
    id: 2,
    title: "Iphone",
    disc: "lorem lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun"

  }, {
    id: 3,
    title: "Sony",
    disc: "lorem lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun"
  }, {
    id: 4,
    title: "Android",
    disc: "lorem lorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshunlorem jdjushsuydhyashdu syshd7wqhdsuisbfyuegyusahdu hsdgydhusnzbeyfgyshun"
  },
  ]




  let suggestioncontainer = document.getElementsByClassName('card-container')[0]
  suggestions.map((suggestions) => {





    const createCards = document.createElement('div')
    createCards.classList.add('col-md-4', 'col-sm-6', 'col-12', 'card', 'py-5')
    createCards.setAttribute('id', suggestions.id)
    createCards.innerHTML = `    <div class="row">
  <div class="col-12"><h1 class="display-6">Title</h1></div>
  <div class="col-12"><p class="lead title">${suggestions.title}</p></div>
</div>

<div class="row">
  <div class="col-12"><h1 class="display-6">Discription</h1></div>
  <div class="col-12"><p class="lead discription">${suggestions.disc}</p></div>
</div>

<div class="row mt-3">
<div class="col-12">
  <button class="btn btn-success copybtn" >Copy to Clipboard</button>
</div>
</div>`
    suggestioncontainer.append(createCards)

    let copybtn = createCards.getElementsByClassName('copybtn')[0]
    copybtn.addEventListener("click", function (event) {

      let databtn = event.target

      let datacontainer = databtn.parentElement.parentElement.parentElement
      let title = datacontainer.getElementsByClassName('title')[0].innerHTML
      let discription = datacontainer.getElementsByClassName('discription')[0].innerHTML
      navigator.clipboard.writeText('title:' + title + '\ndiscription:' + discription)
      alert('Copied to Clipboard')
    })

  })




}
function addtitle() {
  let results = document.getElementsByClassName('results')[0]
  let heading = document.createElement('div')
  heading.classList.add('row', 'text-center', 'order-first', 'heading')
  heading.innerHTML = `<div class="col">
  <h1 class="display-3">Results</h1>
  </div>`
  results.append(heading)
}



let section=document.querySelectorAll('.section')
let navLink=document.querySelectorAll('.nav-link')




document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });

  document.querySelectorAll('nav a').forEach(function(link) {
    link.classList.remove('active');
  });


  window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;

    document.querySelectorAll('nav a').forEach(function(anchor) {
      var targetId = anchor.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop;
        var offsetBottom = offsetTop + targetElement.offsetHeight;

        if (offsetTop <= scrollPos && offsetBottom > scrollPos) {
          document.querySelectorAll('nav a').forEach(function(link) {
            link.classList.remove('active');
          });
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      }
    });
  });
});



