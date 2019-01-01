<template>
    <div>
        <h1>{{ post.title }}</h1>
        <nuxtent-body :body="post.body"></nuxtent-body>
    </div>
</template>

<script>
export default {
    async asyncData({ app, route }) {
        return {
            post: await app.$content('/blog').get(route.path),
        };
    }
}
</script>

