def extend(ls, used, out, ind, f):
    opts = cart_opts(ls, used)
    return [i for i in opts if f(i, ind) == out]

def cart_opts(a, b):
    r = [()]
    for ind in range(len(a)):
        c = [it[ind] for it in b]
        s = [v for v in sorted(set(a[ind])) if c.count(v) < a[ind].count(v)] 
        r = [i + (j,) for i in r for j in s]
    return r

def opts(ls, out, f, n, limit):
    r = [()]
    for ind in range(n):
        r = [i + (j,) for i in r for j in extend(ls, i, out[ind], ind, f)]
        if len(r) > limit:
            return None
    return r

def out(pairs, f):
    return [f(i, ind) for (ind, i) in enumerate(pairs)]

def make_f(check):
    def f(t, i):
        return tuple(check(j) for j in (t[0] + t[1], t[1] + (i + 1), (i + 1) + t[0]))
    return f

def make_f2(order, signed=False):
    def f(t, _):
        x = order.index(t[0]) - order.index(t[1])
        if signed:
            return x
        else:
            return abs(x)
    return f


alpha_orders = [
'abcdefghijklmnopqrstuvwxyz',
'etaoinshrdlucmfwypvbgkjqxz',
'qwertyuiopasdfghjklzxcvbnm',
'thequickbrownfxjmpsvlazydg'
]

'''
def r(n):
    t = []
    for _ in range(n):
        i = None
        while i is None or i in t:
            i = random.choice(alpha_orders[0])
        t.append(i)
    return tuple(t)
'''

def ln(x):
    if x is None:
        return None
    return len(x)

def order(x, s):
    y = sorted(x, key=lambda i: s.index(i))
    return [y.index(i) for i in x]

def inv(x):
    return [x.index(i) for i in range(len(x))]

def times(x, y):
    return [y[i] for i in x]

def cycles(x):
    s = set()
    r = []
    for i in range(len(x)):
        if i in s:
            continue
        s.add(i)
        j = x[i]
        c = 1
        while j != i:
            s.add(j)
            j = x[j]
            c += 1
        if c != 1:
            r.append(c)
    return sorted(r)

extra = ['adroitly', 'backdrop', 'backfire', 'backlogs', 'backstop', 'baryonic', 'bedrocks', 'bihourly', 'blazonry', 'blockers', 'bouncily', 'brackets', 'brackish', 'breakout', 'brightly', 'busywork', 'cajolery', 'calendry', 'carboxyl', 'clankier', 'claymore', 'clerkdom', 'clinkers', 'clonkier', 'clunkers', 'coarsely', 'copydesk', 'copyleft', 'cordlike', 'corkiest', 'covertly', 'crablike', 'creakily', 'croaking', 'cronyism', 'cryobank', 'cryogens', 'cryolite', 'culinary', 'cusplike', 'deaconry', 'detoxify', 'dockages', 'ductwork', 'falconry', 'famously', 'faucetry', 'fervidly', 'filatory', 'firelock', 'flackers', 'flackery', 'flankers', 'flickers', 'fluework', 'flyovers', 'foamlike', 'forkiest', 'forktail', 'freakout', 'frozenly', 'fumatory', 'grayouts', 'gyroidal', 'horsefly', 'kludgier', 'kryptons', 'lacework', 'layovers', 'lovesick', 'maverick', 'midstory', 'mocktail', 'molarity', 'moleskin', 'monetary', 'mopingly', 'morbidly', 'motherly', 'mouthily', 'normalcy', 'novalike', 'onwardly', 'outlying', 'outranks', 'overmilk', 'overpays', 'overplay', 'pastorly', 'polarity', 'porkiest', 'portably', 'quackers', 'quackier', 'randomly', 'rhyolite', 'ribozyme', 'rockable', 'rockabye', 'rockiest', 'rusticly', 'skyrmion', 'softback', 'spritely', 'suckling', 'teamwork', 'tomblike', 'turflike', 'unblocks', 'unhomely', 'unlicked', 'unlocked', 'verdancy', 'viceroys', 'weaponry', 'workable', 'workably', 'worksafe', 'wormlike']

