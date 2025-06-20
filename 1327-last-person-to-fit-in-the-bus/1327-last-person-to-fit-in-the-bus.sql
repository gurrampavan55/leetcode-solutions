# Write your MySQL query statement below
# Write your MySQL query statement below
with cte as(
    select person_name ,turn, sum(weight) over(order by turn)rnk
    from Queue 
)
select person_name from cte
where rnk<=1000
order by rnk desc
limit 1