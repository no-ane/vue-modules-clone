<template>
  <div
    id="app"
  >
    内容 {{ routeModule }}
    <button @click="onRedirect">
      跳转到 {{ routeModule === 'childAA' ? 'childA' : 'childAA' }}
    </button>
    <button @click="onRedirectOther">
      跳转到other
    </button>
  </div>
</template>

<script>
// import { getCurrentModule } from '@/service/methods';

export default {
  name: 'Item',
  data () {
    return {};
  },
  computed: {
    routeModule () {
      const { meta } = this.$route || {};
      return meta.module || '';
    },
  },
  created() {
    console.log('created');
  },
  methods: {
    onRedirect() {
      // this.$router.push({ name: '/childA' });
      if (this.routeModule === 'childAA') {
        this.$router.push({ name: 'item', params: { module: 'childA' } });
      } else if (this.routeModule === 'childA') {
        this.$router.push({ name: 'item', params: { module: 'childAA' } });
      }
    },
    onRedirectOther() {
      this.$router.push({ name: 'other' });
    }
  }
};
</script>