full = ['abductor', 'absolver', 'adopters', 'adroitly', 'agnostic', 'alfresco', 'amortise', 'amphoric', 'ancestor', 'archives', 'atrophic', 'autolyse', 'avoucher', 'avowedly', 'backdrop', 'backfire', 'backline', 'backlist', 'backlogs', 'backstop', 'bagworms', 'barcodes', 'baryonic', 'batgirls', 'bedrocks', 'bestowal', 'bihourly', 'binocles', 'birdcage', 'bivouacs', 'blazoner', 'blazonry', 'bloaters', 'blockers', 'blowdart', 'blowhard', 'boldface', 'boniface', 'bouncily', 'bowsprit', 'brackets', 'brackish', 'breakout', 'brightly', 'broadens', 'brockets', 'buckhorn', 'busywork', 'cajolers', 'cajolery', 'calendry', 'calipers', 'calories', 'caltrops', 'calzones', 'candlers', 'capitols', 'carbides', 'carboxyl', 'caribous', 'carousel', 'cauldron', 'charming', 'chlorate', 'chlorine', 'chompers', 'chomping', 'chorales', 'chordate', 'chortles', 'cigarets', 'clangers', 'clarinet', 'claymore', 'clearout', 'clerkdom', 'closured', 'clotured', 'clowders', 'clunkers', 'coaliest', 'coarsely', 'cohering', 'colinear', 'columned', 'combiner', 'compadre', 'compares', 'congrats', 'conjured', 'conjures', 'consider', 'consumer', 'convulse', 'coparent', 'copiable', 'copydesk', 'copyleft', 'cordages', 'cordlike', 'corkiest', 'cosigner', 'costlier', 'covertly', 'cowherds', 'coxswain', 'crablike', 'creakily', 'creation', 'croaking', 'cronyism', 'cropland', 'cryobank', 'cryogens', 'cryolite', 'cubiform', 'culinary', 'culverts', 'cupboard', 'curtails', 'cusplike', 'cutworms', 'cymbaler', 'cytokine', 'damoisel', 'deaconry', 'decigram', 'decorums', 'democrat', 'deorbits', 'detoxify', 'discover', 'dockages', 'dovetail', 'downlike', 'dreamful', 'droplike', 'drystone', 'duckmole', 'ductwork', 'durables', 'emulator', 'entropic', 'escargot', 'factions', 'factoids', 'factored', 'failures', 'falchion', 'falconer', 'falconry', 'famously', 'faucetry', 'fauchion', 'fervidly', 'filchers', 'firelock', 'flankers', 'flareups', 'flavored', 'flickers', 'flounced', 'flounces', 'flounder', 'flowages', 'fluework', 'fluxions', 'flyovers', 'foamlike', 'foliates', 'forcedly', 'forcible', 'forecast', 'forensic', 'forgiven', 'forkiest', 'forktail', 'formable', 'formulae', 'fortuned', 'fortunes', 'freakout', 'frozenly', 'fumarole', 'fumatory', 'fusional', 'germinal', 'gerontic', 'glaciers', 'gloaters', 'goliaths', 'graceful', 'grayouts', 'grouched', 'grouches', 'grumbles', 'gyroidal', 'halftone', 'haricots', 'heraldic', 'hockling', 'horsefly', 'iceworms', 'implored', 'implores', 'incomers', 'inflator', 'informal', 'insulter', 'ironclad', 'janglier', 'joinable', 'kidglove', 'kludgier', 'lacework', 'layovers', 'legworks', 'leucomas', 'leukotic', 'libatory', 'lipreads', 'loathers', 'locative', 'lockages', 'loungers', 'lovebugs', 'lovesick', 'maligner', 'manifold', 'maverick', 'mediator', 'microbus', 'midstory', 'minerals', 'mocktail', 'molarity', 'moldiest', 'moleskin', 'monetary', 'mongrels', 'mopingly', 'morbidly', 'motherly', 'mouthier', 'mouthily', 'musclier', 'normalcy', 'notecard', 'novalike', 'novelist', 'ogrishly', 'operands', 'orangish', 'orphaned', 'outcried', 'outcries', 'outlying', 'outraces', 'outraged', 'outrages', 'outranks', 'outrides', 'outwears', 'overclad', 'overgilt', 'overlush', 'overmany', 'overmuch', 'overpays', 'overplay', 'oversalt', 'overskip', 'pastorly', 'personal', 'pinboard', 'plumbago', 'plumcots', 'plunders', 'plutonic', 'pluviose', 'polarity', 'polentas', 'policers', 'polyuria', 'polyuric', 'porkiest', 'portably', 'postburn', 'postrace', 'potshard', 'precious', 'products', 'profaned', 'profanes', 'profiled', 'projects', 'pulsator', 'punchier', 'pyrogens', 'quackers', 'quackier', 'randomly', 'ransomed', 'readouts', 'reclaims', 'recounts', 'regional', 'regolith', 'relating', 'relaunch', 'replicas', 'replough', 'reticula', 'rhyolite', 'ribozyme', 'rockable', 'rockabye', 'rockiest', 'rowdiest', 'royalism', 'rusticly', 'scornful', 'scowling', 'scrofula', 'sculptor', 'shackler', 'shadower', 'shortage', 'skyrmion', 'slouched', 'softback', 'software', 'soulmate', 'spectral', 'spritely', 'spurlike', 'staghorn', 'stockier', 'stylizer', 'suborned', 'subpolar', 'suckling', 'surgical', 'teamwork', 'teardown', 'tomblike', 'torquing', 'tripodal', 'troubled', 'turflike', 'unblocks', 'ungraced', 'unhomely', 'unlicked', 'unloader', 'unlocked', 'unsoiled', 'uplifter', 'uptowner', 'vaultier', 'verdancy', 'verdicts', 'veronica', 'viceroys', 'voiceful', 'weaponry', 'wordgame', 'workable', 'workably', 'worksafe', 'wormlike', 'writable', 'yolkiest', 'yourself', 'yowlings']

