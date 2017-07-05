<template>
    <f7-view :id="id" main tab :active="active">
        <f7-pages>
            <f7-page navbar-through>
                <f7-navbar>
                    <f7-navbar :title="id" sliding></f7-navbar>
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
</template>
<script>
    export default{
//        data: function () {
//            return {
//                active: false
//            }
//        },
        props: {
            active: {
                type: Boolean,
                default: false,
                required: false
            },
            id: {
                type: String,
                default: '标签',
                required: true
            }
        }

    }
</script>
