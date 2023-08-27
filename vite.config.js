import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        base: mode === 'development' ? '/' : '/leaflet-gaode/',
        plugins: [vue()],
    }
})
