import express from "express";

const posts = [
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 1,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 2,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 3,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 4,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 5,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 6,
    },
    {
        descricao: "Um gatinho fofo tomando leite",
        imagem: "https://placecats.com/200/300",
        id: 7,
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Rodando");
});

app.get("/api", (req, res) => {
    res.status(200).send("Testando rota");
});

function buscarPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/photos", (req, res) => {
    res.status(200).json(posts);
});

app.get("/photos/:id", (req, res) => {
    const index = buscarPostID(req.params.id);
    res.status(200).json(posts[index]);
});

//AIzaSyATj45MTNIPMeSolwGIMJvdRVLqgwrucQs
//viniciusSilva - Kmxmj30xWX0vZVwW
//mongodb+srv://viniciusSilva:Kmxmj30xWX0vZVwW@cluster0.npwhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
