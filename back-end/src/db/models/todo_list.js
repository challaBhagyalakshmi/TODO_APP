const Sequelize = require("sequelize");
const sequeliz = require("../config/connection");

const sequelize = sequeliz.sequelize;
const Todo_lists = sequelize.define("todo_lists", {
  todo_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    unique: true,
  },
});

Todo_lists.sync()
  .then(function () {
    return Todo_lists.bulkCreate([
      {
        todo_name: "dialerapp",
      },
      {
        todo_name: "covid19",
      },
    ]);
  })
  .then((data) => {
    console.log(data.todo_name);
  });

module.exports = { Todo_lists };
