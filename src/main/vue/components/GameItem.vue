<template>
  <fragment>
    <tr v-if="week">
      <td colspan="7" style="padding: 5px"><strong>Week {{this.week}}</strong></td>
    </tr>
    <tr>
      <td>{{this.date}}</td>
      <td>{{this.time}}</td>
      <td>{{this.homeTeam}}</td>
      <td><strong v-if="!isEdit">{{this.homeScore}}</strong>  <input v-if="isEdit" v-model="homeScore" class="score-textbox" type="text">  </td>
      <td>{{this.awayTeam}}</td>
      <td><strong v-if="!isEdit" >{{this.awayScore}}</strong>   <input v-if="isEdit" v-model="awayScore" class="score-textbox" type="text">  </td>
      <td>{{this.location}}</td>
    </tr>
  </fragment>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "GameItem",
  props: [
    "date",
    "time",
    "homeTeam",
    "awayTeam",
    "homeScore",
    "awayScore",
    "location",
    "week"
  ],
  components: {},
  computed: mapGetters(["isEdit"]),
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>

.score-textbox {
  max-width: 30px;
}
</style>