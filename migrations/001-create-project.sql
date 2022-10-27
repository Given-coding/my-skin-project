create table Users (
id integer primary key AUTOINCREMENT,
Names text,
Surname text,
Contacts text,
Denominations_id integer,
Agegroup_id integer,
Gender_id integer
);

create table Denominations (
id integer primary key AUTOINCREMENT,
Race text
);

create table Agegroup(
id integer primary key AUTOINCREMENT,
Age integer
);


create table Gender(
id integer primary key AUTOINCREMENT,
Sex text
);

create table Skintexture (
id integer primary key AUTOINCREMENT,
typesOfSkin text,
Recommendations_id integer
);

create table UserSKinTexture (
id integer primary key AUTOINCREMENT,
User_id integer,
Skintexture_id integer
);


create table Recommendations(
id integer primary key AUTOINCREMENT,
ProductsIngredients text
);

