# Write your MySQL query statement below
with cte as(        
            select *,row_number()over (order by id desc)+id as rn
            from Stadium
            where people >= 100
            )
select id,visit_date,people
from cte 
where rn in (select rn from cte
             group by rn 
             having count(*) >= 3
)
order by visit_date;