const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'crab', likes: 'ocean' },
    { name: 'octopus', likes: 'ocean' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 3;

    return container;
})

console.log(usersByLikes);