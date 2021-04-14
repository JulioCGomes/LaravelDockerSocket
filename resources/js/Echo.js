import Vue from 'vue'
import Bus from './bus'

window.Echo.channel('laravel_database_post-created')
    .listen('PostCreated', (e) => {
        /**
         * Emitindo uma notificação para todo o sistema.
         */
        Bus.$emit('post.created', e.post)

        /**
         * Disparando uma notificação no campo inferior da tela.
         */
        Vue.$vToastify.success(`Título do post ${e.post.name}`, 'Novo Post')
    })