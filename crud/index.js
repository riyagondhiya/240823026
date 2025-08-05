const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello git");
});

app.get("/show/:id", (req, res) => {
    res.send(`hello, student \n ID: ${req.params.id}`);
});

app.post("/store",(req,res)=>{
    res.send(`successfully stores record \n ${req.body.name},${req.body.city}`);
});

app.put("/update/:id",(req,res)=>{
    res.send(`successfully updated record \n ID: ${req.params.id},Name: ${req.body.name}, City: ${req.body.city}`);
});

app.delete("/delete/:id",(req,res)=>{
    res.send(`successfully deleted record \n ID: ${req.params.id}`);
});
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
});
