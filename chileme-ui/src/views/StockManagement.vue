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
                        el-form-item(label="推荐指数(3-5)")
                            el-input(v-model="form.recommend")
                        el-form-item(label="是否是饮料类") 
                            el-radio(v-model="form.isDrink", label="true") 是
                            el-radio(v-model="form.isDrink", label="false") 否
                        el-form-item(label="是否是套餐")
                            el-radio(v-model="form.isCombo", label="true") 是
                            el-radio(v-model="form.isCombo", label="false") 否 
                        el-form-item(label="商品类型")
                            el-radio(v-model="form.type", label="hot") 拿手菜
                            el-radio(v-model="form.type", label="cool") 下酒菜
                            el-radio(v-model="form.type", label="soup") 汤羹
                            el-radio(v-model="form.type", label="staple") 主食
                            el-radio(v-model="form.type", label="quick") 方便食品
                        el-form-item(label="是否是推荐菜")
                            el-radio(v-model="form.isRecommend", label="true") 是
                            el-radio(v-model="form.isRecommend", label="false") 否 
                        el-form-item(label="商品销售数量")
                            el-input(v-model="form.sailNum") 
                        el-form-item(label="是否打折")
                            el-radio(v-model="form.isOff", label="true") 是
                            el-radio(v-model="form.isOff", label="false") 否   
                        el-form-item(label="折扣幅度")
                            el-input(v-model="form.percent")    
                        el-form-item(label="主要材料")
                            el-checkbox-group(v-model="form.material")
                                el-checkbox(label="时蔬")
                                el-checkbox(label="鸡肉")
                                el-checkbox(label="猪肉")
                                el-checkbox(label="羊肉")
                        el-form-item(label="口味")
                            el-radio(v-model="form.tast", label="sweet") 甜
                            el-radio(v-model="form.tast", label="hot") 辣
                            el-radio(v-model="form.tast", label="light") 清淡                                
                        el-form-item 
                            el-button(@click='addHandle') 添加
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
                material:[],
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
        addHandle(){
            console.log(`
            goodname      商品名           ${this.form.goodname}
            price         商品单价         ${this.form.price}  
            num           商品库存数量     ${this.form.num}
            desc          商品描述         ${this.form.desc}
            recommend     推荐指数         ${this.form.recommend}
            isDrink       是否是饮料类     ${this.form.isDrink}
            isCombo       是否是套餐       ${this.form.isCombo}
            type          商品类型         ${this.form.type} 
            isRecommend   是否是推荐菜     ${this.form.isRecommend} 
            sailNum       商品销售数量     ${this.form.sailNum}
            isOff         是否打折         ${this.form.isOff}
            percent       折扣幅度         ${this.form.percent}
            material      主要材料         ${this.form.material}       
            tast          口味             ${this.form.tast}        
            `)
        }
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
            .el-form{
                width:60%;
                margin:auto;
            }
        }
        .rightTable{
            background: yellow;
            .el-table{
                height: 100%;
            }
        }
    }
</style>