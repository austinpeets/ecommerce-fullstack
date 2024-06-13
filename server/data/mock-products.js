const products = [
    {
        name: "Mega Men® Multivitamin",
        price: 29.99,
        stock: 100,
        description: "Complete multivitamin for men",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw011abf00/images/large/900253_left_1.jpg",
        category: "Multivitamins"
    },
    {
        name: "Women’s Ultra Mega® Multivitamin",
        price: 27.99,
        stock: 120,
        description: "Complete multivitamin for women",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw1463c26a/images/large/367450_right_1.jpg",
        category: "Multivitamins"
    },
    {
        name: "Triple Strength Fish Oil",
        price: 19.99,
        stock: 80,
        description: "High-potency fish oil supplement",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw2874e692/images/large/378428_left_1.jpg",
        category: "Fish Oil & Omegas"
    },
    {
        name: "Pro Performance® AMP Amplified Wheybolic Extreme 60™ Original",
        price: 49.99,
        stock: 50,
        description: "Advanced whey protein for muscle growth",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw01b07f65/images/large/856729_left_1.jpg",
        category: "Protein & Fitness"
    },
    {
        name: "Beyond Raw® Chemistry Labs™ HMB",
        price: 34.99,
        stock: 70,
        description: "Supports muscle recovery and growth",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw0919f847/images/large/443945_left_1.jpg",
        category: "Protein & Fitness"
    },
    {
        name: "Total Lean® Lean Shake™ 25 - French Vanilla",
        price: 39.99,
        stock: 90,
        description: "Meal replacement shake for weight management",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dwd3ecb799/images/large/570003_left_1.jpg",
        category: "Weight Management"
    },
    {
        name: "Herbal Plus® Turmeric Curcumin 1050 MG Extra Strength",
        price: 24.99,
        stock: 110,
        description: "Powerful antioxidant and anti-inflammatory",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw2d8ff4aa/images/large/265312_left_1.jpg",
        category: "Herbs & Natural Remedies"
    },
    {
        name: "GNC AMP Men's Ripped Vitapak Program",
        price: 59.99,
        stock: 60,
        description: "Men's health and weight loss support",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw65215a6c/images/large/360322_left_1.jpg",
        category: "Vitapak Programs"
    },
    {
        name: "GNC Pets® Ultra Mega® Multivitamin Plus",
        price: 17.99,
        stock: 150,
        description: "Multivitamin for pets",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw91cc3fdf/images/large/528843_left_1.jpg",
        category: "Pet Supplements"
    },
    {
        name: "Pro Performance® Creatine Monohydrate",
        price: 14.99,
        stock: 200,
        description: "Supports muscle energy and performance",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw32c737b7/images/large/386386_left_1.jpg",
        category: "Creatine"
    },
    {
        name: "Herbal Plus® Grape Seed Extract 300 mg",
        price: 21.99,
        stock: 100,
        description: "Supports cardiovascular health",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw01b1cb9f/images/large/265414_left_1.jpg",
        category: "Herbs & Natural Remedies"
    },
    {
        name: "Pro Performance® Beta-Alanine",
        price: 19.99,
        stock: 70,
        description: "Supports muscular endurance",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dwe5b499e3/images/large/421593_left_1.jpg",
        category: "Protein & Fitness"
    },
    {
        name: "GNC Pro Performance® Bulk 1340 - Vanilla Ice Cream",
        price: 59.99,
        stock: 50,
        description: "High-calorie mass gainer",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dwd010eb60/images/large/386391_left_1.jpg",
        category: "Protein & Fitness"
    },
    {
        name: "Beyond Raw® LIT™ Pre-Workout - Icy Fireworks",
        price: 39.99,
        stock: 90,
        description: "Pre-workout energy booster",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dwaad6abfd/images/large/369531_left_1.jpg",
        category: "Pre-Workout Supplements"
    },
    {
        name: "Mega Men® Energy & Metabolism Vitapak® Program",
        price: 69.99,
        stock: 60,
        description: "Supports energy production and metabolism",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dwd20f9c52/images/large/315412_left_1.jpg",
        category: "Vitapak Programs"
    },
    {
        name: "GNC Total Lean® Burn 60™",
        price: 29.99,
        stock: 100,
        description: "Enhances calorie burning",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw74790c13/images/large/527522_left_1.jpg",
        category: "Weight Management"
    },
    {
        name: "Pro Performance® L-Glutamine",
        price: 24.99,
        stock: 120,
        description: "Supports recovery after exercise",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw5d327278/images/large/350256_left_1.jpg",
        category: "Amino Acids"
    },
    {
        name: "Herbal Plus® Milk Thistle 1300 MG",
        price: 23.99,
        stock: 80,
        description: "Supports liver health",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw63c11f39/images/large/265412_left_1.jpg",
        category: "Herbs & Natural Remedies"
    },
    {
        name: "GNC Milestones® Teen Multivitamin For Boys 12-17",
        price: 18.99,
        stock: 100,
        description: "Multivitamin for teenagers",
        img: "https://www.gnc.com/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-GNC-master/default/dw2d8ff4aa/images/large/265312_left_1.jpg",
        category: "Multivitamins"
    }
];

module.exports = products;
