<div style="font-family: 'Cambria Math';">

# BACKEND WORKFLOW AND METHODS

## [[Contents]]

1. Program flow
2. Controllers
   - 2.1 `clothingItems.js`
   - 2.2 `users.js`
3. Routes and attached controllers
   - 3.1 `index.js`
   - 3.2 `clothingItems.js`
   - 3.3 `users.js`
   - 3.4 `signins.js`

---

### 1 Program flow

1. Initialise express application and set PORT.
2. Connect to database at specified address
3. Other middleware
4. Routes

   - 4.1 `/` to `routes/signins.js` `signinRouter`
     - 4.1.1 `/signup` to `controllers/users.js createUser`
     - 4.1.2 `/signin` to `controllers/users.js login`
   - 4.2 `/` to `routes/index.js` `mainRouter`
     - 4.2.1 `/users` to `utils/auth.js` to `routes/users.js` `userRouter`
     - 4.2.2 `/items` to `routes/clothingItems.js` `clothingItemsRouter`

## <ins>PATHS

From landing page `/`<br>

- POST `/signup`<br>
- POST `/signin`

From `/users` auth<br>

- GET `/me`<br>
- PATCH `/me`<br>

From `/items` <br>

- GET `/`<br>
- `auth` POST `/`<br>
- `auth` DELETE `/:itemId`<br>
- `auth` PUT `/:itemId/likes`<br>
- `auth` DELETE `/:itemId/likes`<br>

---

### _From landing page_`/`

---

#### POST `/signup`

`createUser` is called. Function is called when a new user is signing up.

1. Gets `name`, `avatar`, `email`, `password` from `req.body`
2. Creates a hashed password using `bcrypt.hash`
3. Creates a `user` object:
4. Sends the following object in `res.send`:<br>

```
data:{
  name: user.name,
  avatar: user.avatar,
  email: user.email
}
```

#### POST `/signin`

`login` is called. Function is called when a returning user is signing in.

1. Gets `email`, `password` from `req.body`
2. Sends bad request response if email or password not found
3. Calls `findUserByCredentials(email, password)` which returns `user` object
   - 3.1 Gets `name`, `email`, `avatar` from `user`
   - 3.2 Calls `jwt.sign` to create user's token from `user._id` with `JWT_SECRET` salt with one week expiration
   - 3.3 Response with 'json-ised' information returned:

```
res.json({
  token,
  name: name,
  email: email,
  avatar: avatar
})
```

---

### _From `/users` auth_

---

`auth` is the middleware called before the proceeding routes. It verifies that a user can access a route by authenticating the provided token.

#### GET `/me`

`getCurrentUser` is called. Returns a user object with user information (`User` schema).

1. Get's user id from the request
2. Look in the `User` schema of documents for the id
   - 2.1 Send the user document in the `res`ponse if user id is found
   - 2.2 Return `DocumentNotFound` error and handle in catch block

#### PATCH `/me`

`updateProfile` is called. Returns supplied user information upon successful update.

1. `name` and `avatar` are retrieved from the request body
2. `userId` is retrieved from the `user` field in the request (the `user` field was created when the user was authenticated in the `auth` middleware)
   - 2.1 Send bad request response if name and avatar are undefined, exit function
3. `name` and `avatar` are defined, so create an object `update` with corresponding fields with these values.
4. Create a `currentUser` constant that is asynchronously assigned the new (`new: true` option) data returned by `findByIdAndUpdate()`.
   - 4.1 If successful, return `currentUser` in the response
   - 4.2 Else, return with an error

---

### _From `/items`_

---

#### GET `/items`

`getItems` called. Finds all the documents in the `ClothingItems` schema and returns them as a JS object.

#### `auth` POST `/`

`createItem` called. Creates a new clothing item in the database.

1. Get `name`, `weather`, and `imageUrl` from request body
2. Get `owner` (user id) retrieved from `req.user`
3. New item is created in database with retrieved variables using `ClothingItems.create()`
   - 3.1 If successful, send the following object in the response
   ```
   {
     data: {
       name: name,
       weather: weather,
       imageUrl: imageUrl,
       owner: owner
     }
   }
   ```
   - 3.2 If unsuccessful, return with an error

#### `auth` DELETE `/:itemId`

`deleteItem` called. Removes an item from the database.

1. Locates the item using `ClothingItem.findOne()` with the id passed from `req.params.itemId`
   - 1.1 If successful obtains current user id from the `user` field in the request. Obtains item owner id from the returned document
     - 1.1.1 If user id and item owner id do not match, send forbidden error in request and exit
     - 1.1.2 Else, attempt to find the item by id in the database and remove it.
       - 1.1.2.1 If successful, return the removed item in the response:
       ```
       {
        data: {
          name: ,
          weather: ,
          imageUrl: ,
          owner: ,
          likes: {...}
        }
       }
       ```
       - 1.1.2.2 If unsuccessful, return with an error.

#### `auth` PUT `/:itemId/likes`

`likeItem` called. Adds user id to the list of users in the 'likes' field of the clothing item in the database.

1. Attempt to find the clothing item by id and update its fields, adding the user id to the list of likes on the clothing item
   - 1.1 If succeed, return item to the user in the response:
   ```
   {
    data: {
      name: ,
      weather: ,
      imageUrl: ,
      owner: ,
      likes: {...} // user id added to this list
    }
   }
   ```
   - 1.2 If fail, return with error.

#### `auth` DELETE `/:itemId/likes`

`dislikeItem` called. Removes user id from list of likes on clothing item in the database. Works very similarly to the `likeItem` controller.

1. Attempt to find the clothing item by id and update its fields, removing the user id from the list of likes on the clothing item
   - 1.1 If succeed, return item to the user in the response:
   ```
   {
    data: {
      name: ,
      weather: ,
      imageUrl: ,
      owner: ,
      likes: {...} // user id removed from this list
    }
   }
   ```
   - 1.2 If fail, return with error.

---

## Helper Functions

### `findUserByCredentials(email, password)`

1. Calls `findOne`
   - 1.1 If user's document is not found return `LoginError` in `Promise.reject`
   - 1.2 If user's document is found call `bcrypt.compare` to compare provided password and the user password
     - 1.2.1 If passwords do not match return `LoginError` in `Promise.reject`
     - 1.2.2 If passwords match, return `user` object which is document from database minus the password

### `auth(req, res, next)`

1. Gets `authorization` from `req.headers`
2. Checks if `authorization` starts with 'Bearer '
   - 2.1 If false, return authorization error
3. Remove 'Bearer ' from token and assign it to `token`
4. Declare variable `payload`
5. Verify that token is valid using `jwt.verify(token, JWT_SECRET)` and assign to `payload`
6. Assign `payload` to `req.user` and move on.

   </div>
