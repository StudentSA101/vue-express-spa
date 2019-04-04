<template>
    <h1> This is a home template</h1>
</template>
<script>
    export default {
        mounted(){
            console.log(this.$store.state.session);
        }
    }
</script>