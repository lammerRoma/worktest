const fs = require('fs');
const fetch = require('node-fetch');

const indexTemp = fs.readFileSync(`${__dirname}/../templates/getPostPage.html`, 'utf-8');
const commentsCards = fs.readFileSync(`${__dirname}/../templates/commentsCards.html`, 'utf-8');
const pagination = require(`${__dirname}/pagination`);

async function getPost (id) {
    const dataPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const dataObjP = await dataPost.json()
    const outputStart = await replData(indexTemp, dataObjP)

    const dataComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const dataObjC = await dataComments.json()
    const commentsArray = await dataObjC.map(el => replComments(commentsCards, el)).join('')
   
    const outputFinish = await outputStart.replace('{%COMMENTS%}', commentsArray)

    return outputFinish
}

function replData (temp, el) {
    let output = temp.replace(/{%TITLE%}/g, el.title);
    output = output.replace(/{%DESCRIPTION%}/g, el.body)
    return output;
}

function replComments (temp, el) {
    let output = temp.replace(/{%NAME%}/g, el.name);
    output = output.replace(/{%EMAIL%}/g, el.email)
    output = output.replace(/{%BODY%}/g, el.body)
    return output;
}

module.exports.getPost = getPost;