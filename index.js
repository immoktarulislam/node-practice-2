import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`welcomeeee i-can university`)
})

// make some user data
const users = [
    { id: 1, name: `abir`, email: `abir.dw@mansnnd` },
    { id: 2, name: `sabir`, email: `sabir.dw@mansnnd` },
    { id: 3, name: `mabir`, email: `mabir.dw@mansnnd` },
    { id: 4, name: `mabir`, email: `mabir.dw@mansnn` },
]
app.get(`/users`, (req, res) => {
    res.send(users)
})



app.listen(PORT, () => {
    console.log(`just watch work is go onnnnnnn ${PORT}`);
})
