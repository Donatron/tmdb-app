module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  APIKey: process.env.API_KEY,
  imageRootURL: process.env.IMAGE_ROOT_URL,
  someVariable: "Some Variable"
};

console.log("Production config");
