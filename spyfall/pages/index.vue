<template>
  <main class="h-full flex justify-center items-center">
    <section class="rounded-2xl bg-base p-8 flex flex-col items-center gap-4">
      <h1 class="font-bold text-2xl mb-8">秘密任務</h1>
      <div
        v-for="info in forms"
        :key="info.field"
        class="w-full flex items-center gap-2 rounded-xl p-2 hover:bg-zinc-700 bg-zinc-800 text-white"
      >
        <ArrowRightIcon class="flex-none size-4 text-cyan-200" />
        <label class="flex-none font-bold text-cyan-200">{{ info.name }}</label>
        <input
          :type="info.type"
          v-model="infoForm[info.field]"
          class="w-full p-0 bg-transparent border-none outline-0 focus:ring-0 placeholder:text-zinc-500"
        />
      </div>

      <button
        class="mt-8 rounded-2xl w-full p-2 bg-green-800 flex items-center justify-center"
        @click="doJoinGame"
      >
        加入
      </button>
    </section>
  </main>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const infoForm = ref({
  game: '',
  name: '',
  total: 0
})

const forms = [
  { name: '遊戲大廳', type: 'text', field: 'game' },
  { name: '玩家名稱', type: 'text', field: 'name' },
  { name: '遊玩人數', type: 'number', field: 'total' }
]

const doJoinGame = async () => {
  const res = await joinGame(infoForm.value)
  if (res) {
    router.push({ path: `/game/${res.game}`, query: { player: res.name } })
  }
}
</script>
