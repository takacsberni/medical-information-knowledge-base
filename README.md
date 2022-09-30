# Medical knowledge base management system
![alt text](https://github.com/takacsberni/medical-information-knowledge-base/blob/master/home-screenshot.png?raw=true)



### Built With
- Java + Spring + Maven
- Postgresql
- React + TypeScript
- React-Bootstrap



## Getting Started
### You can clone the project:
git clone https://github.com/takacsberni/medical-information-knowledge-base.git



### Prerequisites
- PSQL: a database for the project was made with Postgresql. To be able to use the database, you have to set up a PostgreSQL database. 
Please define a new database with createdb database_name.
- 
-  
- You need to give your PSQL database name, username, and password in the file 'application.properties'
- NPM: run npm install
- Postman - if you want to test backend services, which were not implemented in the frontend (like editing a disease)

### Installation


## Usage
* Frontend: you can run `npm start', and open http://localhost:3000 to view it in your browser.

* Backend: after <a href="https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database">setting up</a> the PSQL database and filling out application.properties with the necessarily information:
    * in the project folder run 'mvn clean package' - this will generate a .jar file in the 'target' folder
    * you have to add some variables to your system by running:
        * export PSQL_USERNAME=your_username
        * export PSQL_PASSWORD=your_password
        * export PSQL_DB_NAME=your_db_name
* After these steps you can run the backend by running:
    * java -jar target/knowledge-base-0.0.1-SNAPSHOT.jar 
* The backend use the port 8080 (http://localhost:8080/)

- Postman - a collection for testing backend endpoints (login needed):
https://tinyurl.com/29yw59pf


![alt text](https://github.com/takacsberni/medical-information-knowledge-base/blob/master/color_themes.png?raw=true)

## Contact

Bernadett Takács - takacsberni@gmail.com

Project Link: [https://github.com/takacsberni/medical-information-knowledge-base](https://github.com/takacsberni/medical-information-knowledge-base)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