with open('sowpods.txt') as f:
    s = f.read().lower().split()

with open('100k.txt') as f:
    s2 = set(f.read().lower().split() + extra)

def no_ending(w):
    return all(not w.endswith(j) for j in ('s', 'ed', 'er', 'ly', 'ing'))

s = [i for i in s if len(i) == len(set(i)) == 8]

s = full

'''
def pairs(x):
    s = sorted(set(x))
    return [i + j for i in s for j in s if i < j]
'''

def pairs(x):
    return [(x[i] + x[j], (i, j)) for i in range(len(x)) for j in range(len(x)) if i < j]

def swaps(s, x):
    return [(i.replace(x[0], '#').replace(x[1], x[0]).replace('#', x[1]), i) for i in s if all(j in i for j in x)]

def is_okay(i, j, f):
    if i[-1] != inv(j[-1]) or i[-1] == j[-1] or set(i[0]) == set(j[0]):
        return False
    si, sj = i[0], ''.join(j[0][j[-1].index(k)] for k in range(len(j[0])))
    if len(set([k for k in range(8) if si[k] in i[2] or sj[k] in j[2]])) < 4:
        return False
    if len(set(i[3] + j[3])) < 4:
        return False
    o = out(zip(si, sj), f)
    if ln(opts((si, sj), o, f, len(si), 1000)) != 1:
        return False
    return True

def make_op(x):
    t = [{}, {}]
    for (ind, i) in enumerate(x):
        for j in i:
            t[ind].setdefault(tuple(j[-1]), [])
            t[ind][tuple(j[-1])].append(j)
    r = []
    for i in t[0]:
        for j1 in t[0][i]:
            for j2 in t[1].get(tuple(inv(i)), []):
                r.append((j1, j2))
    return r

def options(s, ordr, req_opts):
    p = [pairs(i) for i in req_opts]
    s = [[(*k, *j) for j in i for k in swaps(s, j[0])] for i in p]
    o = [[j + (order(j[0], ordr),) for j in i] for i in s]
    op = make_op(o)
    f = make_f2(ordr, signed=True)
    r = []
    for (i, j) in op:
        if is_okay(i, j, f):
            r.append((i, j))
    print('done', len(r), r)
    return r

