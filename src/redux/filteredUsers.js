const getFilteredUsers =(users,filterWord) => {
    return users.filter(user => user.name.toLowerCase().includes(filterWord.toLowerCase()))
}
export default getFilteredUsers