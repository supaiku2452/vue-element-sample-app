<template>
    <div>
        <el-header>
            <el-menu :default-active="activeIndex" mode="horizontal">
                <el-menu-item index="1">Menu Item 1</el-menu-item>
                <el-menu-item index="1">Menu Item 2</el-menu-item>
                <el-menu-item index="1">Menu Item 3</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <div>
                <h3>Form Component.</h3>
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="対局日">
                        <el-date-picker
                            type="date"
                            v-model="date"
                            placeholder="日付を選択"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="ルール">
                        <el-select v-model="rule">
                            <el-option label="Select Item 1" value="item1"></el-option>
                            <el-option label="Select Item 2" value="item2"></el-option>
                            <el-option label="Select Item 3" value="item3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="プレイヤー">
                        <el-row>
                            <el-col :span="6" v-for="index in 4">
                                <el-card class="card-box">
                                    <div slot="header" v-on:click="selectPlayer(index)">
                                        <span>Game Player {{ index }}</span>
                                    </div>
                                    <div>Score : XXXXX</div>
                                    <div>Rank : YYYYY</div>
                                    <div>Avarage : ZZZZZ</div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-button type="primary" icon="el-icon-success">登録</el-button>
                </el-form>
            </div>

            <div>
                <h3>Notice Component.</h3>
                <el-alert
                        title="Notice Alert 1"
                        type="success"
                        description="Notice Detail Alert 1 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        :closable="false"
                        class="alert"
                        show-icon
                ></el-alert>
                <el-alert
                        title="Notice Alert 1"
                        type="info"
                        description="Notice Detail Alert 2 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        :closable="false"
                        class="alert"
                        show-icon
                ></el-alert>
            </div>


        </el-main>
    </div>
</template>

<script>
    export default {
        name: "main.vue",
        data() {
            return {
                "date": "",
                "form": null,
                "rule": "",
            }
        },
        methods: {
            selectPlayer(number) {
                alert(number)
            }
        }
    }
</script>

<style scoped>
    .card-box {
        width: 200px;
    }
    h3 {
        border-bottom: darkgrey solid 1px;
        padding-left: 10px;
    }
    .alert {
        margin-top: 10px;
    }
</style>