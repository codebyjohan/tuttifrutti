# Grupparbete i kursen Backendprogrammering och databaser

### Uppgift
Ni ska planera och genomföra ett ”Webbserverprojekt” i grupper som utgår från en databas i MySQL
respektive MongoDB.

Ni ska utgå från ett tema som ni själva väljer, kan vara t ex samling av musik, film eller spel,
utbildning (kan vara någon typ av inlärning), förening (t ex idrottsförening). Utgångspunkten ska vara
att användaren är i fokus och att ni tänker på hur man ska kunna använda databaserna oavsett det
tema ni väljer.

Ni planerar utifrån det tema ni väljer och designar relationsdatabasen (MySQL) med t ex ER-diagram.
För den del ni väljer att använda med MongoDB gör ni en kortfattade planering över vad syftet är för
databasen. Därefter gör ni en planering för erat Rest API med ”Endpoints” utifrån databaserna. Ni gör
också en Frontend-del med HTML, CSS och Javascript (med Fetch) för utvalda delar. Grupperna väljer
själva om ni ska använda Vue Vite eller ”vanlig” Javascript.

### Betygskriterier
* Ni bestämmer ett tema för databasen och vad som ska göras med MySQL respektive
MongoDB. Det som kräver mer kopplingar mellan tabeller dvs den större delen gör ni med
MySQL och det som ni kan bestämma ska ha en mer avgränsad del gör ni med MongoDB t ex
en blogg, recensioner.
* Ni ska göra en planering där MySQL-databasens design framgår genom t ex ER-diagram och
MongoDB-databasens syfte framgår genom en kortfattad beskrivning. Ni ska också planera
hur erat Rest API ska vara upplagd utifrån erat tema och databasernas design och upplägg.
* Ni skapar tabeller för MySQL-databasen med SQL genom CREATE TABLE. MySQL-databasen
ska vara normaliserad utifrån syftet dvs inte innehålla redundans så långt det är möjligt och
använda en-till-många-förhållanden, många-till-många-förhållanden utifrån syftet och
innehålla referensintegritet (primary key och foreign key). Ni använder också unika index där
det behövs för att kontrollera integriteten på er data.
* MySQL-databasen ska innehålla minst fem tabeller.
* Ni ska skriva SQL-frågor som visar, lägger till, uppdaterar och kan ta bort relevant data
(CRUD) för MySQL-databasen. Databasens syfte ska också framgå genom era SQL-frågor t ex
INNER JOIN med kopplingar mellan tabeller och statistik med functions t ex SUM, COUNT.
* Ni tänker ut hur er MongoDB-databas ska fungera utifrån temat och syftet. Här behöver inte
planeringen vara lika omfattande som för MySQL utan ni kan börja arbeta med koden i Node-
applikationen så snart ni vet syftet med MongoDB-databasen.
* MongoDB-databasen (den delen i Node.js med Mongoose) ska innehålla CRUD-
funktionalitet.
* Serverside-delen i Node-applikationen ska använda sig av Express och ha ett Rest API med
Endpoints för databasernas upplägg och design med CRUD-funktionalitet och komma åt
annan relevant data enligt ovan krav för respektive MySQL och MongoDB. Ni testar alla
endpoints med Insomnia eller Postman.
* Ni gör en Frontend-del med HTML, CSS och Javascript (med Fetch) för delar av Node-
applikationen med möjlighet att kunna visa och lägga till data. Syftet är att man ska få en
känsla av applikationens syfte och kunna göra vissa delar ihopkopplade med Serverside-
applikationen (Backend) genom att använda Fetch i Javascript. Om gruppen vill använda Vue
Vite går det bra men det går också bra att använda ”vanlig” Javascript. Det viktiga är att ni
kommer överens om hur ni vill arbeta med frontend-delen.

<img src="https://github.com/codebyjohan/tuttifrutti/assets/60930220/588fed82-58cf-48dd-89a9-c9ddbbd9016d" width="600" height="300">


