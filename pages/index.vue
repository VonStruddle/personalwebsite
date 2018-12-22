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
                                @mouseover="animate('job')"
                                :class="{ 'animated': isAnimated.job, 'jello': isAnimated.job }"
                            >
                                @ Dolead
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-foot">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-12">
                        <p>
                            Contact me at
                            <a
                                href="mailto:quentin@quentindurantay.me"
                                @mouseover="animate('mail')"
                                :class="{ 'animated': isAnimated.mail, 'shake': isAnimated.mail }"
                            >
                                quentin@quentindurantay.me
                            </a>
                        </p>
                    </div>
                    <div class="column is-12">
                        <div class="is-flex">
                            <div>
                                <span class="icon">
                                    <i class="fab fa-github-alt"></i>
                                </span>
                            </div>
                            <div>
                                <figure class="image is-32x32">
                                    <img src="" alt="">
                                </figure>
                            </div>
                            <div>
                                <figure class="image is-32x32">
                                    <img src="" alt="">
                                </figure>
                            </div>
                        </div>
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
            isAnimated: {
                job: false,
                mail: false,
            },
        };
    },
    methods: {
        animate(_obj) {
            this.isAnimated[_obj] = true;
            setTimeout(() => this.isAnimated[_obj] = false, 500);
        },
    },
};
</script>


<style lang="scss" scoped>
a {
    display: inline-block;
}
.hero-foot {
    margin-bottom: 36px;
}
.is-flex {
    align-items: center;

    div {
        &:not(:first-child) {
            margin-left: 26px;
        }
    }
}
</style>
