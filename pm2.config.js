module.exports = {
  apps: [
    {
      name: "next-app",
      script: "bun",
      args: "dev",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "agenda-worker",
      script: "bun",
      args: "run src/scripts/agenda.ts",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
