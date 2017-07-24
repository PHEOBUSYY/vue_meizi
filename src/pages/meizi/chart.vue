<template>
    <f7-page>
        <f7-navbar title="Chart" back-link="Back" sliding theme="yellow" layout="dark"></f7-navbar>
        <f7-block inner>
            <div ref='factoryStock' style="width: 100%;height: 300px;"></div>
        </f7-block>
    </f7-page>
</template>
<script>
    import echarts from 'echarts'
    export default{
        data(){
            return {}
        },
        components: {},
        mounted(){
            this.myChart = echarts.init(this.$refs.factoryStock);
            this.myChart.setOption({
                title: {text: 'ECharts 入门示例'},
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {
                },
                color: ['#690', '#609'],
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }],
            });
        }

    }
</script>