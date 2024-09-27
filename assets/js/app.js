function rollover(img, src, isActive = true) {
    if(isActive){
        img.src = src.replace('.png', '-active.png');
    }else{
        img.src = src;
    }
    img.nextElementSibling.classList.toggle('web1-text');
}

// Cache the list, and the items
const links = document.querySelector(' li');
// adding a click event on all elements 
links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // if we click first thing is deleting the active class from all link
      links.forEach((link) => {
        link.classList.remove('active')
      })
      // then in the end add the active class only in the correct one
      e.target.classList.add('active')
    })
  })

const API = 'https://web1-api.vercel.app/api';

async function loadData(request, templateId, viewId) {
    const response = await fetch(`${API}/${request}`);
    const data = await response.json();
    console.log(data);

    var source = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(source);
    var context = {data:data};
    var view = document.getElementById(viewId);
    view.innerHTML = template(context);
    // console.log(html);
}
