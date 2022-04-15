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
      const { module } = this.routeMeta;
      return module || '';
    },
    routeMeta() {
      return this.$route.meta || {};
    }
  },
  created() {
    document.title = this.routeMeta.name || '这是一个 title ';
  },
  methods: {
    onRedirect() {
      // this.$router.push({ name: '/childA' });
      console.log(this.routeModule)
      if (this.routeModule === 'childAA') {
        return this.$router.push({ name: 'item', params: { module: 'childA' } });
      }
      this.$router.push({ name: 'item', params: { module: 'childAA' } });
      console.log('here>>')
    },
    onRedirectOther() {
      this.$router.push({ name: 'other' });
    }
  }
};
</script>

