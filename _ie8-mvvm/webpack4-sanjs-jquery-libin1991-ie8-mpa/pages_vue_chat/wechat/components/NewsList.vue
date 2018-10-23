<template>
  <div>
    <scroller lock-x scrollbar-y height="250px" :bounce=false :scrollbarY="false" ref="scroller">
      <div class="news-wrap-list">
        <cell v-for="x in Objlist" :key="x.id" :title="x.title" :link="{path: '/settings'}">
          <div>
            <span class="pubdate">{{x.pub_date}}</span>
          </div>
        </cell>
      </div>
    </scroller>
  </div>
</template>

<style>
  .news-wrap-list {
    height: 2800px;
    overflow: hidden;
  }

  .pubdate {
    font-size: 5px;
  }
</style>

<script>
  import {Group, Cell, Scroller, Divider} from 'vux'

  export default {
    name: 'NewsList',
    data() {
      return {
        Objlist: [{
          id: 1,
          title: 'hello',
          pub_date: '1996-08-23'
        }, {
          id: 2,
          title: 'ho',
          pub_date: '1996-08-23'
        }]
      }
    },

    components: {
      Scroller,
      Cell,
      Group,
      Divider
    },

    created() {
    }
  }
</script>
