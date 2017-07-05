//  发送网络请求并生成列表的模板


<template>
    <f7-view main tab :active="active">
        <f7-page pull-to-refresh @ptr:refresh="onRefresh" navbar-through toolbar-through
                 infinite-scroll @infinite="onInfiniteScroll">
            <f7-navbar :back-link="backText">
                <!--<f7-nav-left back-link="Back" sliding></f7-nav-left>-->
                <div class="center" @click="showActionList" ref="tt">{{titleText}}</div>
                <f7-nav-right>
                    <f7-link icon="icon-bars" @click="showActionList"></f7-link>
                </f7-nav-right>
            </f7-navbar>
            <f7-list>
                <f7-list-item @click="onItemClick(index)" v-for="(item, index) in dataList"
                              :key="item.thumb_url">
                    <div slot="media">
                        <img v-bind:src="item.thumb_url">
                    </div>
                    <div slot="inner">
                        <p class="center-horizontal center-vertical">{{item.title}}</p>
                    </div>
                </f7-list-item>
            </f7-list>
        </f7-page>
        <!--<div class="popover popover-links">-->
        <!--<div class="popover-angle"></div>-->
        <!--<div class="popover-inner">-->
        <!--<f7-list>-->
        <!--<f7-list-item @click="onCategoryClick2(index)" v-for="(cay, index) in typeArray"  :title="cay.text" :key="cay.param"></f7-list-item>-->
        <!--</f7-list>-->
        <!--</div>-->
        <!--</div>-->
    </f7-view>
</template>
<script>
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
                page: 1
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
                requried: false
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
                var temp = response.data.results;
                if (this.page === 1) {
                    this.$f7.pullToRefreshDone();
                    this.dataList = temp;
                } else {
                    if (temp.length === 0) {
                        this.$f7.detachInfiniteScroll(this.$$('.infinite-scroll'));
                        this.$$('.infinite-scroll-preloader').remove();
                    }
                    for (var data of temp) {
                        this.dataList.push(data);
                    }

                }
//                this.dataList = [];
//                for (var data of response.data.results) {
//                    this.dataList.push(data);
//                }

            },
            toImage: function (imgUrl) {
                return '<img height="50px" width="50px" align="middle" src="' + imgUrl + '">'
            },
            onItemClick: function (index) {
                //通过f7对象直接创建photoBrowser组件对象
                var photoBrowser = this.$f7.photoBrowser({
                    photos: [{
                        url: this.dataList[index].image_url,
                        caption: this.dataList[index].title
                    }],
                    type: 'popup'
                });
                photoBrowser.open()
            },
            onOpen: function () {
            },
            showActionList: function () {
                var buttonsArray = [];
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
        components: {}
    }
</script>
<style scoped>
    img {
        width: 70px;
        height: 70px;
    }

    /*p{*/
    /*color: blue;*/
    /*line-height: 70px;*/
    /*}*/
    .center-vertical {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .center-horizontal {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    /*.popover {*/
    /*width: 200px;*/
    /*}*/
</style>