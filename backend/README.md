# API Documentation
---

## Available Endpoints on the API

### GET Routes
- <strong> Populate Data [/populate] </strong>
<lb>
This endpoint is used to populate the data from the external API to the Database.

##### Request Method: GET
  ###### Response
    Status Code: 200 OK
    Content-Type: application/json

<br>

- <strong> Get All Data [/data/all] </strong>
<lb>
This endpoint returns all the data available in the API.

##### Request Method: GET
  ###### Response
    Status Code: 200 OK
    Content-Type: application/json

<br>

- <strong> Get Paginated Data [/data/paginated] </strong>
<lb>
This endpoint returns paginated data based on the specified page and limit parameters.

##### Request Method: GET
  ###### Query Parameters:
    page (number, required): The page number for pagination.
    limit (number, required): The maximum number of records per page.

  ###### Response
    Status Code: 200 OK
    Content-Type: application/json

<br>

 - <strong> Get Album by ID [/album/:id] </strong>
<lb>
This endpoint retrieves a specific album by its ID.

 ##### Request Method: GET
   ###### Path Parameters:
     id (string, required): The ID of the album.

   ###### Response
     Status Code: 200 OK
     Content-Type: application/json

  <br>

### POST Route

  - <strong> Create Album [/createalbum/:id] </strong>
 <ld>
This endpoint is used to create a new album for a specific user.

 ##### Request Method: POST
   ###### Path Parameters:
     id (string, required): The ID of the user.

   ###### Request Body:
     albumName (string, required): The name of the album.

   ###### Response
     Status Code: 201 OK
     Content-Type: application/json


### PATCH Route

   - <strong> Update Album [/updatealbum/:id] </strong>
   <lb>
This endpoint is used to update the title of an existing album.

 ##### Request Method: PATCH
   ###### Path Parameters:
     id (string, required): The ID of the album.

   ###### Request Body:
     albumTitle (string, required): The new title of the album.

   ###### Response
     Status Code: 200 OK
     Content-Type: application/json


### DELETE Route

 - <strong> Delete Album [/deletealbum/:id] </strong>
     <lb>
This endpoint is used to delete an album by its ID.

 ##### Request Method: DELETE
   ###### Path Parameters:
    id (string, required): The ID of the album.

   ###### Response
     Status Code: 200 OK
     Content-Type: application/json


Note: Replace :id in the path parameters with the actual ID values when making requests.

