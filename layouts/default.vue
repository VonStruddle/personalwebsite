<template>
    <nuxt/>
</template>

<script>
export default {
    head() {
        return {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css",
                },
            ],
            title: "Quentin Durantay",
        };
    },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800');
$family-sans-serif: "Nunito", sans-serif;

@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
