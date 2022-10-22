<template>
    <div class="content lg:mx-12 mx-3 lg:my-12 my-6">
        <h1 class="text-3xl font-extrabold text-center mb-6">Top Users</h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
            <div v-for="(account, i) in accounts" :key="i" class="flex justify-center max-w-50 mx-auto">
                <atomUser :username="account.login" :img="account.avatar_url" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: accounts } = await useFetch('https://api.github.com/users?per_page=8')
</script>