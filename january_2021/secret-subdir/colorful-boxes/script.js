// Don't look at this file, it has spoilers.








































let data = [[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999], [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820, 861, 903, 946, 990, 1035, 1081, 1128, 1176, 1225, 1275, 1326, 1378, 1431, 1485, 1540, 1596, 1653, 1711, 1770, 1830, 1891, 1953, 2016, 2080, 2145, 2211, 2278, 2346, 2415, 2485, 2556, 2628, 2701, 2775, 2850, 2926], [0, 1, 2, 4, 5, 8, 9, 10, 13, 16, 17, 18, 20, 25, 26, 29, 32, 34, 36, 37, 40, 41, 45, 49, 50, 52, 53, 58, 61, 64, 65, 68, 72, 73, 74, 80, 81, 82, 85, 89, 90, 97, 98, 100, 101, 104, 106, 109, 113, 116, 117, 121, 122, 125, 128, 130, 136, 137, 144, 145, 146, 148, 149, 153, 157, 160, 162, 164, 169, 170, 173, 178, 180, 181, 185, 193, 194, 196, 197, 200, 202, 205, 208, 212, 218, 221, 225, 226, 229, 232, 233, 234, 241, 242, 244, 245, 250, 256, 257, 260, 261, 265, 269, 272, 274, 277, 281, 288, 289, 290, 292, 293, 296, 298, 305, 306, 313, 314, 317, 320, 324, 325, 328, 333, 337, 338, 340, 346, 349, 353, 356, 360, 361, 362, 365, 369, 370, 373, 377, 386, 388, 389, 392, 394, 397, 400, 401, 404, 405, 409, 410, 416, 421, 424, 425, 433, 436, 441, 442, 445, 449, 450, 452, 457, 458, 461, 464, 466, 468, 477, 481, 482, 484, 485, 488, 490, 493, 500, 505, 509, 512, 514, 520, 521, 522, 529, 530, 533, 538, 541, 544, 545, 548, 549, 554, 557, 562, 565, 569, 576, 577, 578, 580, 584, 585, 586, 592, 593, 596, 601, 605, 610, 612, 613, 617, 625, 626, 628, 629, 634, 637, 640, 641, 648, 650, 653, 656, 657, 661, 666, 673, 674, 676, 677, 680, 685, 689, 692, 697, 698, 701, 706, 709, 712, 720, 722, 724, 725, 729, 730, 733, 738, 740, 745, 746, 754, 757, 761, 765, 769, 772, 773, 776, 778, 784, 785, 788, 793, 794, 797, 800, 801, 802, 808, 809, 810, 818, 820, 821, 829, 832, 833, 841, 842, 845, 848, 850, 853, 857, 865, 866, 872, 873, 877, 881, 882, 884, 890, 898, 900, 901, 904, 905, 909, 914, 916, 922, 925, 928, 929, 932, 936, 937, 941, 949, 953, 954, 961, 962, 964, 965, 968, 970, 976, 977, 980, 981, 985, 986, 997, 1000, 1009, 1010, 1013, 1017, 1018, 1021, 1024, 1025, 1028, 1033, 1037, 1040, 1042, 1044, 1049, 1053, 1058, 1060, 1061, 1066, 1069, 1073, 1076, 1082, 1088, 1089, 1090, 1093, 1096, 1097, 1098, 1105, 1108, 1109, 1114, 1117, 1124, 1125, 1129, 1130, 1138, 1145, 1152, 1153, 1154, 1156, 1157, 1160, 1165, 1168, 1170, 1172, 1181, 1184, 1186, 1189, 1192, 1193, 1201, 1202, 1205, 1210, 1213, 1217, 1220, 1224, 1225, 1226, 1229, 1233, 1234, 1237, 1241, 1249, 1250, 1252, 1256, 1258, 1261, 1268, 1274, 1277, 1280, 1282, 1285, 1289, 1296, 1297, 1300, 1301, 1305, 1306, 1312, 1313, 1314, 1321, 1322, 1325, 1332, 1341, 1345, 1346, 1348, 1352, 1354, 1360, 1361, 1369, 1370, 1373, 1377, 1378, 1381, 1384, 1385, 1394, 1396, 1402, 1405, 1409, 1412, 1413, 1417, 1418, 1421, 1424, 1429, 1433, 1440, 1444, 1445, 1448, 1450, 1453, 1458, 1460, 1465, 1466, 1469, 1476, 1480, 1481, 1489, 1490, 1492, 1493, 1508, 1513, 1514, 1517, 1521, 1522, 1525, 1530, 1537, 1538, 1544, 1546, 1549, 1552, 1553, 1556, 1557, 1565, 1568, 1570, 1573, 1576, 1585, 1586, 1588, 1594, 1597, 1600, 1601, 1602, 1604, 1609, 1613, 1616, 1618, 1620, 1621, 1625, 1629, 1636, 1637, 1640, 1642, 1649, 1657, 1658, 1664, 1665, 1666, 1669, 1681, 1682, 1684, 1685, 1690, 1693, 1696, 1697, 1700, 1706, 1709, 1714, 1717, 1721, 1730, 1732, 1733, 1737, 1741, 1744, 1745, 1746, 1753, 1754, 1762, 1764, 1765, 1768, 1769, 1773, 1777, 1780, 1781, 1789, 1796, 1800, 1801, 1802, 1805, 1808, 1810, 1813, 1818, 1825, 1828, 1832, 1844, 1845, 1849, 1850, 1853, 1856, 1858, 1861, 1864, 1865, 1872, 1873, 1874, 1877, 1882, 1885, 1889, 1898, 1901, 1906, 1908, 1913, 1921, 1922, 1924, 1928, 1930, 1933, 1936, 1937, 1940, 1945, 1949, 1952, 1954, 1960, 1961, 1962, 1970, 1972, 1973, 1985, 1989, 1993, 1994, 1997, 2000, 2005, 2009, 2017, 2018, 2020, 2025, 2026, 2029, 2034, 2036, 2041, 2042, 2045, 2048, 2050, 2053, 2056, 2057, 2061, 2066, 2069, 2074, 2080, 2081, 2084, 2088, 2089, 2097, 2098, 2105, 2106, 2113, 2116, 2117, 2120, 2122, 2125, 2129, 2132, 2137, 2138, 2141, 2146, 2152, 2153, 2161, 2164, 2165, 2169, 2173, 2176, 2178, 2180, 2186, 2192, 2194, 2196, 2197, 2205, 2209, 2210, 2213, 2216, 2218, 2221, 2225, 2228, 2234, 2237, 2245, 2248, 2249, 2250, 2257, 2258, 2260, 2269, 2273, 2276, 2281, 2285, 2290, 2293, 2297, 2304, 2305, 2306, 2308, 2309, 2312, 2313, 2314, 2320, 2329, 2330, 2333, 2336, 2340, 2341, 2344, 2349, 2353, 2357, 2362, 2368, 2372, 2377, 2378, 2381, 2384, 2385, 2386, 2389, 2393, 2401, 2402, 2404, 2405, 2410, 2417, 2420, 2421, 2425, 2426, 2434, 2437, 2440, 2441, 2448, 2450, 2452, 2458, 2465, 2466, 2468, 2473, 2474, 2477, 2482, 2493, 2498, 2500, 2501, 2504, 2509, 2512, 2516, 2521, 2522, 2525, 2529, 2533, 2536, 2545, 2548, 2549, 2554, 2557, 2560, 2561, 2564, 2570, 2578, 2581, 2592, 2593, 2594, 2597, 2600, 2601, 2602, 2605, 2609, 2610, 2612, 2617, 2621, 2624, 2626, 2628, 2633, 2637, 2642, 2644, 2645, 2650, 2657, 2664, 2665, 2669, 2677, 2682, 2689, 2690, 2692, 2693, 2696, 2701, 2704, 2705, 2708, 2713, 2720, 2722, 2725, 2729, 2738, 2740, 2741, 2745, 2746, 2749, 2753, 2754, 2756, 2762, 2768, 2770, 2777, 2785, 2788, 2789, 2792, 2797, 2801, 2804, 2809, 2810, 2813, 2817, 2818, 2824, 2825, 2826, 2833, 2834, 2836, 2837, 2842, 2845, 2848, 2853, 2857, 2858, 2861, 2866, 2873, 2880, 2885, 2888, 2890, 2896, 2897, 2900, 2906, 2909, 2916, 2917, 2920, 2925, 2929, 2930, 2932, 2938, 2941, 2952, 2953, 2957, 2960, 2962, 2965, 2969, 2977, 2978, 2980, 2984, 2986, 2989, 2993, 2997]];

