<template>
    <HeaderComponent :headerProps="headerProps"></HeaderComponent>
    <div class="appWrapper">
        <div class="categoryTitle">
            {{ categoryList[spotNum].category_name[0] }}
        </div>
        <div class="categoryDiscriptiion">
            {{ categoryList[spotNum].description1[0] }}<br>
            {{ categoryList[spotNum].description2[0] }}
        </div>
        <div>
            <ul ref="scrollable" class="horizontal-list">
                <li v-for="category in categoryList" :key="category.category_id"
                    class="item">
                    <img v-bind:src="bgimgs[category.category_id]"
                    @click="toTopics(category.category_id)">
                </li>
            </ul>
        </div>
</div>
</template>

<style>
.navyColor {
    color: var(--topick-navy);
}

ul.horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
}
li.item {
    display: inline-block;
    width: 48%;
    height: 400px;
    margin: 0;
    font-size: 48px;
    scroll-snap-align: center;
}

li.item img {
  margin: 0;
  width: 100%;
  height: auto;
}

li:first-child.item {
    margin-left: 26%;
}

li:last-child.item {
    margin-right: 26%;
}

.categoryTitle {
    margin-top: 50px;
    padding-top: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

.categoryDiscriptiion {
    padding-top: 10px;
    text-align: center;
    color: gray;
}

.yellowHeader li.HeaderTitle {
    display: block;
    margin-left: 80px;
}
</style>

<script>
import HeaderComponent from '../components/HeaderComponent'
import categories from '../assets/topics/category/categories.json'
import scenes from '../assets/topics/scene/scenes.json'

export default {
  name: 'categoryView',
  components: {
    HeaderComponent
  },
  data () {
    return {
      headerProps: {
        isImageTitle: false,
        title: '',
        propertyName: 'categoryHeader'
      },
      categoryList: [],
      spotNum: 0,
      bgimgs: [],
      cbgimgs: [
        '/ToPick-web/images/c_general/c_general@2x.png',
        '/ToPick-web/images/c_love/c_love@2x.png',
        '/ToPick-web/images/c_life/c_life@2x.png',
        '/ToPick-web/images/c_school/c_school@2x.png',
        '/ToPick-web/images/c_friends/c_friends@2x.png',
        '/ToPick-web/images/c_serious/c_serious@2x.png'
      ],
      sbgimgs: [
        '/ToPick-web/images/s_nomikai/s_nomikai@2x.png',
        '/ToPick-web/images/s_gokon/s_gokon@2x.png',
        '/ToPick-web/images/s_date/s_date@2x.png',
        '/ToPick-web/images/s_bonenkai/s_bonenkai@2x.png'
      ]
    }
  },
  created () {
    this.roadCategories()
  },
  mounted () {
    this.$refs.scrollable.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    this.$refs.scrollable.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    roadCategories () {
      if (this.$route.params.selectionId === '0') {
        this.headerProps.title = 'カテゴリー'
        this.bgimgs = this.cbgimgs
        this.categoryList = categories.categories
      } else {
        this.headerProps.title = 'シーン'
        this.bgimgs = this.sbgimgs
        this.categoryList = scenes.scenes
      }
    },
    onScroll () {
      let windowWidth = 468
      if (window.innerWidth < 468) {
        windowWidth = window.innerWidth
      }
      const pageWidth = windowWidth * 0.48 + (0 * 2)
      const currentPage = Math.floor((this.$refs.scrollable.scrollLeft + pageWidth / 2) / pageWidth)
      if (currentPage >= 0 && currentPage <= 5) {
        this.spotNum = currentPage
      }
    },
    toTopics (id) {
      this.$router.push('/category/' + this.$route.params.selectionId + '/topicList/' + id)
    }
  }
}
</script>
