<template>
    <f7-view main tab :active="active">
        <f7-pages>
            <f7-page navbar-through>
                <f7-navbar theme="yellow" layout="dark">
                    <f7-nav-center>
                        <p>{{title}}</p>
                    </f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon-f7="settings"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Page Content -->
                <f7-block-title>介绍</f7-block-title>
                <f7-list>
                        <f7-list-item link="/mz/about/" title="关于"></f7-list-item>
                        <f7-list-item link="/mz/form/" title="表单"></f7-list-item>
                        <f7-list-item link="/mz/dynamic-route/blog/45/post/125/?foo=bar#about"
                                      title="动态路由示例"></f7-list-item>
                </f7-list>
                <f7-block-title>介绍2</f7-block-title>
                <f7-list>
                    <f7-list-item link="/mz/about/" title="关于"></f7-list-item>
                    <f7-list-item link="/mz/form/" title="表单"></f7-list-item>
                    <f7-list-item link="/mz/dynamic-route/blog/45/post/125/?foo=bar#about"
                                  title="动态路由示例"></f7-list-item>
                </f7-list>
            </f7-page>
        </f7-pages>
    </f7-view>
</template>
<script>
    export default{
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
            }
        }

    }
</script>
