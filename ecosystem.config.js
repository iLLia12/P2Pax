module.exports = {
    apps : [
        {
            name: "app",
            script: "./node_modules/nuxt/bin/nuxt-start",
            env: {
                "HOST": "0.0.0.0",
                "PORT": 3001,
                "NODE_ENV": "production",
            }
        }
    ]
};
