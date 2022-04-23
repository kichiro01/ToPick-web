<template>
    <header :class="headerProps.propertyName">
        <img v-if="headerProps.isImageTitle" src="/ToPick-web/images/header-parts/header.png" alt="ヘッダーイメージ">
        <span v-if="!headerProps.isImageTitle">{{ headerProps.title }}</span>
    </header>
</template>

<style>
header {
  width: 100vw;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.homeHeader {
    position: fixed;
    top: 0;
    background-color: var(--topick-yellow);
}

.categoryHeader {
    position: fixed;
    top: 0;
    background-color: var(--topick-yellow);
    font-weight: bold;
    color: var(--topick-navy);
}

.topicListHeader {
    font-weight: bold;
    color: white;
}

.shuffleHeader {
    background-color: var(--topick-yellow);
    font-weight: bold;
    color: var(--topick-navy);
}

header > img {
    margin: 5px;
    height: 90%;
}
</style>

<script>
export default {
  name: 'headerComponent',
  props: ['headerProps']
}
</script>
