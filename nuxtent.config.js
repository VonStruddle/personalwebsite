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
        baseURL: "http://localhost:3000",
        browserBaseURL: "https://quentindurantay.me",
    },
};
