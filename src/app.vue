<template>
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <!-- Left Panel -->
        <left_panel v-on:changeCategory="test"></left_panel>
        <!-- Popup -->
        <popup></popup>
        <f7-views tabs>
            <meizi id="tab1" title="全部" active backText="">
            </meizi>
            <me id="tab2" title="我" ></me>
            <f7-toolbar tabbar labels layout="dark" theme="yellow">
                <!--icon-badge="5"添加数字-->
                <f7-link icon-f7="home" tab-link="#tab1" text="妹子"
                          active></f7-link>
                <f7-link  icon-f7="bell" tab-link="#tab2" text="我"></f7-link>
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
<style scoped>
    /* Default Status bar background */
    .statusbar-overlay {
        background: #131313;
        /* We can add transition for smooth color animation */
        -webkit-transition: 400ms;
        transition: 400ms;
    }

    /* Change Status bar background when panel opened */
    body.with-panel-left-cover .statusbar-overlay {
        background: #222;
    }
</style>
