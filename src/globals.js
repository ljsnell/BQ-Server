export default {
    QUIZ_GLOBAL: {
        quiz1: { // Add one dummy # to first quiz question to ensure the next question type works.
            qs: [1, 1152, 2453, 3186, 1513, 1262, 1842, 275, 1242, 2259, 1549, 3224, 1022, 68, 3333, 3243, 1204, 2400, 2, 793, 1156, 151, 142, 1775, 2315, 76],
            bonus: [3730, 3381, 418, 1458, 1427, 1865, 80, 783, 56, 2128]
        },
        quiz2: {
            qs: [1, 2155, 1394, 1347, 3128, 1719, 2057, 1844, 994, 3244, 3361, 2036, 868, 632, 319, 140, 1889, 3600, 1221, 789, 3195, 1934, 2394, 3390, 1899, 3308],
            bonus: [3542, 1695, 2042, 1296, 3576, 87, 397, 387, 1676, 1413]
        },
        quiz3: {
            qs: [1, 3319, 1605, 1767, 165, 1023, 3416, 1129, 3428, 1985, 3271, 2249, 1423, 480, 2154, 1402, 1020, 3483, 469, 1002, 1534, 2444, 281, 3260, 324, 1712],
            bonus: [3608, 1360, 1795, 2339, 1095, 824, 3187, 412, 2432, 3533]
        },
        quiz4: {
            qs: [1, 2074, 1125, 3151, 2119, 95, 3133, 2295, 1451, 2285, 3727, 1710, 2008, 3218, 2149, 3179, 335, 2215, 3176, 3317, 3392, 661, 751, 3597, 136, 2260],
            bonus: [2398, 2331, 2397, 166, 545, 3712, 1987, 3731, 1273, 3472]
        },
        quiz5: {
            qs: [1, 2414, 49, 1117, 3227, 2141, 1966, 935, 1322, 1330, 909, 1280, 390, 3538, 1689, 1984, 3762, 1416, 540, 1084, 753, 3736, 147, 490, 1321, 2422],
            bonus: [1366, 3295, 3765, 52, 3509, 184, 1928, 732, 1821, 3615]
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