<template>
    <div>
        <section class="cars-item">
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
                <div class="info">
                    <div>
                        <h4 class="cars-number">粤 213213</h4>
                        <div>
                            <ul class="cars-electric active-li-6">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p class="distance">
                                <sub>约</sub>
                                <strong>600</strong>
                                <sub>KM</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img src="../../assets/images/pic001.jpg" alt="">
            </div>
            <footer>
                <a href="javascript:;" class="parking-link">某某停车场</a>
            </footer>
        </section>
        <section class="cars-item cars-detailed" :style="'height:' + height">
            <h4 class="column">
                某某停车场
                <i class="close"></i>
            </h4>
            <header>
                <h4 class="cars-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <img src="../../assets/images/pic001.jpg" alt="" width="100%">
            <div class="clearfix">
                <h4 class="pull-left fs-24">粤 213213</h4>
                <p class="distance pull-right">
                    <sub>约</sub>
                    <strong>600</strong>
                    <sub>KM</sub>
                </p>
            </div>
            <div class="cars-electric-box">
                <div class="p-r">
                    <span class="e-high" style="width: 80%;"></span>
                    <span class="e-bg"></span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "CarsList",
        props: {
            height: {
                type: String,
                default: "257px"
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/sassConfing.scss";
    .cars-item {
        background-color: #ffffff;
        border-radius: 24px;
        margin: auto;
        padding: 30px 30px 0;
        @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,0.2));
        @include webkit(box-sizing, border-box);
        width: 505px;
        height: 257px;
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
    .cars-content {
        position: relative;
        @include clearfix;
        margin: 11px 0 7px 0;
        img {
            float: right;
            height: 120px;
        }
        .info {
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            align-items: center;
        }
        .cars-number {
            font-size: 18px;
        }
        .cars-electric {
            display: inline-block;
            padding-top: 10px;
            li {
                display: inline-block;
                width: 7px;
                height: 24px;
                border-radius: 100px;
                background-color: #e1e1e1;
                margin-right: 3px;
            }
            @for $i from 1 through 10 {
                &.active-li-#{$i} {
                    li:nth-child(-n+#{$i}) {
                        @include webkitA(background, linear-gradient(#17a8fa, #108dd9));
                    }
                }
            }
        }
    }
    .parking-link {
        display: block;
        border-top: 1px solid #e1e1e1;
        color: $color_main;
        opacity: .8;
        line-height: 53px;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            margin-top: -8px;
            border-top: 1px solid #d6d7d9;
            border-right: 1px solid #d6d7d9;
            width: 8px;
            height: 8px;
            right: 0;
            @include webkit(transform, rotate(45deg));
        }
    }
    .cars-detailed {
        padding-top: 0;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        .column {
            position: relative;
            padding: 26px 0 20px;
            margin-bottom: 19px;
            font-size: 20px;
            color: $color_main;
            border-bottom: 1px solid #e1e1e1;
            .close {
                position: absolute;
                right: 0;
                top: 25px;
                display: block;
                width: 26px;
                height: 26px;
                cursor: pointer;
                &:before, &:after {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-left: -1px;
                    margin-top: -10px;
                    content: "";
                    height: 20px;
                    border-left: 2px solid #999c9f;
                }
                &:before {
                    @include webkit(transform, rotate(45deg));
                }
                &:after {
                    @include webkit(transform, rotate(-45deg));
                }
            }
        }
    }
    .distance {
        margin-left: 5px;
        display: inline-block;
        strong {
            margin: 0 3px;
            font-size: 22px;
        }
        sub {
            position: relative;
            top: -2px;
        }
        sub:first-of-type {
            opacity: .8;
        }
    }
    .cars-electric-box {
        padding: 15px;
        margin-top: 17px;
        border-radius: 100px;
        background-color: #fff;
        @include webkit(box-shadow, 0 0 10px 0 rgba(0,0,0,.1));
        .e-bg {
            display: block;
            height: 8px;
            background-color: #e1e1e1;
            border-radius: 100px;
        }
        .e-high {
            position: absolute;
            background-color: $color_blur;
            border-radius: 100px;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
</style>
