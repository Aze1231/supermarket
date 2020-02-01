<template>
    <div  class="tab-bar-item" @click="itemClick">
         <div v-if="!isActive"><slot  name="item-icon"></slot> </div>
          <div v-else><slot  name="item-icon-active"></slot> </div>
          <div :style="ActiveFontStyle"><slot name="item-text"></slot> </div>
    </div>
</template>

<script>
    export default {            //:class="{active:isActive}"
        name:"TabBarItem",
        data() {
            return {
                
            }
        },
        props:{
            path:String,
            activeColor:{
                type:String,
                default:"red",
            }
        },
        computed:{
            isActive()
            {
                return this.$route.path.includes(this.path)
            },
            ActiveFontStyle(){
                return  this.isActive ? {color:this.activeColor} : {}
            },
            ActiveBgStyle(){
                return  this.isActive ? {backgroundColor:this.activeColor} : {}
            }    
        },
        methods: {
            itemClick(){
                
                return this.$route.path != this.path ? this.$router.push(this.path): this.$router.push()
            }
        },
    }
</script>

<style  scoped>
     .tab-bar-item{
      flex:1;
      text-align: center;
      font-size: 14px;
      margin-top:2px;
    }
    .tab-bar-item img{ 
     
      width:20px;
      height:20px;
    }
    
</style>