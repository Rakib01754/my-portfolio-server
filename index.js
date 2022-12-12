const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())





const projects = require('./data/projectData.json')

app.get('/', (req, res) => {
    res.send('Portfolio server running')
});

app.get('/projects', (req, res) => {
    res.send(projects)
});

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    const project = projects.find(c => c.id == id);
    res.send(project);
});

app.listen(port, () => {
    console.log(`portfolio app listening on port ${port}`)
})