# Bookward

**Bookward** is an app that allows K-12 school librarians to manage class sets of books. In it's MVP version, this will feature the ability to see the catalog of a class set books (these would be all those novels you read as a class, usually with your English teacher). Librarians will be able to select a set and check it out to a specific teacher, including a quantity of books taken and the quantity returned. 

**In future expansion**, the librarian will be able to run reports showing how many items in each class set have been "lost" and need to be replaced. Librarians will also be able to support teachers with checking out individual items to individual students. In the future, this app should also be able to "reserve" a class set for a teacher for a specific number of weeks in order to help teachers better coordinate their units. As these functionalities expand, it is likely that users would like to be able to generate reports based on a variety of criteria in order to manage the flow of books into and out of the school library. Users may at this point also want to be able to grant teachers access to this system in order to manage their class set reservations and browse the class set catalog. This will require establishing two different roles attached to authentication, showing additional views based on the role of the user.

## User Stories

* A user should be able to add books to the books database, including title, author, and quantity
* A user should be able to identify how many copies of a class set have been checked out, and how many have been returned
* A user should be able to delete books
* A user should be able to add teachers to the teacher database including name and subject area
* A user should be able to delete teachers
* A user should be able to edit teacher information
* FUTURE - A user should be able to "check out" or "check in" sets of books to teachers (i.e., edit availability property and assign a teacher to the "checked out by" property)
* FUTURE - A user should be able to edit book information, including title, author, and quantity

## Technologies Used

### For Planning & Designing:
* [Trello](https://trello.com/b/cqJ2XB2A/final-project) - 
* [Mockflow](https://wireframepro.mockflow.com/) - Free wireframe app
* [Adobe Color](https://color.adobe.com/create/color-wheel) - Free palette generator
* [Wordoid] (https://wordoid.com/) - Generates nonsense words which were really helpful for creating a project name

### For implementation:
* MongoDB (Refactored from SQL & Sequelize)
* Mongoose
* Express
* Node.js
* React

### For deployment:
* [Netlify]()UPDATE THIS LATER WITH CORRECT URL
* [Heroku]()UPDATE THIS LATER WITH CORRECT URL

## Wireframes
### Books view on different platforms:
This view is the display of the books information including the ability to select a book and checkout a given quantity to a specific teacher:
![Wireframe of desktop books view](/images/books-desktop-wireframe.png "Wireframe of desktop books view")
![Wireframe of tablet books view](/images/books-tablet-wireframe.png "Wireframe of tablet books view")
![Wireframe of mobile books view](/images/books-mobile-wireframe.png "Wireframe of mobile books view")

### Teachers view on different platforms:
This view is the display of the individual teacher information, including their general subject area. In the future Bookward will add additional functionality that will change how this looks. This will include adding additional data models for courses and students.
![Wireframe of desktop teachers view](/images/teachers-desktop-wireframe.png "Wireframe of desktop teachers view")
![Wireframe of tablet teachers view](/images/teachers-tablet-wireframe.png "Wireframe of tablet teachers view")
![Wireframe of mobile teachers view](/images/teachers-mobile-wireframe.png "Wireframe of mobile teachers view")

## Data Models/ERD
This is the first iteration of the Entity Relationship Diagram. As this is built out and additional functionalities are added, this diagram will grow and be replaced.
![ERD](/images/books-erd.png "ERD")

## Housekeeping
[] Implement axios consistently
    [] 'All' route
    [] 'Show' route
[] Implement hooks
[] error 400 due to logo size

## Future things
[] Upload care for cover images
[] auth0
[] icons/footer
[] CK Editor for text editing of descriptions
[] 