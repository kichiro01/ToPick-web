<template>
    <div class="yellowBackground">
    <HeaderComponent :headerProps="headerProps"></HeaderComponent>
    <div class="appWrapper">
        <div class="topicArea">
            <img src='/ToPick-web/images/shuffle/slotmachine.png' alt='slotmachine' class="slotmachine">
            <div class="pickedTopic">
                {{ pickedTopic[0] }}
            </div>
        </div>
        <div class="buttonBox" @click="mngShuffle()">
          <img v-bind:src="imgUrl" class="mngShuffleButton">
        </div>
    </div>
    </div>
</template>

<style>
.yellowBackground {
    height: 100vh;
    background-color: var(--topick-yellow);
    text-align: center;
}

.topicArea {
    width: 90%;
    height: auto;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    text-align: center;
}

.slotmachine {
    width: 100%;
    height: auto;
}

.pickedTopic {
    position: absolute;
    top: 0;
    left: 0;
    width: 72%;
    margin-top: 15%;
    margin-left: 8%;
}

.mngShuffleButton{
    height: 30px;
    width: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    vertical-align: middle;
    outline: none;
}

.buttonBox {
    width: 70%;
    height: auto;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: solid black thin;
    border-radius: 6px;
    box-shadow: 2px 2px 4px gray;
}

.buttonBox:active {
    background-color:rgba(0,0,0,0.3);
}
</style>

<script>
import HeaderComponent from '../components/HeaderComponent'
import cTopics from '../assets/topics/category/c-topics.json'
import sTopics from '../assets/topics/scene/s-topics.json'
import rTopics from '../assets/topics/recommend/r-topics.json'

let timer
let topicIndex
let remainList

export default {
  name: 'shuffleView',
  components: {
    HeaderComponent
  },
  data () {
    return {
      headerProps: {
        isImageTitle: false,
        title: 'シャッフル',
        propertyName: 'shuffleHeader'
      },
      isStop: true,
      imgUrl: '/ToPick-web/images/shuffle/button_stop.png',
      topicList: [],
      pickedTopic: ''
    }
  },
  created () {
    this.roadTopics()
    this.mngShuffle()
  },
  beforeUnmount () {
    clearInterval(timer)
  },
  methods: {
    roadTopics () {
      const selection = this.$route.params.selectionId
      const categoryId = this.$route.params.categoryId
      if (selection === '0') {
        // カテゴリから遷移
        this.topicList = cTopics.topics[categoryId]
        remainList = Array.from(this.topicList)
      } else if (selection === '1') {
        // シーンから遷移
        this.topicList = sTopics.topics[categoryId]
        remainList = Array.from(this.topicList)
      } else if (selection === '2') {
        // ホームから遷移（オススメ話題）
        this.topicList = rTopics.topics[categoryId]
        remainList = Array.from(this.topicList)
      }
    },
    mngShuffle () {
      if (this.isStop) {
        // シャッフルする
        if (remainList.length <= 0) {
          alert('最後のトピックです。')
        } else if (remainList.length === 1) {
          this.shuffle()
          remainList.splice(topicIndex, 1)
        } else {
          this.imgUrl = '/ToPick-web/images/shuffle/button_stop.png'
          timer = setInterval(this.shuffle, 25)
          this.isStop = false
        }
      } else {
        // ストップする
        this.imgUrl = '/ToPick-web/images/shuffle/button_shuffle.png'
        clearInterval(timer)
        if (remainList.length > 0) {
          remainList.splice(topicIndex, 1)
        }
        this.isStop = true
      }
    },
    shuffle () {
      if (remainList.length <= 0) {
        this.$router.back()
      } else {
        topicIndex = Math.floor(Math.random() * remainList.length)
        this.pickedTopic = remainList[topicIndex]
      }
    }
  }
}
</script>
