<template>
  <div class="wrapper">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-checkbox v-model="taskDoc.status" @change="statusChange">
          {{taskDoc.task}}
        </el-checkbox>
      </el-col>
      <el-col :span="8">
        <div class="tool-bar">
          <el-button size="mini" icon="el-icon-edit" @click="taskEdit"></el-button>
          <el-button size="mini" icon="el-icon-delete" @click="taskDelete"></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TodoTask",
    components: {},
    props: {
      taskDoc: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        taskCompleted: false,
        editMode: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      statusChange: function (status) {
        this.$emit("on-change", this.$props.taskDoc);
      },
      taskEdit: function () {
        this.$emit("on-edit", this.$props.taskDoc);
      },
      taskDelete: function () {
        this.$emit("on-delete", this.$props.taskDoc);
      }
    },
    created() {
    },
    mounted() {
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    line-height: 3rem;
  }
</style>
