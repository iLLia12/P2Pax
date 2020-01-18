<template>
    <el-card class="box-card profile-menu-wrap" :body-style="{ borderRadius:'0'}">
        <el-menu
            background-color="#ffffff"
            default-active="2"
            class="el-menu-vertical-demo profile-menu">
            <el-menu-item index="2">
                <i class="el-icon-s-custom"></i>
                <span>Account</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-files"></i>
                <span>My Wallets</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-notebook-1"></i>
                <span>My Contacts</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-circle-plus-outline"></i>
                <span>Invite Friends</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-d-arrow-left"></i>
                <span>Logout</span>
            </el-menu-item>
        </el-menu>
    </el-card>
</template>

<script>
    export default {
        name: "SideMenu",
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";
    .profile-menu {
        display: block;
    }
    .profile-menu-wrap {
        .el-menu {
            border-right: none;
        }
        .el-card__body {
            padding: 0 ;
        }
    }
</style>
