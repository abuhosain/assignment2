
# Backend with mongoose 

This project is created by mongoose and i am using zod for validation


## Code run

To deploy this project run

```bash
  npm run start:dev
```

## Code error fix

To find and fix this project code error i am using eslint and prettier

```bash
  npm run lint
  npm run lint:fix
```
## API Reference

#### create a single product

```http
  POST /api/products
```

#### Get all products

```http
  GET /api/products
```

#### Get  a single products

```http
  GET /api/products/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### update a single products

```http
  PUT /api/products/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to update |

#### DELETE single products

```http
  DELETE /api/products/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |



#### search products

```http
  GET /api/products?searchTerm=iphone
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.with proudct name|

 

#### create a single order

```http
  POST /api/orders/
```
#### get all  order

```http
  GET /api/orders/
```

#### get  order by email

```http
  GET /api/orders?email=level2@programming-hero.com
```


## Documentation

[Documentation](https://linktodocumentation)

Hi, 
    I am abu hosain, using this project many technologis they are express,mongoose.
    Also i use mongodb database and my helping and tools is postman, vscode or also many others
    
