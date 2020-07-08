<template>
    <div class="cars-wrap">
        <section class="cars-item">
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content"></div>
            <footer></footer>
        </section>
        <span @click="user">汽车列表</span>
    </div>
</template>

<script>
    export default {
        name: "Cars",
        methods: {
            user() {
                this.$router.push({
                    name: "User"
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/sassConfing.scss";
    .cars-wrap {
        position: fixed;
        left: 0;
        bottom: 94px;
        right: 0;
        z-index: 11;
    }
    .cars-item {
        background-color: #ffffff;
        border-radius: 24px;
        margin: auto;
        padding: 30px;
        @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,0.2));
        @include webkit(box-sizing, border-box);
        width: 505px;
        height: 207px;
        header {
            display: flex;
            h4, p {
                flex: 1;
            }
        }
    }
    .cars-logo {
        img {
            display: inline-block;
            height: 34px;
            vertical-align: middle;
            margin-right: 10px;
        }
        .name { font-size: 16px; }
    }
    .cars-attr {
        text-align: right;
        opacity: 0.5;
        line-height: 34px;
    }
</style>
