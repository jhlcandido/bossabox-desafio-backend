let path = ".env";
if (process.env.NODE_ENV === "test") {
  path = ".test.env";
} else if (process.env.NODE_ENV === "dev") {
  path = ".dev.env";
}

require("dotenv").config({
  path,
});

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "mysql",
  storage: "./__tests__/database.sqlite",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
    charset: "utf8",
    collate: "utf8_general_ci",
  },
};
