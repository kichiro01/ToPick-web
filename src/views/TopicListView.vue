<template>
  <div v-bind:style="backgroundImgStyle">
    <HeaderComponent :headerProps="headerProps"></HeaderComponent>
    <div class="appWrapper">
      <div v-if="showDescription" class="categoryDiscriptiionTopicList">
        {{ description1 }}<br>
        {{ description2 }}
      </div>
      <div @click="toShuffleView()"
      class="shuffleButton">
        <div>
          <div class="shuffleText">
            話題をシャッフル
          </div>
          <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
            <title>Icons 56/shuffle_outline_56</title>
            <desc>Created with Sketch.</desc>
            <g id="Icons-56/shuffle_outline_56" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="shuffle_outline_56">
                    <polygon points="0 0 56 0 56 56 0 56"></polygon>
                    <path d="M42.816659,13.4378888 L48.3618863,18.9679543 C48.9496101,19.5540711 48.9496101,20.5060599 48.3618863,21.0921767 L42.816659,26.6222422 C42.2300712,27.2072261 41.2803246,27.205926 40.6953407,26.6193382 C40.1103567,26.0327503 40.1116569,25.0830038 40.6982447,24.4980198 L43.704,21.5 L35.6,21.5 C32.9435586,21.5 30.8449817,23.3859377 26.6652343,28.9994761 C30.8452301,34.6142856 32.9437159,36.5 35.6,36.5 L35.6,36.5 L43.644,36.5 L40.6982447,33.5621112 C40.1116569,32.9771272 40.1103567,32.0273806 40.6953407,31.4407928 C41.2803246,30.854205 42.2300712,30.8529048 42.816659,31.4378888 L48.3618863,36.9679543 C48.9496101,37.5540711 48.9496101,38.5060599 48.3618863,39.0921767 L42.816659,44.6222422 C42.2300712,45.2072261 41.2803246,45.205926 40.6953407,44.6193382 C40.1103567,44.0327503 40.1116569,43.0830038 40.6982447,42.4980198 L43.704,39.5 L35.6,39.5 C31.726825,39.5 29.2800573,37.4525601 24.8005692,31.5159323 C20.3199427,37.4525601 17.873175,39.5 14,39.5 L8,39.5 C7.17157288,39.5 6.5,38.8284271 6.5,38 C6.5,37.1715729 7.17157288,36.5 8,36.5 L14,36.5 C16.6562841,36.5 18.7547699,34.6142856 22.9340235,29.0015207 C18.7550183,23.3859377 16.6564414,21.5 14,21.5 L14,21.5 L8,21.5 C7.17157288,21.5 6.5,20.8284271 6.5,20 C6.5,19.1715729 7.17157288,18.5 8,18.5 L8,18.5 L14,18.5 C17.873175,18.5 20.3199427,20.5474399 24.7994308,26.4840677 C29.2800573,20.5474399 31.726825,18.5 35.6,18.5 L43.644,18.5 L40.6982447,15.5621112 C40.1116569,14.9771272 40.1103567,14.0273806 40.6953407,13.4407928 C41.2803246,12.854205 42.2300712,12.8529048 42.816659,13.4378888 Z" id="↳-Icon-Color" fill="white" fill-rule="nonzero"></path>
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="topicList">
        <ul>
          <li v-for="topic in topicList" :key="topic[0]">
            <div>
              {{ topic[0] }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!buttonHidden" @click="toShuffleView()"
    class="hiddenButton">
      <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
        <title>Icons 56/shuffle_outline_56</title>
        <desc>Created with Sketch.</desc>
        <g id="Icons-56/shuffle_outline_56" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="shuffle_outline_56">
            <polygon points="0 0 56 0 56 56 0 56"></polygon>
            <path d="M42.816659,13.4378888 L48.3618863,18.9679543 C48.9496101,19.5540711 48.9496101,20.5060599 48.3618863,21.0921767 L42.816659,26.6222422 C42.2300712,27.2072261 41.2803246,27.205926 40.6953407,26.6193382 C40.1103567,26.0327503 40.1116569,25.0830038 40.6982447,24.4980198 L43.704,21.5 L35.6,21.5 C32.9435586,21.5 30.8449817,23.3859377 26.6652343,28.9994761 C30.8452301,34.6142856 32.9437159,36.5 35.6,36.5 L35.6,36.5 L43.644,36.5 L40.6982447,33.5621112 C40.1116569,32.9771272 40.1103567,32.0273806 40.6953407,31.4407928 C41.2803246,30.854205 42.2300712,30.8529048 42.816659,31.4378888 L48.3618863,36.9679543 C48.9496101,37.5540711 48.9496101,38.5060599 48.3618863,39.0921767 L42.816659,44.6222422 C42.2300712,45.2072261 41.2803246,45.205926 40.6953407,44.6193382 C40.1103567,44.0327503 40.1116569,43.0830038 40.6982447,42.4980198 L43.704,39.5 L35.6,39.5 C31.726825,39.5 29.2800573,37.4525601 24.8005692,31.5159323 C20.3199427,37.4525601 17.873175,39.5 14,39.5 L8,39.5 C7.17157288,39.5 6.5,38.8284271 6.5,38 C6.5,37.1715729 7.17157288,36.5 8,36.5 L14,36.5 C16.6562841,36.5 18.7547699,34.6142856 22.9340235,29.0015207 C18.7550183,23.3859377 16.6564414,21.5 14,21.5 L14,21.5 L8,21.5 C7.17157288,21.5 6.5,20.8284271 6.5,20 C6.5,19.1715729 7.17157288,18.5 8,18.5 L8,18.5 L14,18.5 C17.873175,18.5 20.3199427,20.5474399 24.7994308,26.4840677 C29.2800573,20.5474399 31.726825,18.5 35.6,18.5 L43.644,18.5 L40.6982447,15.5621112 C40.1116569,14.9771272 40.1103567,14.0273806 40.6953407,13.4407928 C41.2803246,12.854205 42.2300712,12.8529048 42.816659,13.4378888 Z" id="↳-Icon-Color" fill="white" fill-rule="nonzero"></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style>
.topicList {
}

.topicList ul {
  text-align: center;
}

.topicList li {
  height: 60px;
  width: calc(100% - 8px);
  margin: auto;
}

li > div {
  height: 50px;
  width: 100%;
  background-color:rgba(255,255,255,0.8);
  border-radius : 6px;
  margin: auto;
  line-height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

li > div:hover {
 white-space: normal;
 width: auto;
 overflow: visible;
 text-overflow: clip;
 height: auto;
 background-color: white;
 position: absolute;
 z-index: 10000;
 width: calc(100% - 8px);
 max-width: calc(var(--appMaxWidth) - 8px)
}

.shuffleButton {
  border-radius: 6px;
  border: solid white;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  height: 40px;
  text-align: center;
}

.shuffleButton > div {
  display: inline-block;
  text-align: left;
}

.shuffleText {
  width: auto;
  height: 40px;
  line-height: 40px;
  color: white;
  float: left;
  font-weight: bold;
}

.shuffleButton svg {
  fill: white;
  width: auto;
  padding-top: 2.5px;
  height: 35px;
  float: left;
  margin-left: 5px;
}

.hiddenButton svg {
  fill: white;
  width: 30px;
  height: 60px;
  line-height: 60px;
}

.categoryDiscriptiionTopicList {
    padding-top: 30px;
    text-align: center;
    color: white;
}

.hiddenButton {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--topick-navy);
  height: 60px;
  width: 60px;
  border-radius: 100%;
  text-align: center;
}
</style>

<script>
import HeaderComponent from '../components/HeaderComponent'
import categories from '../assets/topics/category/categories.json'
import cTopics from '../assets/topics/category/c-topics.json'
import scenes from '../assets/topics/scene/scenes.json'
import sTopics from '../assets/topics/scene/s-topics.json'
import recommendations from '../assets/topics/recommend/recommend.json'
import rTopics from '../assets/topics/recommend/r-topics.json'

export default {
  name: 'topicListView',
  components: {
    HeaderComponent
  },
  data () {
    return {
      headerProps: {
        isImageTitle: false,
        title: '',
        propertyName: 'topicListHeader'
      },
      backgroundImgStyle: {
        backgroundImage: '',
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100%',
        width: '100%',
        height: '100%'
      },
      showDescription: false,
      description1: '',
      description2: '',
      topicList: [],
      buttonHidden: true
    }
  },
  created () {
    this.roadTopics()
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    roadTopics () {
      const selection = this.$route.params.selectionId
      const categoryId = this.$route.params.categoryId
      if (selection === '0') {
        // カテゴリから遷移
        const category = categories.categories[categoryId]
        this.headerProps.title = category.category_name[0]
        const snippet = category.img_url_snippet
        const imgUrl = '/ToPick-web/images/' + snippet + '/' + snippet + '_background.png'
        this.backgroundImgStyle.backgroundImage = "url('" + imgUrl + "')"
        this.topicList = cTopics.topics[categoryId]
        this.showDescription = true
        this.description1 = category.description1[0]
        this.description2 = category.description2[0]
      } else if (selection === '1') {
        // シーンから遷移
        const scene = scenes.scenes[categoryId]
        this.headerProps.title = scene.category_name[0]
        const snippet = scene.img_url_snippet
        const imgUrl = '/ToPick-web/images/' + snippet + '/' + snippet + '_background.png'
        this.backgroundImgStyle.backgroundImage = "url('" + imgUrl + "')"
        this.topicList = sTopics.topics[categoryId]
        this.showDescription = true
        this.description1 = scene.description1[0]
        this.description2 = scene.description2[0]
      } else if (selection === '2') {
        // ホームから遷移（オススメ話題）
        const recommendation = recommendations.recommendations[categoryId]
        this.headerProps.title = recommendation.category_name[0]
        const snippet = recommendation.img_url_snippet
        const imgUrl = '/ToPick-web/images/' + snippet + '/' + snippet + '_background.png'
        this.backgroundImgStyle.backgroundImage = "url('" + imgUrl + "')"
        this.topicList = rTopics.topics[categoryId]
        this.showDescription = false
      }
    },
    toShuffleView () {
      const selection = this.$route.params.selectionId
      const categoryId = this.$route.params.categoryId
      this.$router.push('/category/' + selection + '/topicList/' + categoryId + '/shuffle')
    },
    onScroll () {
      let offset = 175
      if (this.$route.params.selectionId === '2') {
        offset = 90
      }
      if (window.pageYOffset > offset) {
        this.buttonHidden = false
      } else {
        this.buttonHidden = true
      }
    }
  }
}
</script>
