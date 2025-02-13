def sum_array(arr):

    if not arr or len(arr) <= 1:
        return 0
    
    arr_sorted = sorted(arr)
    
    return sum(arr_sorted[1:-1])