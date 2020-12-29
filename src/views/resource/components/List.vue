<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" ref="form" :model="form" class="demo-form-inline">
          <el-form-item prop="name" label="资源名称">
            <el-input v-model="form.name" placeholder="资源名称"></el-input>
          </el-form-item>
          <el-form-item prop="url" label="资源路径">
            <el-input v-model="form.url" placeholder="资源路径"></el-input>
          </el-form-item>
          <el-form-item prop="categoryId" label="资源类型">
            <el-select v-model="form.categoryId" clearable placeholder="资源类型">
              <el-option
                v-for="item in resouceCategories"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="isLoading" @click="onReset">重置</el-button>
            <el-button type="primary" :disabled="isLoading" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="resources"
        v-loading="isLoading"
        style="width: 100%;margin-bottom: 20px"
      >
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
        :current-page.sync="form.current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="form.size"
        :disabled="isLoading"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'
import { getResourceCategoryies } from '@/services/resource-category'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'ResourceList',
  data () {
    return {
      isLoading: true,
      resources: [],
      form: {
        name: '',
        url: '',
        categoryId: '',
        current: 1,
        size: 10
      },
      total: 0,
      resouceCategories: [] // 资源分类列表
    }
  },
  created () {
    this.loadResources()
    this.loadResourceCategories()
  },
  methods: {
    async loadResourceCategories () {
      const { data } = await getResourceCategoryies()
      this.resouceCategories = data.data
    },
    async loadResources () {
      try {
        this.isLoading = true
        const { data } = await getResourcePages(this.form)
        this.resources = data.data.records
        this.total = data.data.total
      } catch (err) {
        console.log(err)
        this.$message(err)
      } finally {
        this.isLoading = false
      }
    },
    handleEdit (item: any) {
      console.log(item)
    },
    handleDelete (item: any) {
      console.log(item)
    },
    handleSizeChange (val: number) {
      this.form.size = val
      this.form.current = 1
      this.loadResources()
    },
    handleCurrentChange (val: number) {
      this.form.current = val
      this.loadResources()
    },
    onSubmit () {
      this.form.current = 1
      this.loadResources()
    },
    onReset () {
      (this.$refs.form as Form).resetFields()
      this.form.current = 1
      this.loadResources()
    }
  }
})
</script>

<style lang="scss" scoped></style>
