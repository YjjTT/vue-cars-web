<template>
    <div class="navbar">
        <ul>
            <li><i class="icon icon-help"></i></li>
            <li><i class="icon icon-search"></i></li>
            <li>
                <a href="javascript: void(0);" class="select-car-btn">选择车辆</a>
            </li>
            <li><i class="icon icon-location"></i></li>
            <li><i class="icon icon-center"></i></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss">
    .navbar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 86px;
        z-index: 10;
        text-align: center;
        li {
            display: inline-block;
        }
        .icon {
            margin: 0 17px;
            vertical-align: middle;
            cursor: pointer;
        }
    }
    .select-car-btn {
        display: block;
        margin: 0 17px;
        height: 84px;
        width: 240px;
        line-height: 84px;
        text-align: center;
        border-radius: 100px;
        color: #ffffff;
        background-color: $color_main;
        font-size: 26px;
        font-weight: 300;
    }
</style>
