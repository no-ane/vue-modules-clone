<template>
  <div>
    列表
    <button @click="addRoute">
      追加路由
    </button>

    <ul class="module-list">
      <li
        v-for="item in list"
        :key="item.module"
        class="module-list__item"
        @click="push(item)"
      >
        {{ item.appName }}
      </li>
    </ul>
  </div>
</template>

<script>
import Router from '@/router/index';
import Config from '@/config';
import ModulesClone from '@/service/clone';

export default {
  name: 'List',
  data() {
    return {
      list: [
        {
          appName: '母版',
          module: 'mother',
          pathName: 'item'
        },
        {
          appName: '子A',
          module: 'childA',
          pathName: 'item--clone--childA'
        },
        {
          appName: '子AA',
          module: 'childAA',
          pathName: 'item--clone--childAA'
        },
        {
          appName: '子B',
          module: 'childB',
          pathName: 'other--clone--childB'
        },
      ]
    };
  },
  created() {
    this.addRoute();
  },
  methods: {
    push(item) {
      this.$router.push(item.pathName);
    },
    addRoute() {
      // settings
      for (const setting of Config.settings) {
        ModulesClone.clone(setting);
      }

      this.$nextTick(() => {
        console.log('Router.options.routes', Router.options.routes);
      });
    }
  }
};
</script>

<style lang="less" scoped>

.module-list {
  display: flex;

  &__item {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 10px;
  }
}
</style>

