// 引入所需模組
const express = require('express'); // 引入 Express 框架
const cors = require('cors'); // 引入 cors 模組
const app = express(); // 建立 Express 應用程式

// 引入 dotenv 模組並讀取 .env 檔案中的環境變數
require('dotenv').config();

// 設置中介軟體來解析 POST 請求的資料
app.use(express.json()); // 解析 JSON 格式的請求資料
app.use(express.urlencoded({ extended: false })); // 解析表單提交的資料
app.use(cors()); // 使用 CORS 中間件

// 設置靜態資源路徑，使 Express 能夠提供 public 資料夾中的檔案
app.use(express.static('public'));

const postsRouter = require('./routes/posts.router')

app.use("/", postsRouter)

// 監聽端口
const PORT = process.env.PORT || 5000 // 應用程式運行的端口號
app.listen(PORT, () => console.log(`伺服器正在執行，位於端口 ${PORT}`)); // 在控制台輸出伺服器啟動訊息
