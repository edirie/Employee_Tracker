INSERT INTO department (dep_name)
VALUES ("SALES"),
       ("LEGAL"),
       ("ENGINEERING"),
       ("FINANCE");
       
INSERT INTO roles (title, salary, department_id)
VALUES ("Salesman", 40000.00, 001),
       ("Lawyer",  70000.00, 002),
       ("Senior Engineer", 85000.00, 003),
       ("Accountant", 60000.00, 004);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwyane", "Wade", 001, 23),
       ("Lebron", "James", 002, 60),
       ("Kawhi", "Leonard", 003, 11),
       ("Giannis", "Antetokounmpo", 004, 30);