<template>
    <div class="content lg:mx-12 mx-3 lg:my-12 my-6">
        <h1 class="text-3xl font-extrabold text-center mb-6">Top Users</h1>
        <div v-if="account" class="flex items-center justify-center gap-6">
            <div class="flex justify-center max-w-50 mx-auto">
                <atomUser :username="account.login" :img="account.avatar_url" />
            </div>
        </div>
        <div v-else-if="pending">Loading...</div>
        <div v-else class="text-center">Users not found</div>
    </div>
</template>

<script setup>
const route = useRoute();
let { pending, data: account } = useLazyAsyncData('account', () => $fetch(`https://api.github.com/users/${route.params.user}`))
const refresh = () => refreshNuxtData('account')
refresh({ dedupe: true })
</script>
<script>
export default{

}
</script>