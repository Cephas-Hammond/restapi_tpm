const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/psql/students", studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));