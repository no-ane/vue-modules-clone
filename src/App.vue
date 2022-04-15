<template>
  <div
    id="app"
    class="swxt-app"
  >
    <keep-alive v-show="$route.meta.keepAlive">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      :key="$route.name"
    />
  </div>
</template>

<script>
import ModulesClone from '@/service/clone';
import Config from '@/config';

export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
    for (const setting of Config.settings) {
      ModulesClone.clone(setting);
    }
  }
};
</script>

<style lang="less">
ul {
  list-style: none;
}

html {
  height: 100%;
  // 去除移动端按压元素时出现的颜色块
  -webkit-tap-highlight-color:transparent;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  // 加快ios滑动
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
