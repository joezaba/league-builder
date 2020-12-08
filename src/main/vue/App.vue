<template>
  <div id="app" class="container">
    <h3>Youth Volleyball 2020</h3>
    <h5>2nd-4th Grade</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat
      ipsam pariatur dolore quaerat explicabo nobis possimus accusamus qui ea
      quo, nemo, iusto molestias obcaecati libero sit velit voluptate dolor!
    </p>

    <GameTable />
  </div>
</template>

<script>
import M from "materialize-css";
import GameTable from "./components/GameTable.vue"
export default {
  name: "App",
  components: {
    GameTable
  },
  methods: {},
  created() {},
  mounted() {
    M.AutoInit();
  },
};
</script>

<style></style>