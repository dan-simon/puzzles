# Where we aim to end up, probably shouldn't be messed with
gx = (17, 4, 14, 13, 2, 9, 8, 18, 1, 15, 10, 19, 16, 11, 3, 7)

lists = [
[1, 2, 3, 5, 8, 13, 21, 34],
[1, 2, 4, 8, 16, 32],
[1, 4, 9, 16, 25, 36],
[1, 3, 6, 10, 15, 21, 28, 36]
]

def is_legal_choice(n, x):
    t = (n, (n + 1) % 4)
    return all(i // 4 in t for i in x)

allowed = [[j for j in range(16) if is_legal_choice(i, (j, j))] for i in range(4)]

base_opts = range(1, 21)

def res(n, x):
    v = gx[x[0][0]], gx[x[0][1]]
    tc = [(x[0], {(j1, j2) for j1 in base_opts for j2 in base_opts if (j1 + j2 in lists[n]) == (sum(v) in lists[n])}) for i in range(1, x[1] + 1)]
    fc = [((x[0][0],), {(j,) for j in base_opts if (j + i in lists[n]) == (v[0] + i in lists[n])}) for i in range(1, x[1] + 1)]
    sc = [((x[0][1],), {(j,) for j in base_opts if (j + i in lists[n]) == (v[1] + i in lists[n])}) for i in range(1, x[1] + 1)]
    return tc + fc + sc

def deductions_from_choices(c):
    assert len(c) == 4 and all(is_legal_choice(ind, j[0]) for (ind, i) in enumerate(c) for j in i)
    return [k for (ind, i) in enumerate(c) for j in i for k in res(ind, j)]

def score(poss):
    if type(poss[1]) == int:
        return score(poss[0]), poss[1]
    return sum(len(i) for i in poss)

def deductions(info, iters=False, verb=False):
    poss = [set(base_opts) for _ in range(16)]
    c = 0
    while True:
        s = score(poss)
        for i in info:
            fits = [j for j in i[1] if all(k2 in poss[k1] for (k1, k2) in zip(i[0], j))]
            fits = [set(j) for j in zip(*fits)]
            for (j, k) in zip(i[0], fits):
                poss[j] = k
        for i in range(len(poss)):
            poss[i] -= {list(poss[j])[0] for j in range(len(poss)) if j != i and len(poss[j]) == 1}
        if verb:
            print(poss)
        if score(poss) == s:
            break
        c += 1
    return (poss, c) if iters else poss

def add_random_thing(c):
    c2 = [i[:] for i in c]
    changes = score(c2) // 10 if random.random() < 0.1 else (2 if random.random() < 0.1 else 1)
    for _ in range(changes):
        r = random.randint(0, 3)
        t = (None, None)
        while t[0] == t[1]:
            t = random.choice(allowed[r]), random.choice(allowed[r])
        c2[r].append((t, random.randint(1, 5)))
    return c2

def remove_random_thing(c, full=False):
    c2 = [i[:] for i in c]
    changes = score(c2) // 10 if random.random() < 0.1 else (2 if random.random() < 0.1 else 1)
    for _ in range(changes):
        totals = [sum(j[1] for j in i) for i in c2]
        if random.random() < 0.9:
            r = max(range(4), key=lambda x: totals[x])
        else:
            r = random.randrange(0, 4)
        rp = random.randrange(0, totals[r])
        p = 0
        di = None
        for (ind, i) in enumerate(c2[r]):
            p += i[1]
            if p > rp:
                di = ind
                break
        if c2[r][di][1] == 1 or (c2[r][di][1] <= 3 and full):
            c2[r] = c2[r][:di] + c2[r][di + 1:]
        else:
            c2[r] = c2[r][:di] + [(c2[r][di][0], c2[r][di][1] - 1)] + c2[r][di + 1:]
    return c2

def all_reductions(c):
    res = []
    for r in range(4):
        for di in range(len(c[r])):
            c2 = [i[:] for i in c]
            if c2[r][di][1] == 1:
                c2[r] = c2[r][:di] + c2[r][di + 1:]
            else:
                c2[r] = c2[r][:di] + [(c2[r][di][0], c2[r][di][1] - 1)] + c2[r][di + 1:]
            res.append(c2)
    return res

def mutate(c):
    return remove_random_thing(add_random_thing(c))

def tot_len(c):
    return sum(j[1] for i in c for j in i)

def part_len(c):
    return sum(i[1] for i in c)   

def start():
    return [[], [], [], []]

def is_ok(x):
    return score(deductions(deductions_from_choices(x))) == 16 and all(score(deductions(deductions_from_choices(i))) > 16 for i in all_reductions(x))

def final_score(x):
    parts = [part_len(i) for i in x]
    avg = sum(parts) / len(parts)
    twos = [any(j[1] > 1 for j in i) for i in x]
    return sum(twos) - sum(abs(i - avg) for i in parts)

def standard(c):
    return [sorted((tuple(sorted(j[0])), j[1]) for j in i) for i in c]

def toc(x):
    return chr(x + ord('A'))

cd = {
'red': '#ff0000',
'green': '#00dd00',
'blue': '#0000dd',
'yellow': '#dddd00',
'magenta': '#dd00dd',
'cyan': '#00dddd',
}

def box(color, title=True, size=1.5):
    title = f' title="{color} box"' if title else ''
    return f'<span style="width: {size}em; height: {size}em; background-color: {cd[color]}; display: inline-block;"{title}></span>'

def button(n):
    return f'<button onclick="colorBoxes({n})" title="red box, green box, blue box → yellow box, magenta box, cyan box" style="height: 1.5em;">{box(red, False, 1)} {box(green, False, 1)} {box(blue, False, 1)} <span style="position: relative; bottom: 0.25em;">→</span> {box(yellow, False, 1)} {box(magenta, False, 1)} {box(cyan, False, 1)}</button>'

red, green, blue, yellow, magenta, cyan = 'red', 'green', 'blue', 'yellow', 'magenta', 'cyan'

squares = [box(i) for i in (red, green, yellow, magenta, cyan )]

magic = 'BLINDACEFGHJKMOP'

def get_table(n, x):
    if n == 4:
        data = [(magic[i], magic[8 + i], '❓', '❓', '❓') for i in range(8)]
    else:
        y = [(i, j, gx[i], gx[j], k) for ((i, j), m) in x for k in range(1, m + 1)]
        data = [(toc(ii), toc(jj), '❌✅'[i + j in lists[n]], '❌✅'[i + k in lists[n]], '❌✅'[j + k in lists[n]]) for (ii, jj, i, j, k) in y]
    data = list(zip(*data))
    return '\n'.join('<tr>\n<td style="width: 30px; text-align: left; border-right: 1px solid;">' + squares[ind] + '</td>\n' + '\n'.join('<td style="width: 50px; text-align: center;">' + j + '</td>' for j in i) + '\n</tr>' for (ind, i) in enumerate(data))

def get_part(n, x):
    if n == 4:
        return f'''\
2, 3, 5, 7, ...
<br/>
<br/>
Extraction:
<table style="border-collapse: collapse;">
<tbody>
{get_table(n, x)}
</tbody>
</table>'''
    return f'''\
<span id="s{n + 1}"><span style="position: relative; top: 0.2em;">{box(red, size=1)}</span>: <input id="a{n + 1}"/> <span style="position: relative; top: 0.2em;">{box(green, size=1)}</span>: <input id="b{n + 1}"/> {button(n + 1)}</span>
<br/>
<br/>
Outputs:
<table id="o{n + 1}" style="border-collapse: collapse;">
<tbody>
<tr>
<td style="width: 30px; text-align: left; border-right: 1px solid;">{box(red)}</td>
</tr>
<tr>
<td style="width: 30px; text-align: left; border-right: 1px solid;">{box(green)}</td>
</tr>
<tr>
<td style="width: 30px; text-align: left; border-right: 1px solid;">{box(yellow)}</td>
</tr>
<tr>
<td style="width: 30px; text-align: left; border-right: 1px solid;">{box(magenta)}</td>
</tr>
<tr>
<td style="width: 30px; text-align: left; border-right: 1px solid;">{box(cyan)}</td>
</tr>
</tbody>
</table>
<br/>
<br/>
Goal:
<table style="border-collapse: collapse;">
<tbody>
{get_table(n, x)}
</tbody>
</table>'''

def get_parts(c):
    return '<h2>Colorful Boxes</h2>\nGive each letter from A-P a unique value from 1-20. (Ignore the values that are left.)\n<br/>\n(You can hover over boxes to see their color. This is for accessibility and not otherwise part of the puzzle.)\n<hr/>\n' + '\n<hr/>\n'.join(get_part(ind, i) for (ind, i) in enumerate(c + [None]))


c = [[((0, 2), 4), ((2, 5), 3), ((3, 4), 1), ((3, 6), 1), ((5, 7), 2)], [((4, 11), 2), ((6, 7), 3), ((7, 9), 2), ((8, 11), 4)], [((9, 10), 1), ((9, 14), 1), ((11, 12), 1), ((12, 13), 3), ((13, 15), 5)], [((0, 3), 1), ((1, 3), 2), ((3, 14), 3), ((12, 15), 3), ((13, 15), 2)]]

# deductions(deductions_from_choices(c))
print(get_parts(c))
print(deductions(deductions_from_choices(c), verb=True))
exit()

'''
import random
random.seed(17)
# ((3, 14), 3) could be ((3, 14), 1)
# due to 0 not being an option, the (H, J) thing could also be cut
c = [[((0, 2), 4), ((2, 5), 3), ((3, 4), 1), ((3, 6), 1), ((5, 7), 2)], [((4, 11), 2), ((6, 7), 3), ((7, 9), 2), ((8, 11), 4)], [((9, 10), 1), ((9, 14), 1), ((11, 12), 1), ((12, 13), 3), ((13, 15), 5)], [((0, 3), 1), ((1, 3), 2), ((3, 14), 3), ((12, 15), 3), ((13, 15), 2)]]

print(final_score(c))
print(standard(c))
print([part_len(i) for i in c])
s = score(deductions(deductions_from_choices(c), iters=True))
print(s)
print(deductions(deductions_from_choices(c), iters=True))
if not is_ok(c):
    print('red')
    o = [i for i in all_reductions(c) if score(deductions(deductions_from_choices(i))) == 16]
    for j in o:
        print(j)
        print([part_len(i) for i in j])
        print('-' * 10)
else:
    print('ok')
while True:
    c2 = mutate(c)
    if is_ok(c2) and final_score(c2) >= final_score(c):
        print('changed', c2, final_score(c2), [part_len(i) for i in c2])
        c = c2

exit()

print(all(score(deductions(deductions_from_choices(i))) > 16 for i in all_reductions(c)))

print(score(deductions(deductions_from_choices(c), iters=True)))
exit()
'''

import random
random.seed(14)
c = start()
print(score(deductions(deductions_from_choices(c))))
while True:
    c = add_random_thing(c)
    s = score(deductions(deductions_from_choices(c)))
    print(s, tot_len(c))
    if s == 16:
        break
    if s < 20:
        print(deductions(deductions_from_choices(c)))

for i in range(500):
    c2 = remove_random_thing(c, full=i < 250)
    s = score(deductions(deductions_from_choices(c2)))
    print(s, tot_len(c), [part_len(j) for j in c], i)
    if s == 16:
        c = c2

assert score(deductions(deductions_from_choices(c))) == 16
print(c, [part_len(j) for j in c])
    

