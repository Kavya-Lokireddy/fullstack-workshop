select e.id,e.name,e.department from employees e where not exists 
(select 1 from assignments a where a.employee_id=e.id);


