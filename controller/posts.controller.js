const pool = require("../database/index")

const todoListController = {

  // 使用 app.get('/get_todoList') 路由來檢索 todoList 表中的所有資料
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from todoList") // 查詢資料庫中的所有資料
      res.json({
        data: rows
      })
      console.log("拿到資料~")
    } catch (error) {
      console.log(error) // 如果出錯，發送錯誤狀態碼和訊息到客戶端
      res.json({
        status: "error"
      })
    }
  },

  // 處理 POST 請求以將資料插入到 MySQL 資料庫中
  create: async (req, res) => {
    try {
      const { name, due_date } = req.body
      const sql = "insert into todoList (name, due_date) values (?, ?)" // SQL 插入語句
      const [rows, fields] = await pool.query(sql, [name, due_date])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error) // 如果出錯，發送錯誤狀態碼和訊息到客戶端
      res.json({
        status: "error"
      })
    }
  },

  // 處理 PATCH 請求以更新特定待辦事項的名稱和截止日期
  update: async (req, res) => {
    try {
      const { name, due_date } = req.body
      const { id } = req.params // 獲取待辦事項的標識符
      const sql = "update todoList set name = ?, due_date = ? where id = ?" // SQL 更新語句
      const [rows, fields] = await pool.query(sql, [name, due_date, id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error) // 如果出錯，發送錯誤狀態碼和訊息到客戶端
      res.json({
        status: "error"
      })
    }
  },

  // 處理 DELETE 請求以刪除特定待辦事項
  delete: async (req, res) => {
    try {
      const { id } = req.params
      console.log({ id });
      const [rows, fields] = await pool.query("delete from todoList where id = ?", [id]) // SQL 刪除語句
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error) // 將刪除資料的結果輸出到控制台
      res.json({
        status: "error"
      })
    }
  }
}

module.exports = todoListController