function loadNavbar() {
  document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-lg site-navbar sticky-top">
      <div class="container">
        <a class="navbar-brand brand" href="index.html">HIDDEN EGYPT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="discover.html">Discover Egypt</a></li>
            <li class="nav-item"><a class="nav-link" href="trip.html">Build Your Trip</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a href="trip.html" class="btn btn-gold">Start Your Trip</a>
        </div>
      </div>
    </nav>
  `;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

function loadFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h6 class="brand fs-4">HIDDEN EGYPT</h6>
            <p>Discover the hidden places of Egypt that regular tours never show you.</p>
          </div>
          <div class="col-md-4">
            <h6>Quick Links</h6>
            <ul class="list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="discover.html">Discover Egypt</a></li>
              <li><a href="trip.html">Build Your Trip</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h6>Contact Us</h6>
            <p class="mb-1">info@hiddenegypt.com</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
        <hr>
        <p class="text-center mb-0">© ${new Date().getFullYear()} Hidden Egypt. All rights reserved.</p>
      </div>
    </footer>
  `;
}

loadNavbar();
loadFooter();