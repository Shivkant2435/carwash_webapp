## Car - wash backend

---
Backend- NodeJs

Database - Mysql (https://freedb.tech/)

Frontend - HTML, CSS
---


**User register : **


```curl
curl --location --request POST 'localhost:3000/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "SK",
    "last_name": "GGG",
    "email": "adhsadkhask@qlkwjlsa.com",
    "password": "asdasd1232"
}'
```

**User Login : **


```curl
curl --location --request GET 'localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "contactme@gmail.com",
    "password": "asdasd1232"
}'
```

```curl
curl --location --request GET 'localhost:3000/users/getUsers' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3RfbmFtZSI6IlNLIiwibGFzdF9uYW1lIjoiR0dHIiwiZW1haWwiOiJhZGhzYWRraGFza0BxbGt3amxzYS5jb20iLCJwYXNzd29yZCI6ImFzZGFzZDEyMzIiLCJjcmVhdGVkIjoiMjAyMi0xMi0wNlQwNjozMTozMy4wMDBaIiwiaWF0IjoxNjcwMzA5MzkzLCJleHAiOjE2NzAzMTA4MzN9.PxQVHsuFWvVZVtDMCKyl798eEyzZxEdH0fOnG9Ey7bc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "adhsadkhask@qlkwjlsa.com",
    "password": "asdasd1232"
}'
```

**Car wash place register : **


```curl
curl --location --request POST 'localhost:3000/places/carwash-place' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3RfbmFtZSI6IlNLIiwibGFzdF9uYW1lIjoiR0dHIiwiZW1haWwiOiJhZGhzYWRraGFza0BxbGt3amxzYS5jb20iLCJwYXNzd29yZCI6ImFzZGFzZDEyMzIiLCJjcmVhdGVkIjoiMjAyMi0xMi0wNlQwNjozMTozMy4wMDBaIiwiaWF0IjoxNjcwMzA5MzkzLCJleHAiOjE2NzAzMTA4MzN9.PxQVHsuFWvVZVtDMCKyl798eEyzZxEdH0fOnG9Ey7bc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "John-car-wash-center",
    "address": "Greater Noida",
    "daily_slot":"5",
    "available_slot": "5"
}'
```


**Search car wash place (by name )- **
```curl
curl --location --request GET 'localhost:3000/places/search-carwash?query=john'
```


**Slot booking : **


```curl
curl --location --request POST 'localhost:3000/places/carwash-booking' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZmlyc3RfbmFtZSI6IlNLIiwibGFzdF9uYW1lIjoiR0dHIiwiZW1haWwiOiJhZGhzYWRraGFza0BxbGt3amxzYS5jb20iLCJwYXNzd29yZCI6ImFzZGFzZDEyMzIiLCJjcmVhdGVkIjoiMjAyMi0xMi0wNlQwNjozMTozMy4wMDBaIiwiaWF0IjoxNjcwMzA5MzkzLCJleHAiOjE2NzAzMTA4MzN9.PxQVHsuFWvVZVtDMCKyl798eEyzZxEdH0fOnG9Ey7bc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "placeId": 1
}'
```
