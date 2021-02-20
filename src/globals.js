export default {
    QUIZ_GLOBAL: {
        quiz1: { // Add one dummy # to first quiz question to ensure the next question type works.
            qs: [1, 1671, 1929, 1899, 3238, 1822, 1850, 1889, 1582, 1547, 3155, 1909, 1869, 1584, 1803, 3564, 1726, 1607, 1786, 1650, 1770, 1526, 1611, 1908, 1754, 1794],
            bonus: [3542, 1777, 1588, 3543, 1688, 1628, 3581, 1926, 1539, 1633]
        },
        quiz2: {
            qs: [1, 1624, 3569, 1911, 1841, 1773, 1682, 1017, 1729, 1762, 1890, 1823, 1525, 1901, 1815, 1556, 1817, 3436, 1545, 1601, 1677, 1796, 3584, 1606, 1528, 1866],
            bonus: [1665, 1915, 1769, 3563, 1845, 1599, 1697, 1883, 1686, 1710]
        },
        quiz3: {
            qs: [1, 1538, 1861, 1533, 1918, 3128, 1905, 1795, 1728, 3558, 1884, 1596, 1549, 1719, 1680, 1898, 1605, 1828, 3129, 1934, 1564, 1667, 1836, 1632, 1882, 1775],
            bonus: [1712, 1871, 3537, 1568, 1625, 3586, 3539, 3568, 3565, 1888]
        },
        quiz4: {
            qs: [1, 1622, 1776, 1721, 1720, 1593, 1820, 1774, 1739, 1843, 1683, 3237, 1752, 1896, 1844, 1863, 1675, 1551, 1565, 1609, 1707, 1771, 1598, 1816, 1764, 1579],
            bonus: [1928, 1569, 3580, 3588, 3552, 1865, 3561, 1534, 3615, 1630]
        },
        quiz5: {
            qs: [1, 3606, 1673, 1809, 1875, 3249, 1537, 1940, 1891, 1761, 3129, 1706, 1544, 3538, 1840, 1675, 1713, 1643, 1554, 1751, 1825, 1581, 1910, 1562, 1709, 1842],
            bonus: [3544, 3548, 1567, 3582, 3579, 1535, 1832, 3576, 3555, 1695]
        }, // quizpractice entries will pull random values from the api
        quizpractice: {
            qs: [],
            bonus: []
        }, // Light check's don't need question #'s.
        quizlightcheck: {
            qs: [],
            bonus: []
        }
    }
}