<template>
    <div class="login">
        <div class="container wrap">
            <h1 class="title c-ffffff">NIDS</h1>
            <div class="form mt-40">
                <div class="form-tip">
                    <label for="username">User name</label>
                </div>
                <div class="form-ipt">
                    <input type="text" v-model="form.username" id="username">
                </div>
                <div class="form-tip mt-40">
                    <label for="password">Password</label>
                </div>
                <div class="form-ipt">
                    <input type="password" v-model="form.password" id="password">
                </div>
            </div>
            <div class="btn mt-40 c-ffffff" @click="Login">Sign in</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
let router = useRouter();
let User = useUserStore();
const form = reactive({
    username: '',
    password: '',
});
async function Login(){
    let res = await User.login(form);
    console.log(res);
    
    if(res.status){
        console.log(res.data);
        sessionStorage.setItem('token',res.data.token);
        router.push({
            path:"/"
        });
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("@/assets/imgs/bg.png");
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #464646;
    & .form {
        &>.form-ipt {
            &>input {
                font-size: 16px;
                padding: 15px 0;
                width: 420px;
                border-bottom: 1px solid #2e3945;
                color: #fff;
                background: transparent;
            }
        }

        &>.form-tip {
            font-size: 22px;
            color: #545a65;
        }
    }
}

.title {
    font-size: 50px;
    font-style: oblique;
}

.btn{
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    background: #409eff;
}
</style>