def compat(x, req):
    y = [[c for j in x for c in j[i][2]] for i in range(2)]
    y2 = [[c for j in x for c in j[i][3]] for i in range(2)]
    return all(j.count(k) >= i.count(k) for (i, j) in zip(y, req) for k in j) and all(len(set(i)) == len(i) for i in y2)

def put_together(opts, req):
    r = [()]
    for i in opts:
        r = [j + (k,) for j in r for k in i]
        r = [j for j in r if compat(j, req)]
        print(len(r))
    return r

def try_fit(full, ordrs):
    sij = [(i[0], ''.join(j[0][j[-1].index(k)] for k in range(len(j[0])))) for (i, j) in full]
    o = [out(zip(si, sj), make_f2(ordr, signed=True)) for ((si, sj), ordr) in zip(sij, ordrs)]
    return o, [[(ind1, ind2) for (ind1, a) in enumerate(full) for (ind2, b) in enumerate(full) if ln(opts((a[0][0], b[1][0]), o1, make_f2(ordr, signed=True), len(a[0][0]), 1000)) != 0] for (o1, ordr) in zip(o, ordrs)]

outs = [options(s, a, ('colorfor', 'seaorsky')) for a in alpha_orders]
full_opts = put_together(outs, ('colorfor', 'seaorsky'))
print(full_opts)

def only(x):
    assert len(x) == 1
    return x[0]

def actualize(full, req):
    a = sorted(i[0][1] for i in full)
    b = sorted(i[1][1] for i in full)
    inds = [], []
    res = []
    for (i, al) in zip(full, alpha_orders):
        used = []
        for j in range(2):
            inds[j].extend(i[j][3])
        si, sj = i[0][0], ''.join(i[1][0][i[1][-1].index(k)] for k in range(len(i[1][0])))
        sij = list(zip(si, sj))
        r = [None] * 8
        for j in range(2):
            for k in range(2):
                r[inds[j][-2 + k]] = only([sij[ind] for ind in range(8) if sij[ind][j] == i[j][2][k]])
        for i in sij:
            if i not in r:
                ind = random.choice([ind for ind in range(len(r)) if r[ind] is None])
                r[ind] = i
        res.append(out(r, make_f2(al, signed=True)))
    return (a, b, res)

print(len(full_opts), full_opts[0])
import random

random.seed(10)

# use [[-9, 16, 11, -1, -6, -4, -11, 0], [-11, -6, 9, 10, -8, 2, 14, 7], [-7, 5, 13, 10, -19, 1, -1, 7], [15, -6, 0, 1, -1, 4, 18, -3]]

for i in full_opts:
    print(actualize(i, ('colorfor', 'seaorsky')))
exit()

tf = [try_fit(i, alpha_orders) for i in full_opts]

for i in full_opts:
    print(sorted(k[1] for j in i for k in j))

print(tf[0][0])
'''
print([''.join(sorted(set(k2 for j in outs for k in j for k2 in k[i][2]))) for i in range(2)])
print(sorted({k[1] for i in outs for j in i for k in j}))
'''

