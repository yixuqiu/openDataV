import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
        >
          <path
            d="M24 30H8a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16.618l-5-2.5l-5 2.5V4H8v24h16v-4h2v4a2.003 2.003 0 0 1-2 2zm-3-14.118l3 1.5V4h-6v13.382z"
            fill="currentColor"
          ></path>
        </svg>
      )
    }
  }
})
