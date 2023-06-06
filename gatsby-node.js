const path = require("path");
const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
const createPages = require("./src/gatsby-utils/createPages");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@styled": path.resolve(__dirname, "./src/styled"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@containers": path.resolve(__dirname, "./src/containers"),
        "@layout": path.resolve(__dirname, "./src/layouts"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@constants": path.resolve(__dirname, "./src/constants"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },
  });
};

exports.createSchemaCustomization = createSchemaCustomization;

exports.createPages = createPages;
