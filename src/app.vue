<template>
    <div id="app">
        <!--<f7-statusbar></f7-statusbar>-->
        <f7-views tabs>
            <f7-view id="tab1" main tab active>
                <f7-pages>
                    <f7-page navbar-through>
                        <f7-navbar>
                            <f7-navbar title="Tab1" sliding></f7-navbar>
                        </f7-navbar>
                        <!-- Page Content -->
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                            <f7-list-item link="/meizi/" title="Meizi"></f7-list-item>
                            <f7-list-item link="/tab/" title="MainTab"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
            <f7-view id="tab2" main tab>
                <f7-pages>
                    <f7-page navbar-through>
                        <f7-navbar>
                            <f7-navbar title="Tab2" sliding></f7-navbar>
                        </f7-navbar>
                        <!-- Page Content -->
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                            <f7-list-item link="/meizi/" title="Meizi"></f7-list-item>
                            <f7-list-item link="/tab/" title="MainTab"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
            <f7-view id="tab3" main tab>
                <f7-pages>
                    <f7-page navbar-through>
                        <f7-navbar>
                            <f7-navbar title="Tab3" sliding></f7-navbar>
                        </f7-navbar>
                        <!-- Page Content -->
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                            <f7-list-item link="/meizi/" title="Meizi"></f7-list-item>
                            <f7-list-item link="/tab/" title="MainTab"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
            <f7-toolbar tabbar labels>
                <f7-link icon="tabbar-demo-icon-1" tab-link="#tab1" active text="妹子" icon-badge="5" badgeColor="red"></f7-link>
                <f7-link icon="tabbar-demo-icon-2" tab-link="#tab2" text="动态"></f7-link>
                <f7-link icon="tabbar-demo-icon-3" tab-link="#tab3" text="我"></f7-link>
            </f7-toolbar>
        </f7-views>
    </div>
</template>
<script>
    export default{}
</script>
