import { UserConfigExport, ConfigEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
            viteMockServe({
                // default
                mockPath: './mock-api/',
                localEnabled: command === 'serve',
            }),
        ],
    }
}