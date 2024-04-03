const express = require("express")
const path = require('path')
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/", (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath); // 將 HTML 檔案發送到客戶端
});
router.get("/get_todoList", postsController.getAll)
router.post("/add_todoList", postsController.create)
router.patch("/update_todoList/:id", postsController.update)
router.delete("/delete_todoList/:id", postsController.delete)

module.exports = router