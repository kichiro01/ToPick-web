<template>
    <HeaderComponent :headerProps="headerProps"></HeaderComponent>
    <div class=appWrapper>
      <SelectSection/>
      <RecommendationsSection/>
    </div>
</template>

<style>
.appWrapper {
  width: 100%;
  max-width: var(--appMaxWidth);
  margin: 0 auto;
}
</style>

<script>
import HeaderComponent from '../components/HeaderComponent'
import SelectSection from '../components/SelectSection.vue'
import RecommendationsSection from '../components/RecommendationsSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    SelectSection,
    RecommendationsSection
  },
  data () {
    return {
      headerProps: {
        isImageTitle: true,
        title: '',
        propertyName: 'homeHeader'
      }
    }
  }
}
</script>
