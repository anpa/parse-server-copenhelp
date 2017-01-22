var config = {
  domain: "xxxxxxx",
  apiKey: "xxxxxxx",
  toEmail: "xxxxxxx",
  fromEmail: "xxxxxxx"
};

module.exports = function (params, response) {
  response.success("Email sent!");
};

