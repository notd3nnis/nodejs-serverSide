import express from "express";
const PORT = 8000;
const app = express();
app.get("/", (req, res) => {
    res.send("welcome ");
});
app.listen(PORT, () => {
    console.log("server started at 8000");
});
//# sourceMappingURL=index.js.map