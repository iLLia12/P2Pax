<template>
    <el-card class="box-card profile-menu-wrap" :body-style="{ borderRadius:'0'}">
        <el-menu
            background-color="#ffffff"
            class="el-menu-vertical-demo profile-menu">
            <el-menu-item index="1" @click="changeRoute('/profile')">
                <i class="el-icon-s-custom"></i>
                <span>Account</span>
            </el-menu-item>
            <el-menu-item  index="2" @click="changeRoute('/profile/wallets')">
                <i class="el-icon-files"></i>
                <span>Wallets</span>
            </el-menu-item>
            <el-menu-item index="3" @click="changeRoute('/profile/contacts')">
                <i class="el-icon-notebook-1"></i>
                <span>My Contacts</span>
            </el-menu-item>
            <el-menu-item index="4" @click="changeRoute('/profile/friends')">
                <i class="el-icon-circle-plus-outline"></i>
                <span>Invite Friends</span>
            </el-menu-item>
            <el-menu-item index="5" @click="changeRoute('/profile/logout')">
                <i class="el-icon-d-arrow-left"></i>
                <span>Logout</span>
            </el-menu-item>
        </el-menu>
    </el-card>
</template>

<script>
    const routes = {
        "/profile": "1",
        "/profile/wallets": "2",
    };
    export default {
        name: "SideMenu",
        data:() => ({
            activeLink:''
        }),
        methods:{
            changeRoute(val) {
                this.$router.push({path:val});
                this.activeLink = routes[val]
            }
        },
    }
</script>

<style lang="scss">
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
        .el-menu-item {
            width: 100%;
        }
        a {
            text-decoration: none;
            width: 100%;
        }
    }
</style>
