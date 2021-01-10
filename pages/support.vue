<template>
    <div class="content-wrap support-outer-wrap">
        <el-row class="content-inner-wrap support-wrap">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-card class="faq-wrap">
                    <el-row>
                        <el-col :span="12">
                            <h1 class="faq-title">Support</h1>
                        </el-col>
                        <el-col :span="12">
                            <el-row type="flex" justify="end">
                                <div class="clear-all">
                                    <i class="el-icon-delete"><span class="clear-all-text">Clear all</span></i>
                                </div>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-form :model="supportForm" label-position="top">
                        <el-form-item label="">
                            <el-select v-model="supportForm.category" :placeholder="$t('pages.support.placeholders.category')" class="search-input">
                                <el-option :key="category.id" v-for="category in categories" :label="category.title" :value="category.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <client-only placeholder="Loading...">
                            <el-form-item required>
                                <el-row>
                                    <el-col>
                                        <wysiwyg v-model="supportForm.message" />
                                    </el-col>
                                </el-row>
                            </el-form-item>
                        </client-only>
                        <el-form-item label="">
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                                    <el-upload
                                        class="upload-demo"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
                                        multiple
                                        :limit="3"
                                        :on-exceed="handleExceed"
                                        :file-list="fileList">
                                        <el-button class="upload-btn" type="text">Click to upload</el-button>
                                        <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                                    </el-upload>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="">
                            <el-row type="flex" justify="end">
                                <el-button type="primary">Send message</el-button>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "support",
        data() {
            return {
                supportForm:{
                    message: '',
                    category:'',
                },
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],

                categories:[
                    {
                        id:1,
                        title:"I want to report fraud",
                    },
                    {
                        id:2,
                        title:"Help with a disputed trade",
                    },
                    {
                        id:3,
                        title:"Problems with a Bitcoin transaction",
                    },
                    {
                        id:4,
                        title:"My account is hacked",
                    },
                    {
                        id:5,
                        title: "I am a new user",
                    },
                    {
                        id:6,
                        title: "My account is on forced holiday",
                    },{
                        id:7,
                        title: "I have a problem with my advertisement(s)",
                    },
                    {
                        id:8,
                        title: "I have received abusive feedback",
                    },
                    {
                        id:9,
                        title: "Report a bug",
                    },
                    {
                        id:10,
                        title: "I can't log in to my account",
                    },
                    {
                        id:11,
                        title: "I am not receiving my account verification email",
                    },
                    {
                        id:12,
                        title: "I am not able to verify my phone number",
                    },
                    {
                        id:13,
                        title: "Other",
                    },

                ],
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
            }
        }
    }
</script>

<style lang="scss">
    .support-outer-wrap {
        height: 59.8vh !important;
    }
    .support-wrap {
        .el-select {
            width: 100%;
        }
        .clear-all {
            > * {
                color: $--color-text-secondary;
                cursor: pointer;
            }
        }
        .upload-btn {
            margin: 0;
            padding: 0;
        }
        .el-upload__tip {
            margin-top: 0;
        }
    }

</style>
