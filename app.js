const axios = require('axios')

// EXERCICE 1 - Récupérer tous les posts (sans axios)
const getPosts = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
        )
        const posts = await response.json()
        await console.log('\n ---- EXO 1 ')
        await console.log(posts)
    } catch (e) {
        console.log(e.message)
        console.log(e.stack)
    }
}

// EXERCICE 2 - Récupérer le post avec l’id 7 (avec Axios)
const getPostID = (id) => {
    console.log('\n ---- EXO 2 ')
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function (response) {
            console.log('\n ---- EXO 2 ')
            console.log(response.data)
        })
        .catch((e) => console.log(e))
}

// EXERCICE 3 - Créer un post (avec Axios)
const postNewPost = (userId, id, title, body) => {
    axios
        .post('https://jsonplaceholder.typicode.com/posts/', {
            userId,
            id,
            title,
            body,
        })
        .then(function (response) {
            console.log('\n ---- EXO 3 ')
            console.log(response.data)
        })
        .catch((e) => console.log(e))
}

// EXERCICE 4 - mettre à jour le post 7 (avec Axios)
const putPostId = (id, title, body) => {
    axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title,
            body,
        })
        .then(function (response) {
            console.log('\n ---- EXO 4 ')
            console.log(response.data)
        })
        .catch((e) => console.log(e))
}

// EXERCICE 5 - mettre à jour le title du post 7 (avec Axios)
const patchPostId = (id, title) => {
    axios
        .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title,
        })
        .then(function (response) {
            console.log('\n ---- EXO 5 ')
            console.log(response.data)
        })
        .catch((e) => console.log(e))
}

// EXERCICE 6 - Supprimer le post 7 (avec Axios)
const deletePostID = (id) => {
    axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function () {
            console.log('\n ---- EXO 6 ')
            console.log(`Post avec l'id n°${id} a bien été delete\n`)
        })
        .catch((e) => console.log(e))
}

// PROGRAMME
getPosts()
getPostID(7)

const newUserID = 69
const id = 6969
const newTitle = 'Momo nous à achevé'
const newBody =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum ex laborum temporibus possimus maiores vel labore ea repellendus culpa nam eveniet alias doloremque molestiae perferendis quae voluptas, sint in.'
postNewPost(newUserID, id, newTitle, newBody)

const putTitle = 'Un titre'
const putBody =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, inventore.'
putPostId(7, putTitle, putBody)

const patchTitle = 'Patch du titre OK'
patchPostId(7, patchTitle)

deletePostID(7)
