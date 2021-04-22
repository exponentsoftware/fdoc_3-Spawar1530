const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    function SignUp(users, id, username, email, password, createdAt, isLoggedIn) {


        users.forEach((user) => {
            if(user.username !== username){
                users.push({
                    _id : id,
                    username : username,
                    email : email,
                    password : password,
                    createdAt : createdAt,
                    isLoggedIn : isLoggedIn
                })
            } else{
                console.log((`user already exists`))
            }
        })
        console.log(users)

    };

console.log(SignUp(users, "ghderc", "Roma", "thomas", "password", "creats", "isLoggedIn"))
