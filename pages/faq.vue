<template>
    <div class="content-wrap faq-outer-wrap">
        <el-row class="content-inner-wrap faq-wrap">
            <el-col :xs="24" :sm="24" :md="24" :lg="{offset:4, span:16}" :xl="{offset:4, span:16}" class="inner-container">
                <el-card class="faq-wrap">
                    <h1 class="faq-title">FAQ</h1>
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="question.question" :key="question.id" :name="question.id" v-for="question in questions">
                            <span class="faq-answer">
                                {{question.answer}}
                            </span>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "faq",
        data:() => ({
            activeNames:[],
            questions:[
                {
                    id:1,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },
                {
                    id:2,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },
                {
                    id:3,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },
                {
                    id:4,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },
                {
                    id:5,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },
                {
                    id:6,
                    question:"Consistent with real life: in line with the process and logic of real life ?",
                    answer:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                },

            ]
        }),
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style lang="scss">
    .faq-outer-wrap {
        height: 59vh !important;
    }
    .faq-wrap {
        margin-top: 75px;
        .content-wrap {
            margin-top: 40px;
        }
        .faq-title {
            margin-bottom: 20px;
            color: $--color-secondary;
        }
        .el-collapse-item__header {
            color: $--color-secondary;
            font-weight: 800;
        }
        .faq-answer {
            line-height: 10px;
        }
    }
</style>
