<template>
    <f7-view :id="id" main tab :active="active">
        <f7-pages>
            <f7-page navbar-through>
                <f7-navbar>
                    <f7-navbar :title="id" sliding></f7-navbar>
                </f7-navbar>
                <!-- Page Content -->
                <f7-list>
                    <f7-list-item link="/mz/about/" title="About"></f7-list-item>
                    <f7-list-item link="/mz/form/" title="Form"></f7-list-item>
                    <f7-list-item link="/mz/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
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
            id: {
                type: String,
                default: '标签',
                required: true
            }
        }

    }
</script>
