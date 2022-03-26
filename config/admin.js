module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '215717fbeb4ca8038957e68b0517590a'),
  },
});
