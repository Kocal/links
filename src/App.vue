<script setup>
import Link from '@/components/Link.vue';
</script>

<template>
  <div class="w-full max-w-[500px]">
    <header>
      <h1 class="text-4xl sm:text-6xl mb-10 text-center font-thin text-white">
        Links
      </h1>
    </header>

    <main class="flex flex-col space-y-5">
      <Link url="https://hugo.alliau.me" class="bg-[#333] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fas', 'blog']" />
        Blog
      </Link>
      <Link url="https://github.com/Kocal" class="bg-[#24292f] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fab', 'github']" />
        GitHub
      </Link>
      <Link url="https://twitter.com/Kocal_" class="bg-[#00acee] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
        Twitter (1)
      </Link>
      <Link url="https://twitter.com/HugoAlliaume" class="bg-[#00acee] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
        Twitter (2)
      </Link>
      <Link url="https://www.instagram.com/thekocal" class="bg-[#dd2a7b] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fab', 'instagram']" />
        Instagram
      </Link>
      <Link url="https://www.strava.com/athletes/62379808" class="bg-[#fc4c02] filter hover:brightness-125 text-white">
        <FontAwesomeIcon :icon="['fab', 'strava']" />
        Strava
      </Link>
    </main>
  </div>
</template>
