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
            script: [
                {
                    src: "https://use.fontawesome.com/releases/v5.6.3/js/all.js",
                    integrity: "sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1",
                    crossorigin: "anonymous",
                },
            ],
            title: "Quentin Durantay",
        };
    },
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/initial-variables';

@import url('https://fonts.googleapis.com/css?family=Ubuntu');
$family-sans-serif: "Ubuntu", sans-serif;

@import "~bulma";
@import "~buefy/src/scss/buefy";

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
