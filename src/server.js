import path from "path";
import express from "express";

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.get("/api", (_, res) => {
  res.send([
    "Episode I – The Phantom Menace",
    "Episode II – Attack of the Clones",
    "Episode III – Revenge of the Sith",
    "Episode IV – A New Hope",
    "Episode V – The Empire Strikes Back",
    "Episode VI – Return of the Jedi",
    "Episode VII – The Force Awakens",
    "Episode VIII – The Last Jedi",
    "Episode IX – The Rise of Skywalker",
  ]);
});

app.listen(PORT, () => console.log("listening on port", PORT));
