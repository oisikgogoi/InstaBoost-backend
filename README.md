This is a RESTFUL Contact api created using Node , Express , Mongo DB and mongoose. It has JWT authentication along with user authorization. 

**These are the major features of this api:-

i) the following features are created using jwt authentication :-
  1) Login
  2) SignUp
  3) CheckOut the username and email of the current logged in user

ii) the second feature can be used only by  a logged in user. If a  user is not authorized, he cant access any of the following routes . Every resistered or Signed in user can store their  own contact info in a mongo database after their logged in and those contact information cannot be accessed by any other* users,  until and unless they are logged in using the user credentials of their desired account. It allows the current user to:-

  1) GET all the contacts
  2) GET a specific id using the user  id
  3) POST a new contact or Create a new contact
  4) PUT a contact or Update a contact using the user id
  5) DELETE a contact using the user id.



