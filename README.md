# RESTful movie database API. 
See it in action: https://mmicalt-movie-database-api.herokuapp.com/

App server is running on Heroku and database is provided by mLab.

available routes: 

GET / homepage with routes list

GET /movies ==> list of all movies

GET /movies/[order_by]/[direction] ==> list of all movies ordered by provided parameters
        where [order_by] = one of movie parameters, e.g. Title, Year, imdbRating; 
        [direction] = asc || desc or 1 || -1
        
PUSH / movies ==> find a movie in OMDB database and add it to API database. Send [title] as title of the movie in the request body to access the route. Eg. endpoint/movies --> POST --> req.body = {title: 'My Movie Title'}

GET /comments ==> list of all comments

GET /comments/[movie_id] - list of all comments featuring movie with _id = [movie_id]

POST /comments ==> add new comment. Provide a comment as [text], and movie id as [references]. e.g. url/comments POST ==> req.body = {text: 'Nice movie', references: '1234ref678'}
