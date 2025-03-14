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
    "status": "payment_pending"
  }
```