<template>
  <div>
    <p>mriage passthrough()函数过滤原生github请求。</p>
    <p>
      https://api.github.com/users/ZetlJ2004
      <br />
      <img
        :src="userR.avatar_url"
        alt=""
        style="width: 150px; border-radius: 50%; border: 2px solid red" />
      <br />
      login: {{ userR?.login }}
      <br />
      location: {{ userR?.location }}
      <br />
      repos_url:
      <!-- :to="{ name: 'example09-02', query: { url: user.repos_url } }" -->
      <router-link :to="`/exa10-2?url=${userR.repos_url}`">
        {{ userR.repos_url }}
      </router-link>
      <br />
      public_repos: {{ userR?.public_repos }}
      <br />
      followers: {{ userR?.followers }}
      <br />
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { GithubUser } from '@/type'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
const userR = ref<GithubUser>({})

// 创建新Fetch对象，避免与声明了配置的useFetch冲突
useFetch('https://api.github.com/users/ZetlJ2004')
  .get()
  .json<GithubUser>()
  .then((resp) => resp.data.value && (userR.value = resp.data.value))
</script>
