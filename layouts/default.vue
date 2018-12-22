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
                {
                    ref: "stylesheet",
                    href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
                    integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
                    crossorigin: "anonymous",
                }
            ],
            title: "Quentin Durantay",
        };
    },
};
</script>


<style lang="scss">
@import "~bulma/sass/utilities/_all";

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800');
$family-sans-serif: "Nunito", sans-serif;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
