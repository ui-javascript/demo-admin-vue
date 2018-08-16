<template>
  <div class="city">
    <table v-if="posts && posts.length">
      <tr v-for="post of posts">
        <td><strong>{{ post.id }}</strong></td>
        <td>{{ post.cityName }}</td>
        <td>{{ post.description }}</td>
      </tr>
    </table>

    <!-- <ul v-else-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'city',
  data () {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    // this.getById(3)
    // this.postNew(0, '台北市', '宝岛')
    this.getAll()
    // this.putById(2, 0, '北京', '首都心脏')
    // this.deleteById(97)
  },

  methods: {
    // 获取所有城市
    getAll () {
      let url = 'http://m.qmen.space:8080/api/city'

      axios.get(url).then(response => {
        this.posts = response.data
        // console.log(JSON.stringify(response.data));
      }).catch(e => {
        this.errors.push(e)
      })
    },

    // 根据id获取
    getById (id) {
      let url = 'http://m.qmen.space:8080/api/city/' + id

      axios.get(url).then((response) => {
        // console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },

    // 根据id删除
    deleteById (id) {
      let url = 'http://m.qmen.space:8080/api/city/' + id

      axios.delete(url).then((response) => {
        // console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },

    // 新增
    postNew (provinceId, cityName, description) {
      let url = 'http://m.qmen.space:8080/api/city'

      if (provinceId === null) {
        provinceId = 0
      }

      axios.post(url, {'id': null, 'provinceId': provinceId, 'cityName': cityName, 'description': description})
      .then(response => {

      }).catch(e => {
        this.errors.push(e)
      })
    },

    // 更具id新增
    putById (id, provinceId, cityName, description) {
      let url = 'http://m.qmen.space:8080/api/city'
      axios.put(url, {'id': id, 'provinceId': provinceId, 'cityName': cityName, 'description': description})
      .then(response => {

      }).catch(e => {
        this.errors.push(e)
      })
    }

  }
}
</script>

<!-- <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> -->
<style>
table {
    border-collapse: collapse;
}
td {
  padding:4px;
  border:1px solid;
}
ul {
  list-style-type: none;
}
</style>
