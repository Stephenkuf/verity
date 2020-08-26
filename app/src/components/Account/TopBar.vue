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
              <router-link
                tag="a"
                to="/account/dashboard/belivers-network"
                class="nav-link"
                :class="$route.name == 'BeliversNetworkDashboard' && 'active'"
              >
                <i class="fas fa-home f-24 mr-1 c-blue"></i>
                <span class="c-blue f-bold f-14">HOME</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/account/profile"
                tag="a"
                class="nav-link mx-4 mx-md-0"
                :class="$route.name == 'Profile' && 'active'"
              >
                <i class="fas fa-user f-24 c-blue mr-1"></i>
                <span class="c-blue font-weight-bold f-14">PROFILE</span>
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link mx-4 mx-md-0" href="#">
                <i class="fas fa-bell f-24 c-blue mr-1"></i>
                <span class="c-blue font-weight-bold f-14">NOTIFICATIONS</span>
              </a>
            </li> -->
            <li class="nav-item">
              <router-link
                tag="a"
                to="/account/messages"
                class="nav-link"
                :class="$route.name == 'Messages' && 'active'"
              >
                <i class="fas fa-envelope f-24 c-blue mr-1"></i>
                <span class="c-blue font-weight-bold f-14">MESSAGES</span>
              </router-link>
            </li>
          </ul>
          <ul class="m-auto">
            <a class="navbar-brand" href="#">
              <img
                src="/assets/images/s4.png"
                style="height: 75px;"
                alt="logo"
              />
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
                  class="user-img img-fluid c-img--hover"
                  alt="user"
                />
                <span class="blue-dot"></span>
              </a>

              <div class="dropdown-menu">
                <router-link tag="a" to="/login" class="dropdown-item" href="#"
                  >Logout</router-link
                >
                <!-- <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a> -->
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

<style>
c-img--hover:hover {
  box-shadow: 0 2px 5px #0b6391;
}
.navbar .nav-item .nav-link .fab,
.navbar .nav-item .nav-link .far,
.navbar .nav-item .nav-link .fas {
  padding-right: 3px;
  padding-left: 3px;
  font-size: 80%;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1250px;
  }
}
</style>
