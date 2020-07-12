<template>
    <div class="user-container">
        <div class="user-info">
            <img src="../../assets/images/face.png" alt="">
            <div class="meta">
                <h4 class="username">姜涛</h4>
                <span>
                    文明驾驶分
                    <strong>0</strong>
                </span>
            </div>
        </div>
        <ul class="group-links">
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-account"></i>
                我的账户
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-order"></i>
                租车订单
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-realname"></i>
                实名认证
            </router-link>
            <router-link to="/safety" tag="a" class="arrow">
                <i class="icon icon-safety"></i>
                安全设置
            </router-link>
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-help-center"></i>
                帮助中心
            </router-link>
        </ul>
        <button class="logout">登出</button>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style lang="scss">
@import "./index.scss";
    .logout {
        position: absolute;
        left: 50%;
        margin-left: -82px;
        bottom: 60px;
        width: 164px;
        height: 58px;
        border-radius: 100px;
        text-align: center;
        line-height: 58px;
        color: #ffffff;
        font-size: 18px;
        background-color: #2d3339;
        border: none;
        outline: none;
    }
</style>
