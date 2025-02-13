def series_sum(n):
    total = 0.0
    
    for i in range(n):
        total += 1 / (3 * i +1)
    total = round(total,2)
    return str(total)