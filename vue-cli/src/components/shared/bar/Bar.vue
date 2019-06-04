<template>
  <div id="myNavBar">
    <div>
<b-navbar toggleable="lg" type="dark" variant="dark">
  <b-navbar-brand href="#">Comanda do Troll</b-navbar-brand>

  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item href="#" disabled>COZINHA
        <b-badge pill variant="danger">2</b-badge>
      </b-nav-item>
      <b-nav-item href="#" disabled>BOQUETA
        <b-badge pill variant="danger">3</b-badge>
      </b-nav-item>
      <b-nav-item href="#" disabled>MESAS
        <b-badge pill variant="danger">4</b-badge>
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using 'button-content' slot -->
        <template slot="button-content"><em>User</em></template>
        <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
        <b-dropdown-item href="#" disabled>Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</div>

  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
