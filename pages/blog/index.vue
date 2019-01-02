<template>
    <div>
        <h2
            v-for="post in posts"
            :key="post.title"
        >
            {{ post.title }}
        </h2>
    </div>
</template>

<script>
export default {
    async asyncData({ app }) {
        return {
            posts: await app.$content("/blog").getAll(),
        };
    },
};
</script>
