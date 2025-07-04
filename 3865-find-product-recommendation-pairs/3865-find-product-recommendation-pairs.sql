SELECT
P1.product_id AS product1_id,
P2.product_id AS product2_id,
PI1.category AS product1_category,
PI2.category AS product2_category,
COUNT(P1.user_id) AS customer_count
FROM ProductPurchases P1
INNER JOIN ProductPurchases P2 ON P1.user_id=P2.user_id AND P1.product_id<P2.product_id
LEFT JOIN ProductInfo PI1 ON P1.product_id=PI1.product_id
LEFT JOIN ProductInfo PI2 ON P2.product_id=PI2.product_id
GROUP BY product1_id,product2_id
HAVING COUNT(P1.user_id)>=3
ORDER BY customer_count DESC,product1_id,product2_id