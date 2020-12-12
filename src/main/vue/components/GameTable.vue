<template>
  <div>
    <div class="row">
      <div class="input-field col l6 m9 s12">
        <select>
          <option value selected>All Teams</option>
          <option value="1">T6: SS - Trueman</option>
          <option value="2">T4: AP- Rodriguez</option>
          <option value="3">T8: SS - Abplanalp</option>
        </select>
        <label>Select Team</label>
      </div>
    </div>
    <h5>
      <span style="margin-bottom: 100px"> Game Schedule</span>
    </h5>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Home</th>
          <th></th>
          <th>Away</th>
          <th></th>
          <th>Location</th>
        </tr>
      </thead>

      <tbody>
        
        <GameItem
          date="Sat 9/12"
          time="8:30 AM"
          homeTeam="T6: SS - Trueman"
          awayTeam="T3: FH - Blake"
          location="Lone Tree- Ct 2"
          week="1"
        />
        <GameItem
          date="Sat 9/12"
          time="9:45 AM"
          homeTeam="T6: SS - Trueman"
          awayTeam="T4: AP- Rodriguez"
          location="Lone Tree- Ct 2"
        />
        
        <GameItem
          date="Sat 9/12"
          time="10:15 AM"
          homeTeam="T3: FH - Blake"
          awayTeam="T4: AP- Rodriguez"
          location="Lone Tree- Ct 2"
          week="2"
        />
        
        <GameItem
          date="Sat 9/12"
          time="11:45 AM"
          homeTeam="T3: FH - Blake"
          awayTeam="T4: AP- Rodriguez"
          location="Lone Tree- Ct 2"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import GameItem from "./GameItem.vue";
export default {
  name: "GameTable",
  components: {
    GameItem
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style></style>