let ds = [{}, {}, {}, {}, {}];

let r = /^([1-9][0-9]{0,2}|1000)$/

window.onload = function () {
  for (let i = 1; i <= 5; i++) {
    onNewline(document.getElementById('a' + i), tryColorBoxes('a' + i, 'b' + i, i));
    onNewline(document.getElementById('b' + i), tryColorBoxes('b' + i, 'a' + i, i));
  }
}

let onNewline = function (a, f) {
  a.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      event.preventDefault();
      f();
    }
  });
}

let tryColorBoxes = function (a, b, x) {
  return function () {
    if (document.getElementById(b).value === '') {
      document.getElementById(b).focus();
    } else if (document.getElementById(a).value === '') {
      document.getElementById(a).focus();
    } else {
      colorBoxes(x);
    }
  }
}

let colorBoxes = function (x) {
  let l = data[x - 1];
  let d = ds[x - 1];
  let a = document.getElementById('a' + x).value;
  let b = document.getElementById('b' + x).value;
  if (!a.match(r) || !b.match(r)) {
    alert('Put in valid inputs (integers between 1 and 1000).');
    return;
  }
  // Only update UI stuff with valid values
  document.getElementById('a' + x).value = '';
  document.getElementById('b' + x).value = '';
  document.getElementById('a' + x).focus();
  a = +a;
  b = +b;
  let k = a + ', ' + b;
  d[k] = (d[k] || 0) + 1;
  let c = d[k];
  if (c > 1000) {
    alert('I didn\'t handle stuff this high, not sure how I\'d do it in the actual puzzle');
    return;
  }
  let rs = [k].concat([a + b, b + c, c + a].map(i => l.includes(i) ? '✅' : '❌'));
  let t = document.getElementById('t' + x).children[0];
  for (let i = 0; i < 4; i++) {
    let td = document.createElement('td');
    td.style = 'width: 50px;';
    td.innerText = rs[i];
    t.children[i].appendChild(td);
  }
}







