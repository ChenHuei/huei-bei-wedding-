<template>
  <div class="relative w-screen h-screen bg-black">
    <client-only>
      <carousel
        :per-page="1"
        :autoplay="true"
        :autoplay-timeout="5000"
        :loop="true"
        :pagination-enabled="false"
      >
        <slide v-for="item in imageList" :key="item">
          <div class="w-screen h-screen flex justify-center items-center">
            <img
              class="m-auto"
              v-lazy-load
              :style="{ maxWidth: '100%', maxHeight: '100%' }"
              :src="item"
            />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { gsap } from 'gsap'

// constants
import { SPEED_BASE, COLOR_LIST } from '@/constants/video'

// types`
import { Message } from '@/types/video'

// utils
import { getRandomInteger } from '@/utils/math'

@Component({
  layout: 'empty',
  data() {
    return {
      imageList: [...Array(40).keys()].map((item) =>
        require(`@/assets/images/carousel/${item + 1}.${
          (this as Vue & { $isWebp: boolean }).$isWebp ? 'webp' : 'jpg'
        }`)
      ),
    }
  },
})
export default class ImageCarousel extends Vue {
  mounted(): void {
    const eventSource = new EventSource(
      `https://wedding-line-bot.herokuapp.com/messages`
    )

    eventSource.onmessage = (e) => {
      const messages: Pick<Message, 'text' | 'displayName' | 'pictureUrl'>[] =
        JSON.parse(e.data).messages

      messages.forEach((message) => {
        this.createText({
          id: new Date().getTime(),
          ...message,
        })
      })
    }
  }

  async createText(item: Message): Promise<void> {
    const textEl = this.getTextElement(item.id, document.documentElement)
    const userEl = this.getUserElement(item.pictureUrl)

    textEl.appendChild(userEl)
    textEl.appendChild(document.createTextNode(item.text))

    document.body.appendChild(textEl)

    await gsap.to(`#${textEl.id}`, {
      duration: getRandomInteger(SPEED_BASE, SPEED_BASE / 2),
      x: -1 * (document.documentElement.clientWidth + textEl.clientWidth),
    })

    textEl?.parentNode?.removeChild(textEl)
  }

  getUserElement(url: string): HTMLDivElement {
    const userEl = document.createElement('div')

    userEl.style.width = '40px'
    userEl.style.height = '40px'
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

    textEl.style.fontSize = '32px'
    textEl.style.fontWeight = '900'
    textEl.style.whiteSpace = 'nowrap'
    textEl.style.color = COLOR_LIST[getRandomInteger(COLOR_LIST.length - 1)]

    return textEl
  }
}
</script>
