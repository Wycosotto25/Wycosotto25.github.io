//Smooth Scrolling Highlight (Optional)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section, div[id^="sec"]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    //Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent form from submitting immediately

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const recipient = document.getElementById('recipient').value;
        const message = document.getElementById('message').value.trim();

        if(name === '' || email === '' || recipient === '' || message.length < 5) {
            alert('Please fill all fields correctly. Message must be at least 5 characters.');
            return;
        }

        // Here you can add sending logic (e.g., email API)
        alert('Message sent successfully to ' + recipient + '!\n\nFrom: ' + name + ' (' + email + ')\nMessage: ' + message);

        // Reset the form
        form.reset();
    });

    //Button Hover Effect 
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            btn.style.opacity = '0.8';
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1)';
        });
    });  
});
