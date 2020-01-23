<template>
    <el-row class="content-wrap friends-index-wrap">
        <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="side-menu-wrap">
                    <SideMenu />
                </el-col>
                <el-col :xs="24" :sm="24" :md="{span:19, offset:1}" :lg="{span:19, offset:1}" :xl="{span:19, offset:1}">
                    <el-row class="wallets-inner-wrap">
                        <el-col>
                            <el-tabs type="border-card">
                                <el-tab-pane label="User">User</el-tab-pane>
                                <el-tab-pane label="Config">Config</el-tab-pane>
                                <el-tab-pane label="Role">Role</el-tab-pane>
                                <el-tab-pane label="Task">Task</el-tab-pane>
                            </el-tabs>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "friends"
    }
</script>

<style lang="scss">

    @import "assets/scss/variables";

    .friends-index-wrap {
        margin-top: 40px;
        .profile-title {
            margin-bottom: 30px;
            color: $--color-grey-light;
        }
        .form-filters {
            padding: 10px 40px 0 0;
        }
        .table-symbol {
            font-size: 10px;
            color: $--color-text-secondary;
        }
        .btn-wrap {
            display: block;
        }
        .big-buttons-wrap {
            display: none;
        }
        .btn-mob-wrap {
            margin-bottom: 10px;
            > button {
                width: 100%
            }
        }
    }
</style>
