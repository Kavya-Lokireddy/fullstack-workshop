select concat(upper(substring_index(name,' ',-1)),', ',substring_index(name,' ',1)) as formatted_name,
lcase(concat(substring_index(name,' ',1),'.',substring_index(name,' ',-1),'@company.com'))as email,
concat(upper(left(substring_index(name,' ',1),1)),upper(left(substring_index(name,' ',-1),1))) as initials 
from employees;