const users = [{
    id: '1',
    name: 'Nitish',
    email: 'nit@gmail.com',
    age: 23
}, {
    id: '2',
    name: 'Navjot',
    email: 'navjot@gmail.com',
    age: 23
}, {
    id: '3',
    name: 'Amit',
    email: 'Amit@gmail.com',
    age: 22
}]


let posts = [{
    id: '11',
    title: 'to dance',
    body: 'on rainy season',
    published: true,
    author: '1'
}, {
    id: '12',
    title: 'to run',
    body: 'every morning',
    published: false,
    author: '1'
}, {
    id: '13',
    title: 'to play',
    body: 'on saturday',
    published: true,
    author: '2'
}]

const comments = [{
    id: '102',
    text: 'This worked well , Thanks!',
    author: '2',
    post: '11'
}, {
    id: '103',
    text: 'Glad you enjoyed it',
    author: '2',
    post: '12'
}, {
    id: '104',
    text: 'This did work well',
    author: '1',
    post: '12'
}, {
    id: '105',
    text: 'Nevermind . I got the work.',
    author: '3',
    post: '13'
}]

const db = {
    users,
    posts,
    comments
};

export { db as default }