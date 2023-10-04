(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  function fetchProjectData() {
    fetch("/projects").then((data) => {
      return data.json();
    }).then((objectData) => {
      displayProjects(objectData.projects);
    })


    function displayProjects(projects) {
      let cardData = "";
      projects.map((values) => {
        let buf = values?.photo1?.image
        cardData += `<div class="col-md-4">
        <div class="work-box">
          <a href=${'data:image/jpeg;base64,' + buf.toString('base64')} data-gallery="portfolioGallery" class="portfolio-lightbox">
            <div class="work-img">
              <img src=${'data:image/jpeg;base64,' + buf.toString('base64')} alt="Screenshot" class="img-fluid">
            </div>
          </a>
          <div class="work-content">
            <div class="row">
              <div class="col-sm-8">
                <h2 class="w-title">${values.projectName}</h2>
                <div class="w-more">
                  <p>${values.description}</p>
                </div>
                <div class="w-more">
                  <a href=${values.appLink} class="w-ctegory">App Link</a> / <span class="w-date">Date: ${values.date}</span>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="w-like ms-1">
                  <a href=${values.gitHubLink}> <span class="bi bi-github"></span></a>
                </div>
                <div class="w-like ms-1">
                  <a href="portfolio-details.html?name=${values.projectName}"> <span class="bi bi-plus-circle"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      })
      document.getElementById("card_body").
        innerHTML = cardData;

    }
  }

  fetchProjectData();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const projectName = urlParams.get('name');
  if (projectName) {
    //for project details
    function handleDetails(projectName) {
      let apiUrl = `/api/project/name/${projectName}`;
      let pageData = "";

      fetch(apiUrl)
        .then((response) => { return response.json() })
        .then((data) => {
          let buf1 = data[0]?.photo1?.image
          let buf2 = data[0]?.photo2?.image
          let buf3 = data[0]?.photo3?.image
          pageData = `
        <section id="portfolio-details" class="portfolio-details">
        <div class="container">
  
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="portfolio-details-slider swiper">
                <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${'data:image/jpeg;base64,' + buf1.toString('base64')}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${'data:image/jpeg;base64,' + buf2.toString('base64')}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${'data:image/jpeg;base64,' + buf3.toString('base64')}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
  
            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Name</strong>:${data[0]?.projectName}</li>
                  <li><strong>Description</strong>:${data[0].description}</li>
                  <li><strong>Project date</strong>: ${data[0]?.date}</li>
                  <li><strong>Project URL</strong>: <a href='${data[0]?.appLink}'>App Link</a></li>
                </ul>
              </div>
              </div>
              <div class="portfolio-description">
                <h2>About</h2>
                <p>
                  ${data[0].summery}
                </p>
              </div>
  
          </div>
  
        </div>
      </section>
        `
          document.getElementById("portfolio-details").innerHTML = pageData;
        })
    }
    handleDetails(projectName);
  }


  let form = document.getElementById('emailForm');
  let messageDiv = document.getElementById('message');

  form.addEventListener('submit', handleGmail);

  function handleGmail(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);

    fetch('/api/gmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.accepted) {
          // Clear form fields on success
          form.reset();

          // Display a success message
          showMessage('success', 'Message sent successfully!');
        } else {
          // Display an error message
          showMessage('danger', 'Error sending message. Please try again.');
        }
      })
      .catch((err) => {
        console.error(err);
        // Display a general error message
        showMessage('danger', 'An error occurred. Please try again later.');
      });
  }

  function showMessage(type, text) {
    // Clear previous messages
    messageDiv.innerHTML = '';

    // Create a Bootstrap-style message element
    let messageElement = document.createElement('div');
    messageElement.className = `alert alert - ${type} `;
    messageElement.textContent = text;

    // Append the message to the message div
    messageDiv.appendChild(messageElement);

    // Automatically hide the message after a few seconds (optional)
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  }


})()
