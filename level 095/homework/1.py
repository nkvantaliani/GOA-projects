def umm(arr):

    longest = []
    current = [arr[0]]

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current.append(arr[i])
        else:
            if len(current) > len(longest):
                longest = current
            current = [arr[i]]
    if len(current) > len(longest):
        longest = current
    return longest
print(umm([1, 2, 1, 3, 16, 21, 11]))
print(umm([1, 2, 3, 1, 2, 3, 4]))