<template>
  <div class="projects">
    <h2>Projects</h2>
    <div v-for="project in projects" v-bind:key="project.pk">
      <ProjectComponent :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectComponent from '@/components/projects/Project.vue';


export default {
  name: 'home',

  components: {
    ProjectComponent,
  },

  data() {
    return {
      projects: null,
    };
  },

  mounted() {
    this.getProjects();
  },

  methods: {
    getProjects: function(){
      const url = this.$serverHost + "/projects/";
      this.$http
        .get(url)
        .then(response => (this.projects = response.data))
        .catch(error => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>

.sign-button {
  width: 10%;
  margin: 10px;
  background-color: #00FA9A;
  font-weight: bold;
}

.sign-button:hover {
  background-color: #00FF7F;
}
</style>
