<template>
  <div>
    <h4>{{ project.name }}</h4>
    <p>{{ project.short_description }}</p>
    <div class="feature" v-for="feature in features" v-bind:key="feature.pk">
      <h5>{{ feature.name }}</h5>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },

  data() {
    return {
      project: Object,
      features: Array,
    };
  },

  created() {
    this.project = this.$route.params.project;
    this.features = this.$route.params.features.data;
  },
}
</script>

<style scoped>
.feature {
  border: 1px solid;
}
</style>