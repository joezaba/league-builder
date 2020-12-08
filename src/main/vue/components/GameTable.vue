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
        <tr>
          <td colspan="7" style="padding: 5px"><strong>Week 1</strong></td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>8:30 AM</td>
          <td>T6: SS - Trueman</td>
          <td><strong>21</strong> </td>
          <td>T3: FH - Blake</td>
          <td><strong>13</strong> </td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>9:45 AM</td>
          <td>T6: SS - Trueman</td>
          <td></td>
          <td>T4: AP- Rodriguez</td>
          <td></td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td></td>
          <td>T8: SS - Abplanalp</td>
          <td></td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td colspan="7" style="padding: 5px"><strong>Week 12</strong></td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td></td>
          <td>T8: SS - Abplanalp</td>
          <td></td>
          <td>Lone Tree- Ct 2</td>
        </tr>
        <tr>
          <td>Sat 9/12</td>
          <td>10:15 AM</td>
          <td>T6: SS - Trueman</td>
          <td></td>
          <td>T8: SS - Abplanalp</td>
          <td></td>
          <td>Lone Tree- Ct 2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GameTable",
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style></style>