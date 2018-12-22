<template>
    <section class="hero is-dark is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h2 class="title is-4">👋 I'm Quentin,</h2>
                        <h1 class="title is-3">
                            I'm a Product Manager and Growth Engineer
                            <a
                                href="https://www.dolead.com/?utm_source=Quentin"
                                target="_blank"
                                @mouseover="animate('job')"
                                :class="{ 'animated': isAnimated.job, 'jello': isAnimated.job }"
                            >
                                <span class="link-text">
                                    @ Dolead
                                </span>
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
                            You can contact me at
                            <a
                                href="mailto:quentin@quentindurantay.me"
                                @mouseover="animate('mail')"
                                :class="{ 'animated': isAnimated.mail, 'jello': isAnimated.mail }"
                            >
                                <span class="link-text">
                                    quentin@quentindurantay.me
                                </span>
                            </a>
                        </p>
                    </div>
                    <div class="column is-12">
                        <div class="is-flex">
                            <div>
                                <a href="https://www.github.com/VonStruddle" target="_blank">
                                    <span class="icon is-medium">
                                        <i class="fab fa-github-alt fa-lg"></i>
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/qdurantay" target="_blank">
                                    <span class="icon is-medium">
                                        <i class="fab fa-linkedin-in fa-lg"></i>
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.twitter.com/quentindty" target="_blank">
                                    <span class="icon is-medium">
                                        <i class="fab fa-twitter fa-lg"></i>
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href="https://medium.com/@quentindty" target="_blank">
                                    <span class="icon is-medium">
                                        <i class="fab fa-medium-m fa-lg"></i>
                                    </span>
                                </a>
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
            setTimeout(() => this.isAnimated[_obj] = false, 1000);
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
.icon, .link-text {
    &:hover {
        color: hsl(217, 71%, 53%);
        text-decoration: underline;
    }
}
</style>
