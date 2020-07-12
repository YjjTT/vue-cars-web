<template>
    <div class="header-back">
        <div class="back">
            <i class="back-icon"></i>
            <h4 class="title">{{title}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBack",
        props: {
            title: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/sassConfing.scss";
    .header-back {
        position: relative;
        padding-bottom: 147px;
        .back {
            position: absolute;
            top: 21px;
            left: 0;
            right: 0;
            height: 40px;
            line-height: 14px;
            .title {
                font-size: 16px;
                margin-left: 33px;
                color: #ffffff;
            }
            .back-icon {
                width: 40px;
                height: 40px;
                position: absolute;
                left: 0;
                top: 0;
                &:after {
                    position: absolute;
                    left: 0;
                    top: 0;
                    content: "";
                    display: block;
                    width: 12px;
                    height: 12px;
                    border-top: 2px solid $color_blur;
                    border-left: 2px solid $color_blur;
                    @include webkit(transform, rotate(-45deg));
                    cursor: pointer;
                }
            }
        }
    }
</style>
