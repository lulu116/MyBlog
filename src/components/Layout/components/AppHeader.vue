<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger
      :is-Collapse="getSliderbar"
      :hamburgerIcon="getSliderbar ? 'zhankai_right' : 'zhankai_left'"
      @handleClickChangeHamburger="changeHamburger"
    />
    <bread-crumb/>
    <el-dropdown class="user-dropdown" @command="handleCommand">
      <span>
        <img src="@/assets/big.png">
        {{getUserName}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix" command="b">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tooltip class="item" effect="light" content="我的邮箱">
      <a href="javascript:void(0);" target="_blank" class="github-css" @click="handleToMyConcact">
        <svg-icon iconClass="email" class="github-svg"></svg-icon>
      </a>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="我的github">
      <a href="https://github.com/lulu116" target="_blank" class="github-css">
        <svg-icon iconClass="github" class="github-svg"></svg-icon>
      </a>
    </el-tooltip>
  </el-menu>
</template>

<script>
  import BreadCrumb from '@/components/BreadCrumb'
  import Hamburger from '@/components/Hamburger'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'AppHeader',
    components: {
      BreadCrumb,
      Hamburger
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters('app', ['getUserName', 'getSliderbar'])
    },
    methods: {
      ...mapActions('app', ['OpenSliderbar']),
      changeHamburger() {
        this.OpenSliderbar()
      },
      handleCommand(command) {
        if (command === 'b') {
          this.logout()
        }
      },
      logout() {
        alert('确认要退出吗？')
      },
      handleToMyConcact() {
        this.$confirm('默认打开网易邮箱客户端', '温馨提示：', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(({value}) => {
          // 点击确定
          window.open('Mailto:sliusting970@163.com', '_self')
        }).catch(() => {
          // 点击取消
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 60px;
    line-height: 60px;
    border-radius: 0px !important;

    .user-dropdown {
      float: right;
      margin-right: 15px;
      cursor: pointer;

      span {
        height: 100%;
        display: inline-block;

        img {
          vertical-align: middle;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-block;
        }
      }
    }

    .github-css {
      float: right;
      width: 50px;
      display: inline-block;
      height: 60px;
      margin-right: 10px;
      text-align: center;

      .github-svg {
        font-size: 30px;
        color: #999999ed;
      }
    }

    .github-css:hover .github-svg {
      color: #606266f5;
    }
  }
</style>
