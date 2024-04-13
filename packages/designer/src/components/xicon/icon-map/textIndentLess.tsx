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
          <path d="M2 6h10v2H2z" fill="currentColor"></path>
          <path d="M5 12h7v2H5z" fill="currentColor"></path>
          <path d="M2 18h10v2H2z" fill="currentColor"></path>
          <path d="M5 24h7v2H5z" fill="currentColor"></path>
          <path d="M16 4h2v24h-2z" fill="currentColor"></path>
          <path
            d="M28.15 23.5l1.41-1.38L23.27 16l6.29-6.12l-1.41-1.38l-7.71 7.5l7.71 7.5z"
            fill="currentColor"
          ></path>
        </svg>
      )
    }
  }
})
