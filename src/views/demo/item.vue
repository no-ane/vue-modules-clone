<template>
  <div class="container">
    <span class="container_tt">当前路由 {{ routeModule }}</span>

    <div class="btn" @click="onRedirect">
      跳转到 {{ routeModule === 'childAA' ? 'childA' : 'childAA' }}
    </div>
    <div class="btn" @click="onRedirectOther">
      跳转到other
    </div>
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

      if (this.routeModule === 'childAA') {
        return this.$router.push({ name: 'item', params: { module: 'childA' } });
      }
      return this.$router.push({ name: 'item', params: { module: 'childAA' } });
      // this.$router.push({ name: 'item', params: { module: 'childAA' } });
      // console.log('here>>', { name: 'item', params: { module: 'childAA' } });
    },
    onRedirectOther() {
      this.$router.push({ name: 'other' });
    },
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}
.btn {
  display: block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  margin-top: 10px;

  &:nth-of-type(2n) {
    background-color: lightgreen;
  }
}
</style>

