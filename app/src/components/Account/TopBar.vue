<template>
  <header class="dashboard__header">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <button
          class="navbar-toggler bd-brand"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="$route.name == 'BeliversNetworkDashboard' && 'active'"
                href="index.html"
              >
                <i class="fas fa-home f-24 mr-1 c-blue"></i>
                <span class="c-blue f-bold f-14">HOME</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4 mx-md-0" href="signup.html">
                <i class="fas fa-bell f-24 c-blue mr-1"></i>
                <span class="c-blue font-weight-bold f-14">NOTIFICATIONS</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="messages.html">
                <i class="fas fa-envelope f-24 c-blue mr-1"></i>
                <span class="c-blue font-weight-bold f-14">MESSAGES</span>
              </a>
            </li>
          </ul>
          <ul class="m-auto">
            <a class="navbar-brand" href="index.html">
              <img src="/assets/images/s4.png" alt="logo" />
            </a>
          </ul>
          <ul class="navbar-nav ml-auto">
            <form class="form-inline my-2 my-lg-0 mr-2">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control navbar__input"
                  aria-label="Search verity"
                  placeholder="Search verity"
                />
                <div class="input-group-append">
                  <span class="input-group-text"
                    ><i class="fas fa-search"></i
                  ></span>
                </div>
              </div>
            </form>
            <li class="nav-item dropdown">
              <a
                href=""
                class="nav-link dashboard-nav--dropdown dashboard-header dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/user.png"
                  class="user-img img-fluid"
                  alt="user"
                />
                <span class="blue-dot"></span>
              </a>

              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
              <!-- Basic dropdown -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AccountTopBar",
};
</script>

<style></style>
