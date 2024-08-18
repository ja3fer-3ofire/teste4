const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// إعداد Middleware لتحليل بيانات JSON و URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تقديم ملفات HTML من مجلد 'public'
app.use(express.static(path.join(__dirname, 'indexinter.html')));

// نقطة النهاية GET لتقديم صفحة HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexinter.html'));
});

// نقطة النهاية POST لاستقبال بيانات المستخدم
app.post('/submit', (req, res) => {
  const userData = req.body;
  console.log('Received data:', userData);
  res.json(userData); // إرسال البيانات كـ JSON
});

// بدء الخادم
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
