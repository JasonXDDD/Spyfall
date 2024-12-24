<template>
  <main class="h-full flex flex-col p-8">
    <!-- info -->
    <small class="flex-none font-mono text-xs opacity-80">
      大廳: {{ gameInfo.game }}，玩家: {{ gameInfo.name }}，人數:
      {{ gameInfo.total }}
    </small>

    <!-- game -->
    <section class="h-full flex flex-col items-center gap-4">
      <button
        class="mt-8 mb-auto rounded-2xl w-full p-2 bg-green-800 flex items-center justify-center"
        @click="doGetQuestion"
      >
        抽題
      </button>

      <div class="flex flex-col items-center gap-4">
        <span>題目: Q{{ question.id }}</span>
        <h2 class="text-3xl text-center font-bold">{{ question.task }}</h2>
      </div>

      <footer class="mt-auto w-full flex justify-center items-center gap-4">
        <span class="flex-none font-mono">
          你的順位: {{ isHide ? '-' : gameInfo.position }}
        </span>
        <button
          class="rounded-xl py-1 px-2 bg-green-800 flex items-center justify-center"
          @click="isHide = !isHide"
        >
          {{ isHide ? '顯示' : '隱藏' }}
        </button>
      </footer>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const game = computed(() => route.params.name)
const player = computed(() => route.query.player)

const { data: gameInfo, error } = useLazyAsyncData(
  'player',
  async () => {
    const res = await $fetch('/api/game/info', {
      query: { game: game.value, player: player.value }
    })
    return res
  },
  {
    server: false,
    watch: [game, player],
    default: () => ({ game: '遊戲', name: '玩家', total: 0 })
  }
)

const question = ref({ id: 0, task: '這是一個問題' })
const isHide = ref(true)

function doGetQuestion () {
  question.value = getQuestion()
}
</script>
