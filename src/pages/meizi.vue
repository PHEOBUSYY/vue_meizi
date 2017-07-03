//  发送网络请求并生成列表的模板
<template>
    <f7-page>
        <f7-navbar title="MEIZI" back-link="Back" sliding></f7-navbar>
        <f7-list>
            <f7-list-item @click="onItemClick(index)" v-for="item, index in dataList">
                <div slot="media">
                    <img v-bind:src="item.thumb_url">
                </div>
                <div slot="inner">
                    <p class="center-horizontal center-vertical">{{item.title}}</p>
                </div>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
    export default{
        data: function () {
            return {
                dataList: []
            }
        },
        methods: {
            requestData: function () {
                this.axios({
                    method: 'get',
                    url: 'https://meizi.leanapp.cn/category/All/page/1',
                    data: {}
                }).then((response) => {
                    this.resolve(response)
                })

            },
            resolve: function (response) {
                this.dataList = response.data.results
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
                })
                photoBrowser.open()
            },
            onOpen: function () {
            }
        },
        created: function () {
            this.requestData()
        }
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
</style>