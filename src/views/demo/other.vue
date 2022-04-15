<template>
  <div
    id="app"
    class="swxt-app"
  >
    其他内容 {{ routeModule }}
  </div>
</template>

<script>

export default {
  name: 'Other',
  data() {
    return {

    };
  },
  computed: {
    routeModule() {
      const { meta } = this.$route || {};
      return meta.module || '';
    },
  },
  created() {
  }
};
</script>

