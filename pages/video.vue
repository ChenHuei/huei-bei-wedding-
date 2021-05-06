<template>
  <div class="video relative w-screen h-screen bg-black">
    <youtube
      ref="youtube"
      class="w-full h-full"
      video-id="ql8hqGFjuck"
      @ended="youtubeEndHandler"
    />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { gsap } from 'gsap'

// constants
import { SPEED_BASE, SIZES_BASE, COLOR_LIST } from '@/constants/video'

// types
import { User, Message } from '@/types/video'

// utils
import { getRandomInteger } from '@/utils/math'

@Component({
  layout: 'empty',
})
export default class App extends Vue {
  @Ref('youtube')
  youtubeRef!: Vue & {
    player: {
      seekTo: (start: number) => void
    }
  }

  mounted(): void {
    const eventSource = new EventSource(
      'https://wedding-line-bot.herokuapp.com/messages'
    )

    eventSource.onmessage = (e) => {
      const messages: {
        user: User
        text: string
      }[] = JSON.parse(e.data).messages

      messages.forEach((message) => {
        this.createText({
          id: new Date().getTime(),
          message: message.text,
          user: message.user,
        })
      })
    }
  }

  youtubeEndHandler(): void {
    this.youtubeRef.player.seekTo(0)
  }

  async createText(item: Message): Promise<void> {
    const textEl = this.getTextElement(item.id, document.documentElement)
    const userEl = this.getUserElement(item.user.pictureUrl)

    textEl.appendChild(userEl)
    textEl.appendChild(document.createTextNode(item.message))

    document.body.appendChild(textEl)

    await gsap.to(`#${textEl.id}`, {
      duration: getRandomInteger(SPEED_BASE, SPEED_BASE / 2),
      x: -1 * (document.documentElement.clientWidth + textEl.clientWidth),
    })

    textEl?.parentNode?.removeChild(textEl)
  }

  getUserElement(url: string): HTMLDivElement {
    const userEl = document.createElement('div')

    userEl.style.width = '32px'
    userEl.style.height = '32px'
    userEl.style.borderRadius = '50%'
    userEl.style.backgroundImage = `url(${url})`
    userEl.style.backgroundSize = 'cover'
    userEl.style.marginRight = '8px'

    return userEl
  }

  getTextElement(id: number, documentElement: HTMLElement): HTMLDivElement {
    const textEl = document.createElement('div')

    textEl.id = `text${id}`

    textEl.style.position = 'fixed'
    textEl.style.top = `${
      Math.random() * (documentElement.clientHeight - textEl.clientHeight)
    }px`
    textEl.style.left = `${documentElement.clientWidth}px`

    textEl.style.display = 'flex'
    textEl.style.alignItems = 'center'

    textEl.style.fontSize = `${getRandomInteger(SIZES_BASE, SIZES_BASE)}px`
    textEl.style.fontWeight = '900'
    textEl.style.whiteSpace = 'nowrap'
    textEl.style.color = COLOR_LIST[getRandomInteger(COLOR_LIST.length - 1)]

    return textEl
  }
}
</script>

<style lang="scss" scoped>
.video {
  div {
    transition: 0.5s;
  }
}
</style>
