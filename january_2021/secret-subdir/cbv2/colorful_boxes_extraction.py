nums = [i for i in range(1, 21)]

# powers = [1, 2, 3, 5, 8, 13, 21, 34, 55]
powers = [i for i in range(2, 41) if all(i % j for j in range(2, i))]
print(powers)
powers = sorted(set(powers))

print(powers)

f = lambda x, y: (x + y in powers, x + 1 in powers, y + 1 in powers)

c = [(True, True, False), (False, False, False), (True, True, True), (False, False, False),
(True, False, True), (False, False, True), (True, False, False), (False, True, False)]

'''
....XX.X
X....XX.
'''

'''
BLINDACE
FGHJKMOP
'''

# 6 numbers short of 100
print(sum(j for i in c for j in i[1:]))

# the annoting thing is that True, True, True would have to use 1

t = {}

for i in nums:
    for j in nums:
        k = f(i, j)
        t.setdefault(k, [])
        t[k].append((i, j))

print(t[c[4]])

o = [()]

# old (failed): LION = 11, 8, 14, 13
# new (maybe?): LION = 7, 1, 13, 11
# hm this also fails, darn

def check(o, a, b, missing):
    return [i for i in o if all(m not in i for m in missing) and all(k not in i if len(i) <= j else i[j] == k for (j, k) in zip(a, b))]

end = [14, 15, 16, 5]
#end = [4, 15, 14, 20]
end = [12, 5, 6, 20]

def reorder(x):
    return tuple(i[1] for i in sorted(enumerate(x), key=lambda t: letters[t[0]]))

letters = 'BFLGIHNJDKAMCOEP'

for (ind, r) in enumerate(c):
    o = [i + j for i in o for j in t[r] if len(set(i + j)) == len(i + j)]
    o = check(o, [2, 4, 13, 6], [19, 1, 3, 11], end)
    '''
    if len(o) > 10000:
        o = o[::len(o) // 10000]
    '''
    print(ind, len(o))

o = [reorder(i) for i in o]
import random
random.seed(15)
print(random.choice(o))

'''
# Give each letter a unique value from 1-20 (ignore the values that are left).
# (Do letters after P matter? QRST)
letters = 'B'

print(len([i for i in o if set(i) & {5, 14, 15, 16} == set()]))

missing = {tuple(sorted(set(range(1, 21)) - set(i))) for i in o}

with open('sowpods.txt') as f:
    d = {}
    for i in f.read().lower().split():
        if len(i) == 4:
            k = tuple(sorted(ord(j) - ord('a') + 1 for j in i))
            d.setdefault(k, [])
            d[k].append(i)

print([(i, d[i]) for i in missing if i in d])
'''
