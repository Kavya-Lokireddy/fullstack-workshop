delimiter //
create trigger trg_salary_audit 
after update on employees
for each row
begin
	insert into salary_audit(employee_id,old_salary,new_salary,change_percent) 
    values(old.id,old.salary,new.salary,
    ((new.salary-old.salary)/old.salary)*100);
end //
delimiter ;

update employees
set salary=80000 where id=1;

update employees set salary=50000 where id=9;

INSERT INTO employees (name, department, salary, hire_date, manager_id) VALUES 
('Pooja Reddy','HR',60000.00,'2020-06-18',2);

update employees set salary=80000 where id=12;

select * from employees;
select * from salary_audit;