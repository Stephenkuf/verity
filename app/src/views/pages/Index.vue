<template>
  <div>
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg nav-bs">
          <a class="navbar-brand" href="index.html">
            <img src="/assets/images/s4.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler border bd-blue"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars c-blue"></span>
          </button>
          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#about" class="nav-link">About Us</a>
              </li>
              <li class="nav-item">
                <a href="#features" class="nav-link ">Features</a>
              </li>
              <li class="nav-item mt-3">
                <router-link
                  tag="a"
                  class="btn btn-brand btn-brand-lg f-bold text-white"
                  to="/login"
                >
                  Get Started
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main class="mb-6e">
      <!--Carousel Wrapper-->
      <div
        id="carousel-example-2"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <!--Indicators-->
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
              <div class="mask rgba-black-light"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                A Social & Communication Platform
              </h3>
              <p>Extra text text</p>
            </div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
              />
              <div class="mask rgba-black-strong"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                A Social & Communication Platform
              </h3>
              <p>Extra text text</p>
            </div>
          </div>
          <div class="carousel-item">
            <!--Mask color-->
            <div class="view">
              <img
                class="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                alt="Third slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                A Social & Communication Platform
              </h3>
              <p>Extra text text</p>
            </div>
          </div>
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a
          class="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
      </div>
      <!--/.Carousel Wrapper-->

      <section class="intro " id="get_started">
        <p class="c-brand f-20 text-center">
          <router-link
            tag="a"
            class="btn btn-brand text-white btn-brand-lg mt-5"
            to="/login"
          >
            GET STARTED
          </router-link>
        </p>
      </section>

      <section class="about bg-white py-5 px-sm-3" id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="f-abril f-40">About Us</h1>
              <p class="mt-4 f-18">
                <span class="f-bold">VERITY CHRISTIAN FAITH MINISTRY</span> is
                an organization of likeminded individuals and groups, who have
                firmly and solely resolved to unite together resources, efforts,
                skills etc for the collective growth of the Christian faith,
                unflinching support for the teaching of true doctrine, and for
                the practice and fellowship of Christianity, to individuals,
                groups, institutions, the society, and humanity at large, with
                the goal of promotion and perfection of Christian faith, to the
                glory of God and to the blessing of humanity.
              </p>
              <p class="f-18">
                It is our firm belief and conviction that through this platform,
                where likeminded individuals, groups, institutions can band
                together and jointly harmonize resources, we can unite for the
                propagation of the true teachings and practices of Christian
                faith and belief, as taught, exemplified, practiced and directed
                in the scriptures.
              </p>

              <section class="vision mt-5">
                <h3 class="f-abril">VISION</h3>
                <p>
                  To be an organisation of high standing for the promotion,
                  support, and perfection of Christian faith, in doctrine,
                  fellowship and all faith related works, to the glory of God
                  and the blessing of humanity.
                </p>

                <h3 class="f-abril mt-5">MISSION</h3>
                <p>
                  To serve as a strong platform which provides advocacy,
                  consultancy, Information Technology services, amongst others,
                  to contribute, encourage, and promote the growth of
                  fellowship, unity and perfection of the Christian faith
                  globally.
                </p>
              </section>
              <section class="objectives mt-5">
                <h3 class="f-abril">OBJECTIVES</h3>
                <ol class="f-16 mt-5">
                  <li>
                    A platform to aid the ministers and pastors in basic
                    administration duties and activities of the church and their
                    members.
                  </li>
                  <li>
                    A platform for evangelism and proclamation of the truth and
                    teachings of the Bible.
                  </li>
                  <li>
                    A platform for speedy dissemination of information across
                    all branches of the Church(es), a unit Church or
                    congregation and its members.
                  </li>
                  <li>
                    A platform for the welfare of members and individuals, hence
                    promoting fellowship, love and brotherly kindness.
                  </li>
                  <li>
                    A platform to keep track of the spread of churches,
                    congregations, denominations and Christianity in the world
                    or in any geographical location, and reach of the gospel in
                    the world.
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-5 px-sm-3" id="features">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <h1 class="f-40 f-abril">FEATURES</h1>
              <p class="f-med f-24">
                VERITY offers the following services/features to individuals and
                churches:
              </p>
              <ol class="list-lg c-brand mt-5">
                <div class="row">
                  <div class="col-md-6">
                    <li>Church Administration</li>
                    <li>Social Media Network</li>
                    <li class="f-16">
                      Registry & Events creation,sharing, locating and tracking
                      (for members, churches and congregations)
                    </li>
                  </div>
                  <div class="col-md-6">
                    <li>Devotionals/Online store</li>
                    <li>
                      Bible Research & Study (Topics, materials, discussions
                      etc)
                    </li>
                    <li>
                      Welfare Ministry (www.helpingalms.com)
                    </li>
                  </div>
                </div>
              </ol>
            </div>
          </div>
        </div>
        <section class="features mt-6e px-sm-3">
          <div class="container">
            <div class="row">
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  01
                  <span class=" text-capitalize f-quick"
                    >Church Administration</span
                  >
                </h1>
                <p class="f-16">
                  This is a Church management solution for effective management
                  of membership data, member communication, church-to-member
                  communication, events creation, sharing and tracking,
                  attendance and reports collection and keeping, centralized
                  church data for easy access and storage.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-4"></div>
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  02
                  <span class=" text-capitalize f-quick"
                    >Social Media Network</span
                  >
                </h1>
                <p class="f-16">
                  A platform for social interaction amongst members, with the
                  Church, and connecting with Christians within your vicinity,
                  and Christians beyond.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  03
                  <span class=" text-capitalize f-quick">
                    Registry & Events-sharing
                    <!-- (for members and congregations) (locating and tracking) -->
                  </span>
                </h1>
                <p class="f-16">
                  A registry of all Churches locally and globally, their
                  addresses, directions, contact persons to reach in cases of
                  emergencies, and brief information of the congregation, its
                  membership, and the ministries etcetera, with events creation,
                  sharing and tracking is possible, timely delivery of
                  invitations to events for churches, branches and members.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-4"></div>
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  04
                  <span class=" text-capitalize f-quick"
                    >Devotionals/Online store</span
                  >
                </h1>
                <p class="f-16">
                  A platform for social interaction amongst members, with the
                  Church, and connecting with Christians within your vicinity,
                  and Christians beyond.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  05
                  <span class=" text-capitalize f-quick">
                    Biblical Research & Study
                  </span>
                </h1>
                <p class="f-16">
                  A search engine, encyclopaedia and research website for
                  research and Bible-based answers on biblical questions,
                  biblical knowledge and information from scholars.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-4"></div>
              <div class="col-md-8 card bg-white-light py-5">
                <h1 class="f-52 f-abril">
                  06
                  <span class=" text-capitalize f-quick">Welfare ministry</span>
                </h1>
                <p class="f-16">
                  An online platform where fellowship and love can be encouraged
                  as Christians have the opportunity to join hands in granting
                  the request/wish of another, contribute to a good cause,
                  empathise with a brother/sister in their difficulty and render
                  aid, contribute to a project etcetera.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style></style>
