<template lang="pug">
    div.goods
        el-row
            el-col(:span='8') 
                div.cortsAndOrder
                    el-tabs(v-model="activeName")
                        el-tab-pane(label="点餐",name="first")
                            Carts
                        el-tab-pane(label="订单",name="second")
                            Order   
            el-col(:span='16')
                div.menu
</template>
<script>
import Carts from '@/components/Carts.vue'
import Order from '@/components/Order.vue'
export default {
    data(){
        return{
            activeName:'',
        }
    },
    components:{
        Carts,Order
    }
}
</script>
<style lang="scss" scoped>
$h:100%;
.goods{
    height: $h;
    .el-row,.el-col{
        height: $h;
    }
    .cortsAndOrder{
        height: $h;
        background: snow;
        border-right: 1px solid #000;
    }
    .menu{
        height: $h;
        background: snow;
    }
}
    
</style>