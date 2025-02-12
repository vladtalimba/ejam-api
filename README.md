# EJam Superhero API

Node version: 20.15.1

Note:

This task was fun and simple but there are some improvements I would make while working with a colleague:
    - One of us could perhaps work on the frontend while the other works on the back end so conflicts are avoided when pushing 
      new changes to Git.
      
    - In the back end, valdiation is done through basic if statements. On top of that, adding validation to the DTO would be 
      a good idea. For that, we could use a package such as class-validator, which is also recommended in the NestJs documentation.

    - The NestJs API could be connected to a real database. Instead of saving new entries in memory they would be stored inside
      a databse such as MongoDB (NestJs has good integration with MongoDB through Mongoose).
    
    - The frontend also needs some work. Mainly some CSS styling but the UI itself could be done better. My idea for this is to
      have the data table displayed inside a separate page, and somewhere in the header display an Add Superhero button.
      The button will dislplay a pop-up window with some input fields for each property. 

If I had more time:

    - If I were to build upon this application, I would probably turn it into a data management application for an online store
      for example. Where people would manage their orders, refunds, invoices etc. This would also require building a more complex API with authentication and security such as protected routes and user roles.