'''
['abductor', 'absolver', 'acervuli', 'acrotism', 'adopters', 'adroitly', 'aeroduct', 'agnostic', 'albicore', 'aleurons', 'alfresco', 'aloetics', 'alphorns', 'amortise', 'amphoric', 'ancestor', 'angulose', 'ankylose', 'anodiser', 'anoretic', 'anorthic', 'apterous', 'archfoes', 'archines', 'archives', 'arefying', 'articled', 'arvicole', 'aspheric', 'atrophic', 'atropine', 'autolyse', 'avoucher', 'avowedly', 'avowries', 'awlbirds', 'azotemic', 'backdrop', 'backfile', 'backfire', 'backline', 'backlist', 'backlogs', 'backstop', 'baclofen', 'bagworms', 'balconet', 'barcodes', 'barmpots', 'barouche', 'baryonic', 'batgirls', 'bechalks', 'becrowds', 'bedrocks', 'beliquor', 'bestowal', 'bihourly', 'bilayers', 'binocles', 'bioplasm', 'biramose', 'birdcage', 'bitchery', 'bivouacs', 'blazoner', 'blazonry', 'bloaters', 'blockers', 'blockies', 'blockish', 'blokarts', 'blowdart', 'blowhard', 'blowkart', 'blowsier', 'boardies', 'boldface', 'boniface', 'bonspiel', 'botchery', 'boulters', 'bouncily', 'bowsprit', 'boyarism', 'braciole', 'brackets', 'brackish', 'breakout', 'brigalow', 'brightly', 'broadens', 'broasted', 'brocatel', 'brockets', 'brodkins', 'bromized', 'bromizes', 'bronchus', 'brothels', 'brulzies', 'buckhorn', 'burgonet', 'busywork', 'cabestro', 'cabezons', 'cajolers', 'cajolery', 'calendry', 'calibres', 'calipers', 'calories', 'calorise', 'calorist', 'calorize', 'caltrops', 'calypter', 'calzones', 'candlers', 'capework', 'capitols', 'caponier', 'capriole', 'captious', 'carbides', 'carboxyl', 'carboyed', 'carfoxes', 'caribous', 'carioles', 'caromels', 'carousel', 'caudrons', 'cauldest', 'cauldron', 'cephalin', 'ceramist', 'chaebols', 'chalders', 'champier', 'chantors', 'charming', 'charnels', 'charpoys', 'chasmier', 'chaunter', 'chlorate', 'chlorine', 'chobdars', 'chompers', 'chomping', 'chondres', 'choragus', 'chorales', 'chordate', 'choregus', 'chortens', 'chortles', 'chowries', 'chrismon', 'chromels', 'chromide', 'chromyls', 'chronaxy', 'cigarets', 'cisterna', 'clamours', 'clangers', 'clangour', 'clankier', 'clapnets', 'clarinet', 'clarinos', 'claymore', 'clearout', 'clerkdom', 'clinkers', 'clonkier', 'closured', 'clotured', 'clowders', 'clunkers', 'coadmire', 'coaliest', 'coalized', 'coalizes', 'coarsely', 'codeinas', 'coequals', 'cohering', 'coinfers', 'cointers', 'coistrel', 'cokernut', 'colinear', 'columned', 'combiner', 'compadre', 'compands', 'compares', 'complish', 'compulse', 'congrats', 'conjured', 'conjures', 'consider', 'consumer', 'convulse', 'coparent', 'copering', 'copiable', 'copydesk', 'copygirl', 'copyleft', 'cordages', 'cordites', 'cordlike', 'corkiest', 'cornages', 'corpsmen', 'corymbed', 'cosigner', 'costlier', 'costmary', 'coulters', 'courages', 'cousinry', 'couverts', 'covertly', 'cowherbs', 'cowherds', 'coxswain', 'coystrel', 'coystril', 'crablike', 'cramboes', 'crankous', 'creakily', 'creation', 'creolian', 'creolist', 'crimpled', 'cringles', 'croaking', 'cronyism', 'cropland', 'crowdies', 'crownlet', 'crunkles', 'cryobank', 'cryogens', 'cryolite', 'cubiform', 'culinary', 'culverin', 'culverts', 'cumarone', 'cupboard', 'curtails', 'cusplike', 'cutworks', 'cutworms', 'cymbaler', 'cyprides', 'cytokine', 'damoisel', 'deaconry', 'decigram', 'decorums', 'democrat', 'deontics', 'deorbits', 'detoxify', 'diascope', 'dioptres', 'discover', 'disenrol', 'dockages', 'dolmenic', 'dovetail', 'downlike', 'dreamful', 'droplike', 'drystone', 'duckmole', 'ductwork', 'durables', 'durances', 'dyspnoic', 'empatron', 'emulator', 'entropic', 'erotical', 'eroticas', 'escargot', 'eucaryon', 'euphotic', 'exordial', 'factions', 'factoids', 'factored', 'fagoters', 'fahlores', 'failures', 'falchion', 'falconer', 'falconet', 'falconry', 'famously', 'farnesol', 'faucetry', 'fauchion', 'faultier', 'favoured', 'favriles', 'fervidly', 'filacers', 'filatory', 'filchers', 'filemots', 'firelock', 'flackers', 'flackery', 'flanches', 'flaneurs', 'flangers', 'flankers', 'flareups', 'flatbrod', 'flatwise', 'flavored', 'fleawort', 'flickers', 'flitches', 'floreant', 'flotages', 'flounced', 'flounces', 'flounder', 'flowages', 'fluework', 'fluxions', 'flyovers', 'foamlike', 'foliates', 'forbidal', 'forcedly', 'forcible', 'forecast', 'foreguts', 'forelady', 'forelaid', 'forelays', 'foremilk', 'forensic', 'foreplay', 'foresail', 'forgiven', 'forinsec', 'forkiest', 'forktail', 'formable', 'formicas', 'formulae', 'forslack', 'fortuned', 'fortunes', 'foulards', 'fourplay', 'foutring', 'francize', 'fraulein', 'freakout', 'fricadel', 'fricando', 'frichted', 'frounced', 'frounces', 'frowsted', 'frozenly', 'fulcrate', 'fumarole', 'fumatory', 'furanose', 'fusional', 'gaolbird', 'gapeworm', 'garefowl', 'garvocks', 'geofacts', 'germinal', 'gerontic', 'girasole', 'girlonds', 'glaciers', 'glareous', 'gloaters', 'glochids', 'goldurns', 'goliaths', 'goramies', 'gormands', 'graceful', 'grayouts', 'grockles', 'grouched', 'grouches', 'grumbles', 'grutched', 'grutches', 'gynecoid', 'gyroidal', 'halftone', 'haricots', 'haulmier', 'heraldic', 'hockling', 'homegirl', 'hornfels', 'horsefly', 'howlback', 'iceworms', 'implored', 'implores', 'incloser', 'incomers', 'incorpse', 'inflator', 'inforces', 'informal', 'infotech', 'inlocked', 'insulter', 'ironclad', 'janglier', 'janiform', 'jargonel', 'jarosite', 'jocunder', 'joinable', 'kidglove', 'kludgier', 'koftgari', 'koftgars', 'kotching', 'kryolite', 'kryptons', 'laborism', 'laborite', 'laboured', 'lacework', 'lacunose', 'lamister', 'landform', 'languors', 'lapworks', 'laverock', 'lavrocks', 'layovers', 'leachour', 'legworks', 'lempiras', 'leprotic', 'leucomas', 'leukotic', 'libatory', 'lincture', 'lingster', 'linkster', 'linocuts', 'lipocyte', 'lipreads', 'loathers', 'lobstick', 'locative', 'lockages', 'lockrams', 'locksmen', 'longhead', 'loricate', 'loungers', 'loungier', 'lovebugs', 'lovesick', 'loxygens', 'lucarnes', 'lutherns', 'mailshot', 'maligner', 'mandiocs', 'manifold', 'manucode', 'marconis', 'maulgres', 'maverick', 'medcinal', 'mediator', 'mercados', 'mercapto', 'microbus', 'midstory', 'minerals', 'mislayer', 'mockneys', 'mocktail', 'modelist', 'molarity', 'moldiest', 'molecast', 'moleskin', 'monetary', 'mongrels', 'mopingly', 'morbidly', 'mordancy', 'morticed', 'motherly', 'moulters', 'mouthier', 'mouthily', 'mowburnt', 'musclier', 'naywords', 'neurosal', 'nombrils', 'normalcy', 'notchels', 'notecard', 'nourices', 'novalike', 'novelish', 'novelist', 'octangle', 'oculated', 'ogrishly', 'olfacted', 'onwardly', 'operands', 'ophiuras', 'opinable', 'oracling', 'orangish', 'orphaned', 'orphical', 'osnaburg', 'outcaper', 'outcavil', 'outcried', 'outcries', 'outfling', 'outgleam', 'outlying', 'outplace', 'outraces', 'outraged', 'outrages', 'outranks', 'outraves', 'outrides', 'outrival', 'outwears', 'overbulk', 'overclad', 'overgilt', 'overlush', 'overmany', 'overmilk', 'overmuch', 'overpays', 'overplay', 'oversalt', 'overskip', 'oversman', 'oversway', 'oviducal', 'owrelays', 'pactions', 'pajockes', 'parsonic', 'parvolin', 'pastorly', 'pauldron', 'personal', 'petiolar', 'phoretic', 'phrenics', 'phytonic', 'pictural', 'pilcorns', 'pinboard', 'pledgors', 'plonkers', 'ploukier', 'plouters', 'plumbago', 'plumcots', 'plunders', 'plutonic', 'pluviose', 'polarity', 'polentas', 'policers', 'polyacid', 'polyarch', 'polynias', 'polyuria', 'polyuric', 'pomander', 'porkiest', 'portably', 'portulan', 'postburn', 'postlike', 'postrace', 'potshard', 'poulaine', 'poularde', 'practise', 'pranckes', 'prawlins', 'precious', 'prescuta', 'products', 'proemial', 'profaned', 'profanes', 'profiled', 'projects', 'prolated', 'prouling', 'pulsator', 'punchier', 'pyranoid', 'pyrazole', 'pyrogens', 'pyrogies', 'quackers', 'quackier', 'racemoid', 'radicles', 'ragbolts', 'randomly', 'rangolis', 'ransomed', 'raplochs', 'readouts', 'reclaims', 'recounts', 'recusant', 'regional', 'regolith', 'relating', 'relaunch', 'replicas', 'replicon', 'replough', 'reticula', 'rhodanic', 'rhyolite', 'ribozyme', 'ringbolt', 'rockable', 'rockabye', 'rockiest', 'rockling', 'roseting', 'rosulate', 'rotchies', 'roughies', 'rouncies', 'roundels', 'roundles', 'rowdiest', 'rowdyism', 'royalets', 'royalism', 'ructions', 'rugosely', 'rumbelow', 'rusticly', 'sabotier', 'saxicole', 'scarmoge', 'scopelid', 'scornful', 'scowling', 'scowther', 'scrofula', 'scroungy', 'scrowled', 'sculptor', 'seductor', 'servqual', 'shackler', 'shadower', 'shortage', 'skyrmion', 'sleazoid', 'slipover', 'slouched', 'snailery', 'snirtled', 'softback', 'software', 'solacing', 'solander', 'soldiery', 'solidary', 'sorbitan', 'sorptive', 'soulmate', 'souterly', 'sovranly', 'spectral', 'spritely', 'sproglet', 'spurlike', 'squaloid', 'staghorn', 'stenlock', 'stockier', 'stonerag', 'storeman', 'stroamed', 'strowing', 'strucken', 'stylizer', 'suborned', 'subpolar', 'subzonal', 'suckling', 'sudatory', 'superfly', 'surgical', 'sutorial', 'syphonal', 'teamwork', 'teardown', 'teraglin', 'tomblike', 'tornadic', 'torquing', 'trackbed', 'traduces', 'trahison', 'tranches', 'tripodal', 'trochils', 'trochisk', 'troubled', 'trouches', 'truckles', 'turflike', 'unblocks', 'unciform', 'unformal', 'ungraced', 'unhomely', 'unlicked', 'unloader', 'unlocked', 'unracked', 'unsoiled', 'upclosed', 'uplifter', 'upsoared', 'uptowner', 'uranylic', 'uropygia', 'varioles', 'vaultier', 'verdancy', 'verdicts', 'veronica', 'viceroys', 'victrola', 'viragoes', 'voiceful', 'voidance', 'volutins', 'warehous', 'waukrife', 'weaponry', 'whimbrel', 'whorings', 'whorlbat', 'whortles', 'wontedly', 'wordgame', 'workable', 'workably', 'worksafe', 'wormcast', 'wormlike', 'wouldest', 'woundier', 'wrackful', 'writable', 'wrothful', 'xerantic', 'xylocarp', 'yoghurts', 'yolkiest', 'yorlings', 'yourself', 'yowlings']
'''
