// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    buildModules: [
        'nuxt-windicss',
        '@nuxt/image-edge'
    ],
    build: {
        templates: [
            {
                src: 'templates/app.html'
            }
        ],
    },

    image: {
        domains: [
            'avatars.githubusercontent.com'
        ],
    }   
})
