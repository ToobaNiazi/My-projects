document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var name = document.getElementById('email').value;
    var name = document.getElementById('message').value;
    var response = document.getElementById('response'); 

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
     Response.innerHTML = 'Tooba.';
     return  
    }
    Response.innerHTML = 'Thank you, ' + name + ' ! Your message has been sent.';
    document.getElementById('contactForm').reset();
})