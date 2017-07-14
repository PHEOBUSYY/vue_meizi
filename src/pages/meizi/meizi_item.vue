//  列表条目

<template>
    <f7-list no-hairlines-between>
        <f7-card v-for="(item, index) in dataList"
                 :key="item.thumb_url">
            <f7-card-header v-on:click.native="clickCardHeader(index)" class="grayFont" v-html="getCategoryText(item.category)">
            </f7-card-header>
            <f7-card-content>
                <f7-grid @click.native="onItemClick(index)">
                    <f7-col width="35">
                        <img v-bind:src="item.thumb_url">
                    </f7-col>
                    <f7-col width="65">
                        {{item.title}}
                    </f7-col>
                </f7-grid>
            </f7-card-content>
            <f7-card-footer>
                <f7-link color="gray" @click="favour(index)" v-html="showFavour(item)"></f7-link>
                <f7-link color="gray" @click="comment(index)">评论</f7-link>
            </f7-card-footer>
            <f7-list>
                <f7-list-item class="bg-white" @click="onItemClickComment(index,item)" v-for="(item2, index) in item.commentList" divider>
                    {{item.commentList[index]}}
                </f7-list-item>
            </f7-list>
        </f7-card>
    </f7-list>
</template>
<script>
    export default {
        data: function () {
            return {
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
                ]
            }
        },
        props: ['dataList'],
        methods: {
            onItemClick: function (index) {
                this.$f7.photoBrowser({
                    photos: [{
                        url: this.dataList[index].image_url,
                        caption: this.dataList[index].title
                    }],
                    type: 'standalone',
                    theme: 'dark'

                }).open();
            },
            clickCardHeader: function (index) {
            },
            getCategoryText: function (category) {
                for (let item of this.typeArray){
                    if (item.param === category){
                        return item.text;
                    }
                }
            },
            favour: function (index) {
                let item = this.dataList[index];
                if(item.favour){
                    item.favour = !item.favour;
                }else{
                    item.favour = true;
                }
                //通知vue强制更行列表数据
                this.$set(this.dataList,index,item);
            },
            comment: function (index) {
                this.$f7.prompt('你有什么想要说的吗?', '评论' ,(value) => {
                    let item = this.dataList[index];
                    if(!item.commentList){
                        item.commentList = [];
                    }
                    item.commentList.push("yy: " +value);
                    this.$set(this.dataList,index,item);
                });
            },
            showFavour: function (item) {
                if(item.favour){
                    return '已赞';
                }else{
                    return '赞';
                }
            },
            onItemClickComment: function (index, item) {
            }
        }
    }
</script>
<style scoped>
    img {
        width: 110px;
        /*height: 70px;*/
    }
    .grayFont {
        color: #6d6d72;
        font-size: 14px;
    }
    .bg-white {
        background-color: #ffffff;
    }
</style>