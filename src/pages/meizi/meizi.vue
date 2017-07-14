//  发送网络请求并生成列表的模板
<!--suppress ALL -->
<template>
    <f7-view main tab :active="active">
        <f7-page pull-to-refresh @ptr:refresh="onRefresh" navbar-through toolbar-through
                 infinite-scroll @infinite="onInfiniteScroll">
            <f7-navbar :back-link="backText" theme="yellow" layout="dark">
                <f7-nav-left>
                    <f7-link icon-f7="menu" open-panel="left"></f7-link>
                </f7-nav-left>
                <f7-nav-center @click.native="showActionList">
                    <p>{{titleText}}</p>
                    <!--<f7-link theme="white" icon-f7="arrow_down"></f7-link>-->
                </f7-nav-center>
                <f7-nav-right>
                    <f7-link icon-f7="add_round" @click="showActionList"></f7-link>
                    <!--<f7-link icon-f7="add" open-popup="#popup"></f7-link>-->
                </f7-nav-right>
            </f7-navbar>
            <!--<f7-block-title>Block Title</f7-block-title>-->
            <meizi_item :dataList="dataList"></meizi_item>
        </f7-page>
    </f7-view>
</template>
<script>
    import meizi_item from './meizi_item'
    export default{
        data: function () {
            return {
                dataList: [],
                category: 'All',
                titleText: this.title,
                typeArray: [
                    {
                        text: '全部',
                        param: 'All'
                    },
                    {
                        text: '清新',
                        param: 'QingXin'
                    },
                    {
                        text: '翘臀',
                        param: 'QiaoTun'
                    },
                    {
                        text: '大胸',
                        param: 'DaXiong'
                    },
                    {
                        text: '美腿',
                        param: 'MeiTui'
                    }, {
                        text: '黑丝',
                        param: 'HeiSi'
                    }, {
                        text: '杂烩',
                        param: 'ZaHui'
                    }
                ],
                page: 1,
            }
        },
        props: {
            active: {
                type: Boolean,
                default: false,
                required: false
            },
            title: {
                type: String,
                default: '标签',
                required: true
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
                })

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
            showActionList: function () {
                let buttonsArray = [];
                for (let index = 0; index < this.typeArray.length; index++) {
                    buttonsArray[index] = {
                        text: this.typeArray[index].text,
//                        bold: true,
                        onClick: () => {
                            this.onCategoryClick(index);
                        }
                    };
                }
                buttonsArray.push({
                    text: '取消',
                    color: 'red'
                });
                this.$f7.actions(buttonsArray);

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
            }
        },
        created: function () {
            this.requestData()
        },
        components: {
            meizi_item
        }
    }
</script>
