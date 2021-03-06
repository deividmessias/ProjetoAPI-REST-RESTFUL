const express = require ("express");
const app = express();
const data = require("./data.json")
app.use(express.json());



app.get("/clients", function(req ,res){
    res.json(data);
});

app.get("/clients/:id", function(req ,res){
    const { id } = req.params;
    const clients = data.find(cli => cli.id == id);
    if(!clients) return res.status(204).json();
    res.json(clients);
});

app.post("/clients", function(req ,res){
    const { name, email } = req.body;
    res.json({ name, email });
});

app.put("/clients/:id", function(req ,res){
    const { id } = req.params;
    const clients = data.find(cli => cli.id == id);
    if(!clients) return res.status(204).json();

    const { name } = req.body;
    clients.name = name;
    res.json(clients);
});

app.delete("/clients/:id", function(req ,res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);
    res.json(clientsFiltered);

});



app.listen(3000, function(){
    console.log("Server is runing");
});