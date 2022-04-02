module.exports = ({ env }) => ({
  url: env("https://ngivent-api.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["APP_KEYS1", "APP_KEYS2"]),
  },
});
