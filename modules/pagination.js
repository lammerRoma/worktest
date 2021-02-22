function pagination(p, array) {
    const page = parseInt(p)
    const limit = 10
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const curentPosts = array.slice(startIndex, endIndex).join('')
    return curentPosts
}

module.exports.pagination = pagination;