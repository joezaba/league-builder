<template>
  <div id="app" class="container">
    <h3>Youth Volleyball 2020</h3>
    <h5>2nd-4th Grade</h5>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat ipsam pariatur dolore quaerat explicabo nobis possimus accusamus qui ea quo, nemo, iusto molestias obcaecati libero sit velit voluptate dolor!</p>
    <h5><i class="material-icons">today</i>Game Schedule</h5>
    <div class="input-field col s12">
      <select>
        <option value disabled selected>All Teams</option>
        <option value="1">T6: SS - Trueman</option>
        <option value="2">T4: AP- Rodriguez</option>
        <option value="3">T8: SS - Abplanalp</option>
      </select>
      <label>Select Team</label>
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Home</th>
          <th>Away</th>
          <th>Location</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Sat 9/12</td>
          <td>8:30 AM</td>
          <td>T6: SS - Trueman</td>
          <td>T3: FH - Blake</td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>9:45 AM</td>
          <td>T6: SS - Trueman</td>
          <td>T4: AP- Rodriguez</td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td>T8: SS - Abplanalp</td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td>T8: SS - Abplanalp</td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td>T8: SS - Abplanalp</td>
          <td>Lone Tree- Ct 2</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: "App",
  components: {},
  methods: {},
  created() {

  },
  mounted () {
    M.AutoInit()
},
};
</script>

<style></style>