def fibo7(number):
    prev2 = 0
    prev1 = 1
    current = 0

    if number == 0:
        return 0
    elif number == 1:
        return 1
    else:
        for i in range(2, number + 1):
            current = prev2 + prev1
            prev2 = prev1
            prev1 = current
        return current


from datetime import datetime
start_time = datetime.now()
print('result: ' + str(fibo7(10000)))
end_time = datetime.now()
print('Duration: {}'.format(end_time - start_time))