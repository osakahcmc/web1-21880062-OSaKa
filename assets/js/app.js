function rollover(img, src, isActive = true) {
    if(isActive){
        img.src = src.replace('.png', '-active.png');
    }else{
        img.src = src;
    }
    img.nextElementSibling.classList.toggle('web1-text');
}

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


function myFunction(e) {
    if (document.querySelector('.navList a.active') !== null) {
        document.querySelector('.navList a.active').classList.remove('active');
    }
    e.target.className = "active";
}

async function loadBlogs(request, currentPage = 1) {

    Handlebars.registerHelper('formatDate', function(date) {
        let formatDate = new Date(date);
        let options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZoneName: 'short'
        };
        return formatDate.toLocaleDateString('en-US', options);
    });

    const response = await fetch(`${API}/${request}?page=${currentPage}`);
    const context = await response.json();
    context.currentPage = currentPage;
    context.request = request;
    // console.log(data);

    var source = document.getElementById('blogs-template').innerHTML;
    var template = Handlebars.compile(source);
    // var context = {data:data};
    var view = document.getElementById('blogs');
    view.innerHTML = template(context);
    // console.log(html);
}

async function loadBlogDetails(blogId, gotoComments = false) {
    await loadData(`blogs/${blogId}`, 'details-template', 'blogs');
    if(gotoComments){
        window.location.href = '#comments';
    }
}
