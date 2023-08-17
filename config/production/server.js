module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'your-secret-key'),
      },
    },
    url: env('PUBLIC_URL', 'https://your-production-url.com'),
    proxy: true,
    autoReload: false,
    cron: {
      enabled: false,
    },
  });
  