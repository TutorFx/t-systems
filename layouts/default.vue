<template>
    <div class="bg-neutral-100 min-h-screen font-roboto">
        <div id="_main" class="container mx-auto bg-white min-h-screen max-w-5xl">
            <moleculeNavbar id="_navbar" />
            <div id="_application">
                <slot />
            </div>
            <moleculeFooter id="_footer" />
        </div>
    </div>
</template>
<style lang="scss">
#_main{
    display: flex;
    flex-flow: column;
    height: 100%;
    box-shadow: 0px 36px 12px 0px #CCCCCC40;
    #_header{
        flex: 0 1 auto;
        box-shadow: 0px 12px 36px 0px #CCCCCC40;
    }
    #_application{
        flex: 1 1 auto;
    }
    #_footer{
        flex: 0 1 120px;
        box-shadow: 0px -12px 36px 0px #00000040;
    }
}
</style>
<script setup>
definePageMeta({ layout: 'custom' })
</script>