<template>
  <div class="login-container">
    <div style="float: left; margin: 100px auto; margin-left: 10%">
      <img
        src="https://graph.baidu.com/thumb/v4/4133807849,2013534059.jpg"
        class="image"
      />
    </div>
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          @click="load()"
          :loading="en"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      en: false,
      ruleForm2: {
        username: "shuhang",
        password: "shuhang",
      },
      rules2: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: false,
    };
  },
  methods: {
    load(event) {
      this.en = true;
      clearTimeout(this.timer); //清除延迟执行
      this.timer = setTimeout(() => {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            if (
              this.ruleForm2.username === "shuhang" &&
              this.ruleForm2.password === "shuhang"
            ) {
              this.logining = false;
              sessionStorage.setItem("user", this.ruleForm2.username);
              this.$router.push({ path: "/admin" });
            } else if (
              this.ruleForm2.username === "teacher" &&
              this.ruleForm2.password === "teacher"
            ) {
              this.logining = false;
              sessionStorage.setItem("user", this.ruleForm2.username);
              this.$router.push({ path: "/teacher" });
            } else {
              this.logining = false;
              this.$alert("用户名或密码错误，请重新输入!", "警告", {
                confirmButtonText: "ok",
              });
            }
          } else {
            console.log("error submit!");
            return false;
          }
        });
        this.en = false;
      }, 2500);
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 100px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  float: left;
  margin-left: 15%;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
