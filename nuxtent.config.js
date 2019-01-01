module.exports = {
    content: [
        [
            "blog",
            {
                page: "/blog/_slug",
                permalink: "/blog/:slug",
                isPost: false,
                generate: [
                    "get",
                    "getAll",
                ],
            },
        ],
    ],
    api: {
        baseURL:
        process.env.NODE_ENV === "production"
            ? "https://quentindurantay.me"
            : "http://localhost:3000",
    },
};
