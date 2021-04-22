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

function RateProduct(products, name, rate, userId) {
    
    products.find(function(product, index) {
        if(product.name !== name)
            {return false} else {
              product.ratings.push({
                  userId: userId,
                  rate : rate
              })
        }})
        console.log(products)
}

RateProduct(products, "TV", 5, 'fg12cy');