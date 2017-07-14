<template>
    <div id="app">
        <!-- Left Panel -->
        <left_panel v-on:changeCategory="test"></left_panel>
        <!-- Popup -->
        <popup></popup>
        <f7-statusbar></f7-statusbar>
        <f7-views tabs>
            <meizi id="tab1" title="全部" active backText="">
            </meizi>
            <me id="tab2" title="我" ></me>
            <f7-toolbar tabbar labels layout="dark" theme="yellow">
                <!--icon-badge="5"添加数字-->
                <f7-link icon-f7="data" tab-link="#tab1" text="妹子"
                         badgeColor="red" active></f7-link>
                <f7-link icon-f7="bell"  tab-link="#tab2" text="我"></f7-link>
            </f7-toolbar>
        </f7-views>
    </div>
</template>
<script>
    import meizi from './pages/meizi/meizi'
    import me from './pages/meizi/me'
    import popup from './pages/meizi/popup'
    import left_panel from './pages/meizi/left_panel'
    export default {
        components: {
            me, meizi, popup, left_panel
        },
        methods: {
            test: function (category) {
                alert(category)
            }
        }

    }
</script>
