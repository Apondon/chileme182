<template lang="pug">
    div.stockManagement
        el-row
            el-col(:span='12')
                div.leftForm
                    el-form(ref="form",:model="form",label-width="120px")
                        el-form-item(label="商品名")
                            el-input(v-model="form.goodname")
                        el-form-item(label="商品单价")
                            el-input(v-model="form.price")   
                        el-form-item(label="商品库存数量")
                            el-input(v-model="form.num") 
                        el-form-item(label="商品描述")
                            el-input(v-model="form.desc")
                        el-form-item(label="推荐指数")
                            el-input(v-model="form.recommend")
                        el-form-item(label="是否是饮料类")
                            el-input(v-model="form.isDrink")   
                        el-form-item(label="是否是套餐")
                            el-input(v-model="form.isCombo")   
                        el-form-item(label="商品类型")
                            el-input(v-model="form.type") 
                        el-form-item(label="是否是推荐菜")
                            el-input(v-model="form.isRecommend")
                        el-form-item(label="商品销售数量")
                            el-input(v-model="form.sailNum") 
                        el-form-item(label="是否打折")
                            el-input(v-model="form.isOff")    
                        el-form-item(label="折扣幅度")
                            el-input(v-model="form.percent")    
                        el-form-item(label="主要材料")
                            el-input(v-model="form.material")
                        el-form-item(label="口味")
                            el-input(v-model="form.tast")                                 
                        el-form-item 
                            el-button 添加
                            el-button 重置  
            el-col(:span='12')
                div.rightTable
                    el-table(:data="tableData",border,style="width: 100%",max-height="800")
                        el-table-column(type="index",width="50",fixed)
                        el-table-column(prop="goodname",label="商品名",width="120")
                        el-table-column(prop="price",label="商品单价",width="60")
                        el-table-column(prop="num",label="商品库存数量",width="60")
                        el-table-column(prop="desc",label="商品描述")
                        el-table-column(prop="recommend",label="推荐指数")
                        el-table-column(prop="isDrink",label="是否是饮料类")
                        el-table-column(prop="isCombo",label="是否是套餐")
                        el-table-column(prop="type",label="商品类型")
                        el-table-column(prop="isRecommend",label="是否是推荐菜")
                        el-table-column(prop="sailNum",label="商品销售数量")
                        el-table-column(prop="isOff",label="是否打折")
                        el-table-column(prop="percent",label="折扣幅度")
                        el-table-column(prop="material",label="主要材料")
                        el-table-column(prop="tast",label="口味")
</template>
<script>
export default {
    data(){
        return{
            form:{
                goodname:'',
                price:'',
                num:'',
                desc:'',
                recommend:'',
                isDrink:'',
                isCombo:'',
                type:'',
                isRecommend:'',
                sailNum:'',
                isOff:'',
                percent:'',
                material:'',
                tast:'',
            },
            tableData:[
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
                {id:'11'},
            ]
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .stockManagement{
        height: 100%;
        background: lightcyan;
        .el-row{
            height: 100%;
        }
        .el-col{
            height: 100%;
        }
        .leftForm,.rightTable{
            height: 100%;  
        }
        .leftForm{
            background: lightskyblue;
        }
        .rightTable{
            background: yellow;
            .el-table{
                height: 100%;
            }
        }
    }
</style>