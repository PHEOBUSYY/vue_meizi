//  发送网络请求并生成列表的模板

<template>
    <f7-view main tab :active="active">
        <topbar back_text="" :title="title" left_img="menu" right_img="add_round" open="right"></topbar>
        <f7-page pull-to-refresh @ptr:refresh="onRefresh" navbar-through toolbar-through
                 infinite-scroll @infinite="onInfiniteScroll">
            <meizi_item :dataList="dataList"></meizi_item>
        </f7-page>
    </f7-view>
</template>
<!--suppress ALL -->
<script>
    import Vue from 'vue'
    import {NUMBER_MUTATION} from '../../vuex/mutation-type'
    import store from '../../vuex/store'
    import meizi_item from './meizi_item'
    import topbar from '../public/topbar'
    import common_data from '../public/common_data'
    export default{
        mixins: [common_data],
        data: function () {
            return {
                category: this.$store.state.meizi.category,
                dataList: [],
                page: 1,
                title: '全部'
            }
        },
        watch: {
            deep: true,
            newCategory: function (val, oldVal) {
                for (var typeObj of this.typeArray) {
                    if (typeObj.param === val) {
                        this.title = typeObj.text;
                        Vue.set(this, 'title', typeObj.text)
                        break;
                    }
                }
                this.category = val;
                this.page = 1;
                this.dataList = [];
                this.requestData();
            }
        },
        props: {
            active: {
                type: Boolean,
                default: false,
                required: false
            },
            backText: {
                type: String,
                default: '',
                required: false
            }
        },
        methods: {
            requestData: function () {
                this.axios({
                    method: 'get',
                    url: 'https://meizi.leanapp.cn/category/' + this.category + '/page/' + this.page,
                    data: {}
                }).then((response) => {
                    this.resolve(response);
                }).catch(function (error) {
                    alert(error);
                });

            },
            resolve: function (response) {
                let temp = response.data.results;
                if (this.page === 1) {
                    this.$f7.pullToRefreshDone();
                    this.dataList = temp;
                } else {
                    if (temp.length === 0) {
                        this.$f7.detachInfiniteScroll(this.$$('.infinite-scroll'));
                        this.$$('.infinite-scroll-preloader').remove();
                    }
                    for (let data of temp) {
                        this.dataList.push(data);
                    }

                }
            },
            toImage: function (imgUrl) {
                return '<img height="50px" width="50px" align="middle" src="' + imgUrl + '">'
            },
            onOpen: function () {
            },

            onCategoryClick: function (index) {
                this.category = this.typeArray[index].param;
                this.titleText = this.typeArray[index].text;
                this.page = 1;
                this.dataList = [];
                this.requestData();
                this.$f7.closeModal('.popover-links', false);
            },
            onRefresh: function () {
                // 下拉刷新
                this.page = 1;
                this.dataList = [];
                this.requestData();
            },
            onInfiniteScroll: function () {
                //  加载更多
                this.page++;
                this.requestData();
            },
        },
        created: function () {
            this.requestData();
        },
        components: {
            topbar, meizi_item
        },
        store,
        computed: {
            newCategory: function () {
                return this.$store.state.meizi.category;
            }
        }
    }
</script>
