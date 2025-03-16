- `npm i`
- `npm run db:setup`
- `npm start`

## Routes
- ***Endpoint*** `GET / -> home page`

- ***Endpoint*** POST /clients
```json
  {
    "name": "Flávio",
    "email": "flavio@email.com"
  }
```

- ***Endpoint*** POST /budgets
```json
  {
    "client_id": 1,
    "short_description": "Grade",
    "description": "Confecção de grade e portão",
    "price": 1000000,
    "status": "payment_pending"
  }
```

- ***Endpoint*** GET /budgets -> list all budgets

- ***Endpoint*** POST /tickets
```json
{
  "barcode": "03399066384090000057747702701013810160000050882",
  "date": "10/03/2025",
  "value": 508.82 
}
```