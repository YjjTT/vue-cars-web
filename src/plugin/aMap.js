import Vue from "vue";
import VueAMap from 'vue-amap'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'ccaafcbbe20fb67ef63cbe19ba28d7cf',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});
