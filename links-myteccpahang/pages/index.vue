<template>
  <main class="container">
    <div class="col-xs-1" align="center">
      <img src="~/assets/img/mytecc-logo.png" alt="MYTECC logo" width="auto" height="130px" class="my-4">
      <h1 class="main-title">
        MARA YOUTH TECHNOLOGY COMPUTER CLUB
      </h1>
      <p class="quote mb-5">
        "Technology is The Future of Creativity"
      </p>

      <p v-if="$fetchState.pending" class="text-light p-5">
        <i class="bi bi-arrow-clockwise">
          <span class="ml-2">Fetching links...</span>
        </i>
      </p>
      <p v-else-if="$fetchState.error" class="text-light p-5">
        <i class="bi bi-exclamation-circle">
          <span class="ml-2">An error occurred</span>
        </i>
      </p>
      <div v-else>
        <div v-for="(link, index) in links" :key="index">
          <a :href="link.link_url" target="_blank" class="btn btn-links mb-3 mx-3 p-2 w-75 text-uppercase">{{ link.link_name }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import nuxtConfig from '~/nuxt.config'

export default {
  data () {
    return {
      links: []
    }
  },
  async fetch () {
    await this.getLinks()
  },
  methods: {
    async getLinks () {
      const data = axios.get(`${nuxtConfig.axios.baseURL}/v1/links`)
      const result = await data
      result.data.data.forEach((link) => {
        this.links.push(link)
      })
    }
  }
}
</script>
