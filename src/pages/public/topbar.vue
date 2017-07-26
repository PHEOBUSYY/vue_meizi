<template>
    <f7-navbar theme="yellow" layout="dark" :back-link="back_text" >
        <f7-nav-left v-if="!back_text">
            <f7-link   :icon-f7="left_img" :open-panel="open"></f7-link>
        </f7-nav-left>
        <f7-nav-center >{{title}}</f7-nav-center>
        <f7-nav-right>
            <f7-link :icon-f7="right_img" @click.native="showActionList"></f7-link>
        </f7-nav-right>
    </f7-navbar>
</template>
<script>
    import common_data from './common_data'
    export default {
        mixins: [
            common_data
        ],
        props: {
            title: {
                type: String,
                default: '标签',
                required: true
            },
            right_img: {
                type: String,
                default: '',
                required: false
            },
            left_img: {
                type: String,
                default: 'back',
                required: false
            },
            open: {
                type: String,
                default: '',
                required: false
            },
            back_text: {
                type: String,
                default: '',
                required: false
            },
        },
        methods: {
            showActionList: function () {
                let buttonsArray = [];
                for (let index = 0; index < this.typeArray.length; index++) {
                    buttonsArray[index] = {
                        text: this.typeArray[index].text,
                        onClick: () => {
                            this.onCategoryClick(index);
                        }
                    };
                }
                buttonsArray.push({
                    text: '取消',
                    color: 'red'
                });
                this.$f7.actions(buttonsArray);

            },
        }
    }
</script>