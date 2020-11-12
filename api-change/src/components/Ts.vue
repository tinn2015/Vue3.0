<template>
  <div class="text-center" style="margin-top: 80px;">
    <h1>TypeScript Support</h1>

    <h3>vue3 用ts重写了可以很好的支持ts语法，静态类型检测可以编译的时候发现很多运行时错误。</h3>

    <ul>
      <li>1. 通过类型断言 申明data</li>
      <li>2. 通过注解 申明computed</li>
      <li>3. 通过注解 申明props</li>
      <li>4. setUp 中 申明类型</li>
    </ul>
  </div>
</template>

<script>

/* data */
interface Book {
  title: string
  author: string
  year: number
}

const Component = defineComponent({
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  }
})

/* computed */

import { defineComponent } from 'vue'

const Component = defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // needs an annotation
    greeting(): string {
      return this.message + '!'
    }

    // in a computed with a setter, getter needs to be annotated
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase();
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase();
      },
    },
  }
})

/* props */

import { defineComponent, PropType } from 'vue'

interface ComplexMessage {
  title: string
  okMessage: string
  cancelMessage: string
}
const Component = defineComponent({
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator(message: ComplexMessage) {
        return !!message.title
      }
    }
  }
})
</script>

<script>
/* props */
import { defineComponent } from 'vue'

const Component = defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const result = props.message.split('') // correct, 'message' is typed as a string
    const filtered = props.message.filter(p => p.value) // an error will be thrown: Property 'filter' does not exist on type 'string'
  }
})

/* ref */
import { defineComponent, ref } from 'vue'

const Component = defineComponent({
  setup() {
    /* 默认直接通过初始值的类型推断 */
    const year = ref(2020)

    const result = year.value.split('') // => Property 'split' does not exist on type 'number'
  }
})

/* 复杂情况使用类型断言 */
const year = ref<string | number>('2020') // year's type: Ref<string | number>

year.value = 2020 // ok!


/* relative */
import { defineComponent, reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const book = reactive<Book>({ title: 'Vue 3 Guide' })
    // or
    const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    const book = reactive({ title: 'Vue 3 Guide' }) as Book
  }
})

/* computed */

import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CounterButton',
  setup() {
    let count = ref(0)

    // read-only
    const doubleCount = computed(() => count.value * 2)

    /* 自定从返回值类型推断 */
    const result = doubleCount.value.split('') // => Property 'split' does not exist on type 'number'
  }
})
</script>