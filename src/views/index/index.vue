<template>
    <div class="amap-wrap">
        <!--        cars data渲染-->
        <!--        <Cars />-->
        <!--        地图-->
        <Map/>
        <!--        会员-->
        <div id="children-wrap" :class="{open: show}">
            <router-view/>
        </div>
        <Navbar/>
    </div>
</template>

<script>
    import Map from '../amap/index';
    import Cars from '../cars/index';
    import Navbar from '../../components/navbar/index';

    export default {
        name: "Index",
        components: {
            Map,
            Cars,
            Navbar
        },
        data() {
            return {}
        },
        computed: {
            show() {
                const router = this.$route;
                return router.name !== 'Index';
            }
        },
        mounted() {
            document.addEventListener('mouseup', (e) => {
                const userContent = document.getElementById('children-wrap')
                if (userContent && !userContent.contains(e.target)) {
                    this.$router.push({
                        name: 'Index'
                    })
                }
            })
        },
        watch: {}
    }
</script>

<style lang="scss">
    @import "../../styles/sassConfing.scss";

    #children-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        right: -600px;
        width: 408px;
        background-color: #34393f;
        z-index: 101;
        @include webkit(transtion, all .3s ease 0s);
        @include webkit(box-shadow, -5px 0 38px 0 rgba(0,0,0,.4));
        &.open {
            right: 0;
        }
    }
</style>
