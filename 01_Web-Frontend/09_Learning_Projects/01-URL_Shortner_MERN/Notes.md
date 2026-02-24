


- url short 
- redirect 
- custom url
- user sign / sign up
- analytics



- types of structure 
- basic 
- mvc
- fsa feature slice architecture
- ddd

- require vs modules
- type in package.json


* Get - redirection
* Post -redirection

 > nano id module

 👍 body parser
- url encoder  {url encode payloads}

nanoid npm package 

get request.query

post request.body

mongoose config connect 

npm i dotenv to run env

 
 dotconfig(./.env)
 
 
 schema build in model folder

mongodb define properties Important

shortUrlScheme.index({short_url:1,user:1},{unique:true})

new urlSchema

{ can be update before save like adding field }

newrl.save 

.save function to save on db before that data is in memory


<!-- urlSchema.findOne() -->

- res.redirect 
- 



#### Redirection 

- routes/
- controlers/ //{bussines logic} control work flow of routes call ,validation and more 
- service/ do specific work not have req , res 
- {Dao !important to check } (data access object) {create query for db mainly mongodb , for tasks}
-utils {functions for reuse to specific task }

- Atomic count ( nanoid + count )
-  

res.json vs res.status vs res.send like more methods 

process.env.APP_URL



## Frontend 

- infinite rerenders
- two way binging {like value in input and onChange }
  
- creating axios instance 

### custom url and user with authentication  


- stateless or statefull auth arcitecture 

- statefull auth {basically have a sesean id for auth so that state }
- 

- load  balance 
- round robin 

stateless arch  {  }


- token { jwt }
-  configuration and payload 
-  

 { name ,email} --->>  jwt payload 

 {usedid }   prefered  --->> redis 

 
configuration {
    same  site-> none lax strict {csrf},
 secure  -> true HTTPS,
 http only  -> true  js not eccess,
 max age -> jwt duration of valid,
 }

local storage   X function , token request 

cookies  {more secure https true } ->> auto .. set , token req with 


secret key -> xyz  jwt sign payload and configuration + secret 
jwt.verify {token , secret}

jwt -> {microserver (middleware create),not centralised auth }

{access token , refresh token }

refresh token ( to control user session) ,refresh token delete make user log out like,

=========

mongodb 

user ref in shortUrl model [mongodb object size 16mb]

circular refrencing 

gravatar in avatar inn user model 



conflict error return in auth service on finduserbyemail is true return from dao user.dao 



jwt service to sign payload , process.env.JWT_SECRET , {expiresIn:time}


cookieOptions --> {httpOnly:true,secure:process.env.NODE_ENV === "production",sameSite: "lax",maxAge: 1000 * 60 * 60 * 24 * 7}


==== Fontend development =======


file base routing and {code first} code base routing 

route {routes of our components like a},route tree {which child is part of other parent or other}, route layout { app component likea}


setting up rtk store in app  

reducer , slices , actions 


=========

Scalibility 

vertical scaling {increasing ram ,cpu like}
horizental scaling 

 
load balancer  {round robin,least traffic , least resource ,  }

- caching {redis - lru,lfu}
- cdn 
- auto scaling
- indexing
- read replicas 
- sharding 
- 


























