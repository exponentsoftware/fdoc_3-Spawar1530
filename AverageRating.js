const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
];

function AverageRating(users, productName) {

    users.find(function(user, index) {
        if(user.name !== productName)
            {return false} else {
                var total = 0
                user.ratings.map((rate)=> {
                    total += rate.rate;
                    var avg = total / rate.length;
                    return avg
                })
                
              
            }
    })
}

console.log(AverageRating(products, "mobile phone"))