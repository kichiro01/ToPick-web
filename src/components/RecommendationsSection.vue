<template>
  <div class="title">
    オススメ話題集
  </div>
  <div class="card-group">
    <div v-for="recommendation in recommendList" :key="recommendation.category_id" class="card">
      <div class="card__imgframe">
        <img v-bind:src="bgimgs[recommendation.category_id]"
        @click="toTopicList(recommendation.category_id)">
      </div>
      <div class="card__textbox">
        <div class="card__overviewtext">
          {{ recommendation.category_name[0] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.title {
  font-size: 22px;
  font-family: sans-serif;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  text-align: left;
}
.card-group{
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card-group > :nth-child(2n){
  margin-left: 20px;
}

.card-group > :nth-child(n+3){
  margin-top: 20px;
}
.card{
  width: calc((100% - 20px) / 2);
  height: auto;
  border-radius: 8px;
  overflow: hidden;
}
.card__imgframe{
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.card__imgframe img {
  margin: 0;
}

.card__textbox{
  width: 100%;
  height: auto;
  padding: 0, 6, 0, 0;
  box-sizing: border-box;
}
.card__textbox > * + *{
  margin-top: 10px;
}

.card__overviewtext{
  font-size: 12px;
  line-height: 150%;
}
.card__imgframe img {
  width:100%;
  height:auto;
}
</style>

<script>
import recommendations from '../assets/topics/recommend/recommend.json'

export default {
  data () {
    return {
      recommendList: recommendations.recommendations,
      bgimgs: [
        '/images/r_timeKiller/r_timeKiller@2x.png',
        '/images/r_firstMeet/r_firstMeet@2x.png',
        '/images/r_igai/r_igai@2x.png',
        '/images/r_2options/r_2options@2x.png',
        '/images/r_ES/r_ES@2x.png'
      ]
    }
  },
  methods: {
    toTopicList (id) {
      this.$router.push('/category/2/topicList/' + id)
    }
  }
}
</script>
