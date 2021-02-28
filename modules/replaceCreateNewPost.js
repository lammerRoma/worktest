const fetch = require('fetch')
const fs = require('fs')

const indexPage = fs.readFileSync(`${__dirname}/../templates/index.html`, 'utf-8');
const createNewPost = fs.readFileSync(`${__dirname}/../templates/createNewPost.html`, 'utf-8');

exports.outputPage = () => {
    return indexPage.replace('{%DATA%}', createNewPost)
}

async function createPost (title, description) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
    title: title,
    body: description,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    const outputFinish =  await 'res'

    return outputFinish
}


module.exports.createPost = createPost

