<template>
  <footer class="Footer">
    <div class="container">
      <div class="content">
        <div class="info">
          <div v-for="(disclaimer, idx) in disclaimers"
               :key="idx"
               class="disclaimer">
            {{ disclaimer }}
          </div>
        </div>
        <ul class="linkList">
          <li v-for="(link, idx) in links"
              :key="idx"
              class="linkItem">
            <a class="link" :href="link.href">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
const links = [
  {
    'text': 'Contact',
    'href': 'mailto:testEmail@gmail.com',
  },
  {
    'text': 'Report a bug',
    'href': 'mailto:testEmail@gmail.com',
  }
];

export default {
  name: 'Footer',
  data: function() {
    return {
      disclaimers: [
        'This website is not officially endorsed by MiHoYo or the Genshin Impact team.',
        'This website may not be up to date with live servers.'
      ],
      links: links,
    }
  },
}
</script>

<style lang="scss" scoped>
.Footer {
  background-color: $base-bg-color;
}

.content {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @include bpgte(sm)
  {
    flex-direction: row;
  }
}

.disclaimer {
  @include Text--tiny;
  color: #fff;

  @include bplte(xs)
  {
    margin-bottom: 8px;
  }
}

.linkList {
  display: flex;
  margin: 0 -8px;
}

.linkItem {
  padding: 0 8px;
}

.link {
  @include Text--small;
  color: #fff;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
</style>