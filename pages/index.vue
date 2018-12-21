<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h2 class="title is-5">👋 I'm Quentin,</h2>
                        <h1 class="title is-3">
                            I'm a Product Manager and Growth Engineer
                            <a
                                href="https://www.dolead.com/?utm_source=Quentin"
                                target="_blank"
                                @mouseover="animate"
                                :class="{ 'animated': isAnimated, 'jello': isAnimated }"
                            >
                                @ Dolead
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isAnimated: false,
        };
    },
    methods: {
        animate() {
            this.isAnimated = true;
            setTimeout(() => this.isAnimated = false, 500);
        },
    },
};
</script>


<style lang="scss" scoped>
a {
    display: inline-block;
}
</style>
