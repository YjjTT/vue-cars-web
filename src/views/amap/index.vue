<template>
    <div class="amap-wrap">
        <el-amap
                vid="amapContainer"
                :events="events"
                class="amap-demo">
        </el-amap>
    </div>
</template>

<script>
    import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap';
    export default {
        name: "Amap",
        data() {
            return {
                map: null,
                zoom: 12,
                events: {}
            }
        },
        mounted() {
            lazyAMapApiLoaderInstance.load().then(() => {
                // your code ...
                this.map = new AMap.Map('amapContainer', {
                    center: [121.59996, 31.197646],
                    zoom: this.zoom
                });
            });
        }
    }
</script>

<style lang="scss">
    .amap-wrap {
        height: 100vh;
    }
</style>
