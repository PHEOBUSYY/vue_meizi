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
                        <f7-list-item link="#" title="杂烩" @click="goToSee('ZaHui')" link-close-panel></f7-list-item>
                        <f7-list-item link="#" title="清新" @click="goToSee('QingXin')" link-close-panel></f7-list-item>
                    </f7-list>
                    <f7-block-title>全部分类</f7-block-title>
                    <f7-list>

                    </f7-list>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-panel>
</template>
<script>
    import bus from '../../eventBus'

    export default{
        methods: {
            goToSee: function (category) {
                bus.$emit('changeCategory',category);
            }
        },
        components: {
            bus
        }
    }
</script>