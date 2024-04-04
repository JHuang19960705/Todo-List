const express = require("express")
const path = require('path')
const router = express.Router()

const todoListController = require("../controller/todoList.controller")

router.get("/", (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath); // 將 HTML 檔案發送到客戶端
});

// 加入 express.static 中介軟體來提供靜態檔案的服務
router.use("/styles", express.static(path.join(__dirname, '../public/styles')));
router.use("/scripts", express.static(path.join(__dirname, '../public/scripts')));


router.get("/get_todoList", todoListController.getAll)
router.post("/add_todoList", todoListController.create)
router.patch("/update_todoList/:id", todoListController.update)
router.delete("/delete_todoList/:id", todoListController.delete)

module.exports = router