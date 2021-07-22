<template>
  <div class="floating__nav">
    <div
      class="mb-5"
      :class="
        $route.name == 'ChurchEmail' ||
        $route.name == 'NewRequest' ||
        $route.name == 'RejectedRequest' ||
        $route.name == 'CreateRequest' ||
        $route.name == 'CreateResource' ||
        $route.name == 'CreateBulletin' ||
        $route.name == 'ViewResource' ||
        $route.name == 'AllBulletin' ||
        $route.name == 'RegisterManager' ||
        $route.name == 'AcceptedRequest'
          ? 'co_container'
          : 'container'
      "
    >
      <div class="v__nav">
        <ol class=" bg-white f-14 f-bold list-unstyled mt-3">
          <li class="v__nav-list">
            <router-link
              tag="a"
              to="/account/dashboard/belivers-network"
              class="f-bold v__nav-item"
              :class="$route.name == 'BeliversNetworkDashboard' && 'active'"
              >Fellowship Network</router-link
            >
          </li>
          <li class="v__nav-list">
            <router-link
              tag="a"
              to="/account/dashboard/church-organisation"
              class="f-bold v__nav-item c-brand"
              :class="
                ($route.name == 'ChurchEmail' ||
                  $route.name == 'NewRequest' ||
                  $route.name == 'RejectedRequest' ||
                  $route.name == 'CreateRequest' ||
                  $route.name == 'CreateResource' ||
                  $route.name == 'CreateBulletin' ||
                  $route.name == 'ViewResource' ||
                  $route.name == 'AllBulletin' ||
                  $route.name == 'RegisterManager' ||
                  $route.name == 'AcceptedRequest') &&
                  'active'
              "
              >Church Administration</router-link
            >
          </li>
          <li class="v__nav-list">
            <router-link
              to="/account/dashboard/bible-search"
              tag="a"
              class="f-bold v__nav-item"
              >Bible Search & Devotional</router-link
            >
          </li>
          <li class="v__nav-list">
            <a href="" class="f-bold v__nav-item">Online Store</a>
          </li>
          <li class="v__nav-list">
            <router-link
              tag="a"
              to="/account/dashboard/directory-event-locator"
              class="f-bold v__nav-item"
              >Directory/Event Locator</router-link
            >
          </li>
          <li class="v__nav-list">
            <a href="welfare.html" class="f-bold v__nav-item">Welfare</a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
