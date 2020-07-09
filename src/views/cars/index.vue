<template>
    <div class="cars-wrap">
        <div class="cars-swiper-wrap">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <CarsItem height="800px" />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
                <swiper-slide>
                    <CarsItem />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css';
    import CarsItem from '../../components/carsList/index';

    export default {
        name: "Cars",
        components: {
            Swiper,
            SwiperSlide,
            CarsItem
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
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
    .cars-swiper-wrap {
        .swiper-container {
            overflow: initial;
        }
        position: relative;
        padding: 0 155px;
        .swiper-button-prev,
        .swiper-button-next {
            top: 50%;
            margin-top: -50px;
            width: 60px;
            height: 100px;
            outline: none;
            border-radius: 100px;
            background-color: #fff;
            @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,0.2));
            @include webkit(transition, all .3s ease 0s);
            &.swiper-button-disabled {
                opacity: 1;
            }
            &:hover {
                background-color: $color_main;
            }
        }
        .swiper-button-prev {
            left: 53px;
            &:after {
                content: "";
                width: 17px;
                height: 17px;
                margin-left: 5px;
                border-left: 3px solid #000;
                border-top: 3px solid #000;
                @include webkit(transform, rotate(-45deg));
                @include webkit(box-sizing, border-box);
            }
            &:hover {
                &:after {
                    border-left: 3px solid $color_blur;
                    border-top: 3px solid $color_blur;
                }
            }
        }
        .swiper-button-next {
            right: 53px;
            &:after {
                content: "";
                width: 17px;
                height: 17px;
                margin-right: 5px;
                border-right: 3px solid #000;
                border-top: 3px solid #000;
                @include webkit(transform, rotate(45deg));
                @include webkit(box-sizing, border-box);
            }
            &:hover {
                &:after {
                    border-right: 3px solid $color_blur;
                    border-top: 3px solid $color_blur;
                }
            }
        }
    }
</style>
