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


// async function onSubmit(event) {
//     event.preventDefault();

//     grecaptcha.enterprise.ready(async () => {
//       grecaptcha.enterprise.execute('6LdOO14qAAAAAAc9hDjARARzQCnCI3Bdiyvvxq4U', {action: 'submit'})
//       .then(async function(token) {
//         let response = await fetch('verify.php', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({'g-token': token})
//         });
//         const result = await response.json();
//         console.log(result);
//       });
//     });
//   }

//   async function sendMail(){
//     let responseMessage = document.getElementById('responseMessage');
//     responseMessage.innerHTML = 'OK';
//     responseMessage.classList.remove();
//     responseMessage.classList.toggle('text-success');

//   }

async function verifyCaptcha(token) {
  const secretKey = '6Ld0pmAqAAAAAP7F-_RCjg9H-Qg-iSsEZkVl_3w7';
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    const data = await response.json();
    return data.success && data.action === 'submit' && data.score >= 0.5;
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return false;
  }
}

async function onSubmit(event) {
  event.preventDefault();

  try {
    const token = await new Promise((resolve) => {
      grecaptcha.enterprise.ready(() => {
        grecaptcha.enterprise.execute('6Ld0pmAqAAAAAF5sEQJN3mZR6AajkR_PXcc-dcLC', {action: 'submit'})
          .then(resolve);
      });
    });

    const isValid = await verifyCaptcha(token);

    if (isValid) {
      await sendMail();
    } else {
      let responseMessage = document.getElementById('responseMessage');
      responseMessage.innerHTML = 'Captcha verification failed. Please try again.';
      responseMessage.classList.remove('text-success');
      responseMessage.classList.add('text-danger');
    }
  } catch (error) {
    console.error('Error during form submission:', error);
  }
}
