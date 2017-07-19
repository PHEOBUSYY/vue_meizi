<template>
    <f7-panel left reveal layout="dark">
        <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
            <f7-navbar v-if="$theme.ios" title="分类" sliding></f7-navbar>
            <f7-pages>
                <f7-page>
                    <f7-navbar v-if="$theme.material" title="分类" sliding></f7-navbar>
                    <f7-block inner>
                        <p>请选择分类</p>
                    </f7-block>
                    <f7-block-title>常用分类</f7-block-title>
                    <f7-list>
                        <f7-list-item :key="index" link="#" v-for="(item, index) in frequencyTypeArray" :title="item.text" @click="goToSee(item.param)" link-close-panel></f7-list-item>
                    </f7-list>
                    <f7-block-title>全部分类</f7-block-title>
                    <f7-list>
                        <f7-list-item :key="index" link="#" v-for="(item, index) in typeArray" :title="item.text" @click="goToSee(item.param)" link-close-panel></f7-list-item>
                    </f7-list>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-panel>
</template>
<script>
    import bus from '../../eventBus'
    import store from '../../vuex/store'
    import {CATEGORY_MUTATION} from '../../vuex/mutation-type'
    export default{
        methods: {
            goToSee: function (category) {
                this.$store.dispatch(CATEGORY_MUTATION,category);
//                bus.$emit('changeCategory',category);
            }
        },
        components: {
            bus
        },
        store,
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
                ],
                frequencyTypeArray: [
                    {
                        text: '清新',
                        param: 'QingXin'
                    },
                    {
                        text: '杂烩',
                        param: 'ZaHui'
                    }
                ]
            }
        }
    }
</script>