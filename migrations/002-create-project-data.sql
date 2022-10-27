INSERT INTO Users (Names, Surname, Contacts, Denominations_id, Agegroup_id, Gender_id)
values ("Henry", "Titus", "074 365 2452", "1", "3", "1"),
       ("John", "Mao", "082 475 3425", "2", "2", "1"),
       ("Katharine", "Jacobs", "076 535 5631", "3", "1", "2");

INSERT INTO Denominations (Race)
values ("European"),
       ("African"),
       ("Asian"),
       ("Other");


INSERT INTO Agegroup (Age)
values ("55-64"),
       ("26-55"),
       ("12-25"),
       ("65+");


INSERT INTO Gender (Sex)
values ("Male"),
       ("Female"),
       ("Other");

INSERT INTO Skintexture (typesOfSkin, Recommendations_id)
values ("Normal skin", "1"),
       ("Oily skin", "2"),
       ("Dry skin", "3");


INSERT INTO Recommendations (ProductsIngredients)
values ("Retimol/Niacinamide"),
       ("Ceramides/Peptide"),
       ("Glycerine/Petrolatum/Lanolin");


INSERT INTO UserSkintexture (User_id, Skintexture_id)
values ("1", "1"),
       ("2", "2"),
       ("3", "3");
       
    
