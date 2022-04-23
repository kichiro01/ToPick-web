 <template>
  <div class="table">
    <ul>
      <li class="title">話題を選ぶ</li>
      <li><router-link to="/category/0">カテゴリー</router-link></li>
      <li class="list-bottom"><router-link to="/category/1">シーン</router-link></li>
    </ul>
  </div>
</template>

<style>
.table {
  font-size: 16px;
  font-family: sans-serif;
  margin: 0;
  padding-top: 50Px;
  color: black;
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -webkit-text-size-adjust: 100%;
}

.table li {
  padding: 0;
}

.table li:not(.title) {
  content: '';
  display: list-item;
  margin-left: 10px;
  margin-right: 10px;
  border-top: 1px solid #C8C7CC;
}
@media(-webkit-min-device-pixel-ratio:2) {
  .table li:not(.title) {
    border-top: 0.99px solid #C8C7CC;
  }
}
@media(-webkit-min-device-pixel-ratio:3) {
  .table li:not(.title) {
    border-top: 0.49px solid #C8C7CC;
  }
}

.table li.list-bottom {
  border-bottom: 1px solid #C8C7CC;
}
@media(-webkit-min-device-pixel-ratio:2) {
  .table li.list-bottom {
    border-bottom: 0.99px solid #C8C7CC;
  }
}
@media(-webkit-min-device-pixel-ratio:3) {
  .table li.list-bottom {
    border-bottom: 0.49px solid #C8C7CC;
  }
}

.table li.title {
  font-size: 22px;
  font-family: sans-serif;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  text-align: left;
}

.table li > * {
  padding: 10px 0 10px 8px;
}

.table a {
  display: block;
  text-decoration: none;
}
.table a:link {
  color: orange;
}
.table a:visited {
  color: black;
}
.table a:active {
  color: black;
  background-color: #C8C7CC;
}
</style>
