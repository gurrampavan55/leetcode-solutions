WITH Buys AS (
    SELECT stock_name, price AS buy_price, 
           ROW_NUMBER() OVER (PARTITION BY stock_name ORDER BY operation_day) AS rn
    FROM Stocks
    WHERE operation = 'Buy'
),
Sells AS (
    SELECT stock_name, price AS sell_price, 
           ROW_NUMBER() OVER (PARTITION BY stock_name ORDER BY operation_day) AS rn
    FROM Stocks
    WHERE operation = 'Sell'
),
Matched AS (
    SELECT b.stock_name, s.sell_price - b.buy_price AS gain_loss
    FROM Buys b
    JOIN Sells s
    ON b.stock_name = s.stock_name AND b.rn = s.rn
)
SELECT stock_name, SUM(gain_loss) AS capital_gain_loss
FROM Matched
GROUP BY stock_name;