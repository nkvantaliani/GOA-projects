# 1 
def sum(arr):
    sort = sorted(arr)
    largest1 = sort[-1]
    largest2 = sort[-2]
    return largest1 + largest2
print(sum([ 5, 18, 12, 40, 1, 19]))

# 1(2)
def sum2(arr1, arr2):
    sort1 = sorted(arr1)
    sort2 = sorted(arr2)
    largest3 = sort1[-1]
    largest4 = sort2[-1]
    return largest3 + largest4
print(sum2([ 5, 18, 12, 40, 1, 19],[ 5, 18, 12, 40, 1, 19]))
