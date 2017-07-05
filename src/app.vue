<template>
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <f7-views tabs>
            <meizi id="tab1" title="全部" active backText="">
            </meizi>
            <meizi id="tab2" title="清新" category="QingXin"></meizi>
            <feed id="tab3" title="我"></feed>
            <f7-toolbar tabbar labels>
                <f7-link icon="tabbar-demo-icon-1" tab-link="#tab1" text="妹子" icon-badge="5"
                         badgeColor="red" active></f7-link>
                <f7-link icon="tabbar-demo-icon-2" tab-link="#tab2" text="动态"></f7-link>
                <f7-link icon="tabbar-demo-icon-3" tab-link="#tab3" text="我"></f7-link>
            </f7-toolbar>
        </f7-views>
    </div>
</template>
<script>
    import meizi from './pages/meizi'
    import feed from './pages/feed'
    export default {
        components: {
            feed, meizi
        }
    }
</script>
