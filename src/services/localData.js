const localData = [
    {
        "id": 1,
        "price": 35.90,
        "isRecommended": true,
        "description": "Calabresa",
        "ingredients": "Mussarela, Molho de Tomate, Calabresa, Cebola e Oregano",
        "doughs": [
            { 
                "id": 1,
                "name": "Tradicional"
            },
            {
                "id": 2,
                "name": "Sem Gluten"
            },
            {
                "id": 4,
                "name": "Fina"
            },
        ],
        "sizes": [
            {
                "id": 1,
                "name": "Média",
                "size": 30,
                "slices": 6,
            },
            {
                "id": 2,
                "name": "Grande",
                "size": 32,
                "slices": 8,
            },
            {
                "id": 3,
                "name": "Super",
                "size": 64,
                "slices": 16,
            },
        ],
        "img": "calabresa.jpg"
    },
    {
        "id": 2,
        "price": 38.90,
        "isRecommended": false,
        "description": "Frango com Catupiry",
        "ingredients": "Mussarela, Molho de Tomate, Frango desfiado, Catupiry, Cebola e Oregano",
        "doughs": [
            {
                "id": 1,
                "name": "Tradicional"
            },
            {
                "id": 2,
                "name": "Sem Gluten"
            },
            {
                "id": 3,
                "name": "Integral"
            },
            {
                "id": 4,
                "name": "Fina"
            }
        ],
        "sizes": [
            {
                "id": 1,
                "name": "Média",
                "size": 30,
                "slices": 6,
            },
            {
                "id": 2,
                "name": "Grande",
                "size": 32,
                "slices": 8,
            }
        ],
        "img": "frango_catupiry.jpg"
    },
    {
        "id": 3,
        "price": 43.90,
        "isRecommended": true,
        "description": "Sensação",
        "ingredients": "Chocolate ao leite e Morango",
        "doughs": [
            {
                "id": 1,
                "name": "Tradicional"
            },
            {
                "id": 2,
                "name": "Sem Gluten"
            },
            {
                "id": 3,
                "name": "Integral"
            }
        ],
        "sizes": [
            {
                "id": 2,
                "name": "Grande",
                "size": 32,
                "slices": 8,
            },
            {
                "id": 3,
                "name": "Super",
                "size": 64,
                "slices": 16,
            },
        ],
        "img": "sensacao.jpg"
    }
];

export default localData;