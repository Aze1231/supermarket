<template>
    <tab-bar  activeColor="skyblue">
      <tab-bar-item path="home" activeColor="skyblue">
        <img  slot="item-icon" src="../../../assets/img/tabbar/home.png">
        <img  slot="item-icon-active" src="../../../assets/img/tabbar/homedown.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
     <tab-bar-item path="category" activeColor="skyblue">
        <img  slot="item-icon" src="../../../assets/img/tabbar/class.png">
        <img  slot="item-icon-active" src="../../../assets/img/tabbar/classdown.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>    
      <tab-bar-item path="cart"     activeColor="skyblue">
        <img  slot="item-icon" src="../../../assets/img/tabbar/shopcar.png">
        <img  slot="item-icon-active" src="../../../assets/img/tabbar/shopcardown.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>     
      <tab-bar-item path="profile"  activeColor="skyblue">
        <img  slot="item-icon" src="../../../assets/img/tabbar/me.png">
        <img  slot="item-icon-active" src="../../../assets/img/tabbar/medown.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
    /* 
*/

 


    import TabBar from  '../../../components/common/tabbar/TabBar'
    import TabBarItem from '../../../components/common/tabbar/TabBarItem'
    export default {
        name:'MainTabBar',
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>