 
//  tailwind.config.js
 
 tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }



// slidebar

function openMenu() {
    document.querySelector('.menu-bg').style.display = 'block';
    document.querySelector('.nav-menu').style.display = 'block';
}

function closeMenu() {
    document.querySelector('.menu-bg').style.display = 'none';
    document.querySelector('.nav-menu').style.display = 'none';
}


// theme

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.querySelector('.theme').classList.toggle('active');

    // localStorage.setItem('theme', 'dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}



function whiteMo() {
  let moon = document.querySelector(".darkMo");
  let sun = document.querySelector(".whiteMode");

  moon.style.display = "none";
  moon.classList.toggle("whiteIcon");
  sun.style.display = "block";
  sun.classList.toggle("darkMo");

  var element = document.body;
   element.classList.toggle("white-mode");
}

function darkMo() {
   element.classList.toggle("dark-mode");
}