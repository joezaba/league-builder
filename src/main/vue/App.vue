<template>
  <div id="app" class="container">
    <h2>Youth Volleyball 2020</h2>
    <h4>2nd-4th Grade</h4>

    <div v-if="!isEdit" v-html="editorData" ></div>
    <ckeditor v-if="isEdit" v-model="editorData" :config="editorConfig"></ckeditor>

    <GameTable /> 
    
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">menu</i>
      </a>
      <ul>
        <li v-if="isEdit" ><a @click="saveEdits()" class="btn-floating yellow"><i class="material-icons">save</i></a></li>
        <li v-if="!isEdit" ><a @click="toggleEditMode()" class="btn-floating yellow darken-1 tooltipped" data-position="left" data-tooltip="Edit Schedule"><i class="material-icons">mode_edit</i></a></li>
        <li><a class="btn-floating green"><i class="material-icons">settings</i></a></li>
        <li><a class="btn-floating blue"><i class="material-icons">add</i></a></li>
      </ul>
    </div> 
  </div>
</template>

<script>
import M from "materialize-css";
import { mapActions, mapGetters } from 'vuex';
import GameTable from "./components/GameTable.vue"
export default {
  name: "App",
  components: {
    GameTable
  },
  data() {
      return {
          editorData: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat ipsam pariatur dolore quaerat explicabo nobis possimus accusamus qui ea quo, nemo, iusto molestias obcaecati libero sit velit voluptate dolor!</p>',
          editorConfig: {},
      };
  },
  computed: mapGetters(["isEdit"]),
  methods: {
    ...mapActions(['toggleEditMode']),
    saveEdits(){
      this.toggleEditMode()
      // save edits to state and DB
    }
  },
  created() {},
  mounted() {
    M.AutoInit();
  },
};
</script>

<style></style>