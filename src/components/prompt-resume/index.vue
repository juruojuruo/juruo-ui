<template>
  <aside  v-show="value">
    <div class="prompt-assigner background-red" v-if="showAssigner" >
      <div class="content-assigner" >
        <div>该手机号码已有对应人才档案：<span class="span" @click="jumpResumeCheck">{{ name }}</span></div>
        <div>当前负责人为<span class="span-assigner">{{ assignerName }}</span>。如有疑问，请联系该同事。</div>
      </div>
      <div class="confirm-btn" @click="jumpResumeCheck('assigner')">联系Ta</div>
    </div>

    <div class="prompt-bar background-yellow" v-else-if="showAddAssigner">
      <div class="content">
        <div>该人才已存在于人才库，是否加入我的候选人?</div>
      </div>
      <div class="confirm-btn" @click="jumpResumeCheck('addAssigner')">好的</div>
    </div>

    <div class="prompt-bar background-yellow" v-else>
      <div class="content">
        <div><span class="span" @click="jumpResumeCheck">{{ name }}</span>该候选人已在你名下</div>
      </div>
      <div class="confirm-btn" @click="confirm">知道了</div>
    </div>
  </aside>


</template>

<script>
export default {
  name: "prompt-resume",
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    assignerName: {
      type: String,
      default: ''
    },
    showAssigner: {
      type: Boolean,
      default: false
    },
    showAddAssigner: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    confirm() {
      this.$emit('input', false)
    },
    jumpResumeCheck(type) {
      if (type === 'assigner') {
        this.$emit('jumpResumeCheck', 'assigner')
      } else if (type === 'addAssigner') {
        this.$emit('jumpResumeCheck', 'addAssigner')
      } else {
        this.$emit('jumpResumeCheck')
      }
    },
  }
}
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.prompt-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  _height: 50px;
  min-height: 50px;
  margin-bottom: 6px;
  padding: 0 12px 0 15px;
}
.prompt-assigner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  _height: 50px;
  min-height: 50px;
  margin-bottom: 6px;
  padding: 0 12px 0 15px;
}

.content-assigner {
  font-size: 13px;
  width: 85%;
  color: #fff;

  .span {
    text-decoration: underline;
    text-decoration-color: #ffcf4a;
    color: #ffcf4a;
  }
  .span-assigner {
    text-decoration-color: #ffcf4a;
    color: #ffcf4a;
  }
}

.content {
  font-size: 13px;
  width: 85%;
  color: #333333;

  .span {
    text-decoration: underline;
    text-decoration-color: #333333;
    color: #333333;
  }
}

.confirm-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 22px;
  margin-right: 10px;
  font-size: 13px;
  background: #FFFFFF;
  border-radius: 4px;
  color: #333333;
}

.background-red {
  background: #EE525F;
}

.background-yellow {
  background: #FFCF4A;
}


</style>
