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
    checkLogin();
    if(gotoComments){
        window.location.href = '#comments';
    }
}


async function onSubmit(event) {
    event.preventDefault();

    grecaptcha.enterprise.ready(async () => {
      grecaptcha.enterprise.execute('6Ld0pmAqAAAAAF5sEQJN3mZR6AajkR_PXcc-dcLC', {action: 'submit'})
      .then(async function(token) {
        let response = await fetch('verify.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({'g-token': token})
        });
        if(response){
            sendMail();
        }else{
            sendMail();
            console.log(response);
        }
      });
    });
  }

  const SEND_API = 'https://web1-api.vercel.app/users';

  async function sendMail(){
    let responseMessage = document.getElementById('responseMessage');
    
    try {
      let token = await getAuthenticateToken('test', '1c3cr3@m');      
      let postData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        copy: document.getElementById('copy').value
      };
      
      let response = await fetch(`${SEND_API}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });

      let result = await response.json(); 
      if(response.status == 200 ){
        responseMessage.innerHTML = result.message;
        responseMessage.className = 'text-success';
      }else{
        throw new Error(result.message);
      }

    } catch (error) {
      responseMessage.innerHTML = error;
      responseMessage.classList.remove();
      responseMessage.classList.add('text-danger');
    }
  }
