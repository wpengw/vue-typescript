<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.name" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.url" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="resources"
        style="width: 100%;margin-bottom: 20px">
        <el-table-column
          type="index"
          label="编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="资源名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="url"
          label="资源路径"
          width="180">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="180">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          label="添加时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'

export default Vue.extend({
  name: 'ResourceList',
  data () {
    return {
      resources: [],
      formInline: {
        name: '',
        url: ''
      },
      currentPage: 5
    }
  },
  created () {
    this.loadResources()
  },
  methods: {
    async loadResources () {
      try {
        const { data } = await getResourcePages(this.formInline)
        console.log(data)
        this.resources = data.data.records
      } catch (err) {
        console.log(err)
        this.$message(err)
      }
    },
    handleEdit (item: any) {
      console.log(item)
    },
    handleDelete (item: any) {
      console.log(item)
    },
    handleSizeChange (val: number) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val: number) {
      console.log(`当前页: ${val}`)
    },
    onSubmit () {
      console.log('submit!')
    }
  }
})
</script>

<style lang="scss" scoped></style>
