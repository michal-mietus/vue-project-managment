<template>
  <div>
    <h4 v-on:click="getFeaturesAndMoveToDetailProject">{{ project.name }}</h4>
    <p>{{ project.short_description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },

  mounted(){
    console.log(this.project)
  },

  data() {
    return {
      features: Array,
    };
  },

  methods: {
    getFeaturesAndMoveToDetailProject: function () {
      const axios = this.$http;
      const router = this.$router;
      const project = this.project;
      const url = this.$serverHost + '/projects/' + this.project.pk + '/features/';

      axios.get(url)
        .then(function(response){
          const features = response;
          router.push({ name: 'projectDetails', params: { project: project, features: features }});
        })
        .catch(error => console.error(error));
    },
  },
}
</script>
