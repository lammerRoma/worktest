const fs = require('fs');
const fetch = require('node-fetch');
const { resolve } = require('path');

const indexTemp = fs.readFileSync(`${__dirname}/../templates/postPage.html`, 'utf-8');
const postCards = fs.readFileSync(`${__dirname}/../templates/post.html`, 'utf-8');
const pagination = require(`${__dirname}/pagination`);

async function getPost (page) {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataObj = await data.json()
    const arrayLength = await dataObj.length
    const curentArray = await dataObj.map(el => replData(postCards, el))
    const paggination = await pagination.pagination(page, curentArray);
    const outputStart = await indexTemp.replace('{%DATA%}', paggination)
    const outputFinish = await replLink(outputStart, page, arrayLength)
    return outputFinish
}

function replData (temp, el) {
    let output = temp.replace(/{%TITLE%}/g, el.title);
    output = output.replace(/{%DESCRIPTION%}/g, el.body)
    return output;
}

function replLink (temp, page, length) {
    const previousPage = +page - 1
    const nextPage = +page + 1
    const maxPage = Math.ceil(length / 10)

    let output

    if(+page == 1) 
        output = temp.replace('{%PREVIOUSPAGE%}', `http://127.0.0.1:3000/post?page=${page}`)
    else
        output = temp.replace('{%PREVIOUSPAGE%}', `http://127.0.0.1:3000/post?page=${previousPage}`)

    if(+page >= maxPage )
        output = output.replace('{%NEXTPAGE%}', `http://127.0.0.1:3000/post?page=${page}`)
    else
        output = output.replace('{%NEXTPAGE%}', `http://127.0.0.1:3000/post?page=${nextPage}`)

    return output
}

module.exports.getPost = getPost;
