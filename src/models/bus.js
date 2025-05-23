const stops = [
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "12:38"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "16:05"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "9:29"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "10:44"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "12:24"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "9:06"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "18:11"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "16:35"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "19:31"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "21:24"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "9:41"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "6:21"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "11:23"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "7:23"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "16:28"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "9:28"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "19:53"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "11:56"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "19:30"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "11:45"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "8:32"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "15:54"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:45"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "9:27"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "9:20"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "16:42"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "14:51"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "8:03"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "7:27"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "21:06"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "17:04"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "11:10"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "17:23"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "18:09"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "8:19"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "12:32"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:09"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "11:47"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "13:04"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "8:25"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "18:38"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "7:38"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "19:18"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "10:36"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:15"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "15:42"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "12:45"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "8:53"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "13:39"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "14:58"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "7:36"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "14:43"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "6:58"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "11:03"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "14:18"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "12:54"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "19:57"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "9:50"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "10:49"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "7:34"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "11:30"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "14:06"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "8:51"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "9:52"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "20:20"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "13:18"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "11:18"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "17:40"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "14:26"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "17:24"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "17:28"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "10:40"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "17:28"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "9:23"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "6:24"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "8:14"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "16:44"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "13:54"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "7:11"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "8:35"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "14:33"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "9:54"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "20:29"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "8:05"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "12:43"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "17:25"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "21:16"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "12:38"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "6:09"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "9:47"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "11:04"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "18:59"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "15:21"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "17:41"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "6:06"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "8:54"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "18:21"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "19:35"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "16:34"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "16:37"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "21:18"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "15:57"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "12:46"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "13:33"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "10:38"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "8:36"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "7:05"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "21:47"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "14:48"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "9:28"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "11:50"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "14:19"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "19:30"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "11:37"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "16:21"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "16:53"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "21:53"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "6:42"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "11:11"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "18:38"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "11:19"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "18:52"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "12:21"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "15:10"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "11:47"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "7:33"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "10:39"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "15:27"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "11:49"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "13:15"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "21:48"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "6:50"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "15:55"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "13:22"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "11:47"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "7:54"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "19:57"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "7:02"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:26"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "12:42"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "18:14"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "6:36"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "21:42"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "6:01"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "15:01"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "14:25"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "14:11"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "7:05"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "16:40"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "13:51"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "21:36"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "12:24"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "18:26"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "17:11"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "7:37"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "6:25"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "12:06"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "12:56"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "9:32"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "20:19"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "14:24"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "7:32"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "17:25"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "17:09"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "19:26"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "19:15"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "16:24"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "14:21"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "12:24"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "14:01"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "12:35"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "20:55"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "13:44"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "6:41"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "20:10"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "14:09"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "18:22"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "9:10"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "10:44"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "18:56"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "20:30"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "13:44"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "20:59"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "6:33"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "10:13"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "10:19"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "12:39"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "8:50"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "8:01"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "21:20"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "12:45"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "20:25"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "10:21"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "8:05"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "6:28"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "15:50"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "21:52"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "18:30"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "13:36"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "18:25"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "14:11"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "16:14"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "7:54"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "9:03"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "19:13"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "14:22"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "19:32"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "19:04"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "17:48"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "21:16"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "16:19"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "9:05"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "15:57"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "14:43"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "16:24"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "8:49"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "18:40"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "21:43"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "9:12"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "8:01"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "21:28"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "6:15"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "21:06"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "8:44"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "9:43"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:06"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "19:16"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "13:45"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "16:54"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "10:59"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "20:37"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "6:10"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "15:52"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "19:33"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "15:50"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "19:05"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "17:02"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "9:04"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "7:08"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "17:12"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "10:32"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "6:33"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "6:52"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "6:12"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:10"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "7:58"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "10:07"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "19:28"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "11:11"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "17:26"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "17:25"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "9:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "15:55"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "9:52"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "14:20"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "8:48"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "8:49"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "20:26"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "9:43"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "8:05"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "18:04"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "21:58"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "13:21"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "7:37"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "13:23"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "8:31"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "6:13"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "19:09"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "15:07"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "8:32"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "15:05"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "9:58"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "21:47"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "16:46"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "18:09"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "13:23"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "13:33"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "6:49"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "15:20"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "7:12"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "14:13"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "19:12"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "20:32"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "6:12"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "12:33"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "17:20"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "17:49"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "21:26"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "17:44"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "6:53"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "8:32"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "8:16"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "8:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "14:35"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "6:53"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "11:13"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "6:26"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "19:31"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "14:35"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "19:30"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "15:58"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "9:28"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "6:03"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "8:23"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "9:58"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "14:31"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "13:54"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "13:24"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "21:32"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "12:31"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "16:39"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "12:01"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "21:46"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "12:09"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "17:39"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "20:31"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "6:43"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "11:02"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "15:23"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "15:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "21:25"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "11:45"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:54"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "21:30"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "9:54"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "10:29"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "19:41"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "20:07"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "11:11"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "9:52"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "17:36"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "10:11"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "19:25"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "17:07"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "6:24"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "19:41"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "14:12"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "6:19"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "14:20"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "16:55"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "19:36"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "8:17"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "12:33"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "18:49"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "6:01"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "20:06"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "10:55"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "19:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "7:30"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "6:41"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "10:05"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "14:54"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "8:02"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "9:41"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "12:03"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "7:20"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "15:49"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "10:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "13:15"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "9:31"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:33"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "10:06"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "12:59"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "19:55"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "21:49"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "21:03"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "6:48"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "17:55"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "15:33"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "7:06"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "9:32"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "15:28"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "6:11"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "11:58"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "15:12"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "21:14"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "21:20"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "21:32"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "14:01"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "19:27"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "15:49"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:24"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "21:17"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "9:56"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "21:10"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "6:40"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "21:16"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "12:13"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "16:40"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "21:35"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "13:37"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "17:20"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "7:45"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "18:47"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "7:02"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "12:03"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "9:35"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "11:52"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "13:25"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "18:24"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "8:02"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "8:25"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "9:19"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "13:42"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "16:33"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "12:51"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "19:39"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "9:40"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "6:30"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "19:21"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "21:42"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "16:42"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "11:24"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "15:11"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "11:43"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "17:04"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "7:21"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "9:13"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "8:11"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "11:04"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "18:55"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "12:28"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "10:32"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "7:40"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "15:54"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "11:16"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "8:14"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "6:12"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "8:50"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "8:34"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "15:44"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "11:13"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "7:15"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "6:19"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "11:28"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "6:56"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "16:12"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "14:26"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "12:09"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "11:21"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "12:50"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "16:44"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "15:48"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "20:15"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "6:29"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "7:35"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "20:02"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "16:57"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "7:17"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "19:27"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "13:21"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "18:56"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "20:09"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "16:39"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "14:43"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "17:58"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "11:33"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "7:22"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "10:02"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "17:12"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "17:01"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "15:07"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "16:20"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "10:46"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "19:53"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "15:26"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "9:57"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "13:26"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "11:01"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "13:18"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "21:20"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "19:36"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "6:26"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "8:27"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "15:34"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "9:14"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "17:44"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "15:01"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "6:52"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "16:39"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "20:25"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "14:50"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "12:39"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "17:51"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "20:36"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "18:03"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "8:19"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "16:41"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "10:14"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "9:51"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "10:33"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "12:18"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "9:12"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "19:28"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "15:06"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "16:55"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "9:22"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "13:02"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "11:46"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "18:53"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "19:19"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "6:43"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "7:36"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "7:21"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "16:15"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "19:37"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "18:17"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "19:28"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "19:13"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "7:25"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:55"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "17:26"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:48"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "14:07"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "16:21"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "21:32"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "13:11"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "18:46"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "8:49"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "6:47"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "8:59"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "19:13"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "14:09"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "14:28"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "10:39"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "17:47"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "16:17"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "15:16"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "9:25"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "16:54"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "11:34"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "9:49"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "9:42"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "6:09"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "12:49"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "10:15"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "8:04"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "8:17"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "16:57"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "16:29"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "7:32"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "19:13"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "16:20"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "19:54"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "14:29"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "18:47"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "10:23"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "8:59"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "15:03"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "10:25"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:18"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "18:29"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "8:24"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "15:50"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "6:17"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "20:57"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "18:27"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "10:07"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "11:26"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "10:20"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "21:34"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "13:59"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "12:24"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "19:09"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "21:14"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "8:42"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "14:21"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "8:27"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "10:21"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "7:39"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "18:11"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "6:11"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "18:44"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "6:07"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "9:46"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "6:06"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "10:22"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "21:16"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "16:46"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "9:12"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "12:58"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "16:19"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "7:15"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "7:24"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "17:03"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "17:16"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "17:14"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "16:27"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "12:44"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "19:44"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "20:42"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "20:47"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "9:23"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "8:16"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "21:54"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "6:38"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "13:16"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "7:35"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "13:12"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "6:37"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "17:30"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "9:10"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "17:52"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "19:44"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "15:22"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "15:39"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "19:20"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "13:34"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "6:16"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "13:19"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "8:46"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "14:48"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "6:42"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "10:03"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "12:16"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "6:16"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "19:34"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "8:32"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "11:51"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "12:04"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "15:34"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "13:53"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "13:27"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "7:32"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "17:23"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:48"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "17:13"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "9:57"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "13:09"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "15:10"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "15:21"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "10:38"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "14:47"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "12:48"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "11:10"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "18:38"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "12:12"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "21:51"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "18:41"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "15:01"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "6:03"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "12:06"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "13:22"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "8:37"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "10:31"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "10:44"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "8:09"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "11:29"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "15:36"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "9:04"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "16:34"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "15:58"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "7:40"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "12:55"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "8:53"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "14:55"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "9:49"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "17:28"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "9:54"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "6:47"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "15:41"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "19:20"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "6:12"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "20:53"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "13:58"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "7:34"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "11:10"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "11:21"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "15:05"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "7:26"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "16:43"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "18:34"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "20:05"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "10:17"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "16:43"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "20:58"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "12:19"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "11:52"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "16:44"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "8:52"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "14:54"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "11:51"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "14:02"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "19:30"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "10:47"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "6:31"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "14:10"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "15:48"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "7:24"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "16:39"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "17:59"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "17:44"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "16:24"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "9:03"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "11:17"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "11:23"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "7:27"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "21:02"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "16:31"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "14:39"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "14:47"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "15:36"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "8:05"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "13:01"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "21:03"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "9:06"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "21:09"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "9:11"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "6:54"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "7:53"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "6:58"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "12:54"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "11:04"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "21:43"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "11:44"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "16:48"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "10:43"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "17:44"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "10:35"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "9:28"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "10:37"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "21:24"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "18:32"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "18:10"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "14:34"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "9:47"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "20:24"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "9:46"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "11:17"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "20:21"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "17:40"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "11:29"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "9:42"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "20:27"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "17:30"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "16:25"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "7:48"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "15:36"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "12:29"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "18:01"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "9:58"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "18:12"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "17:38"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "18:32"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "8:17"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "14:46"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "8:33"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "7:27"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "19:37"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "8:49"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "15:13"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:54"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "12:35"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "13:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "11:10"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "6:08"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "8:51"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "7:37"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "7:06"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "8:09"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "17:12"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "13:14"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "11:23"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "7:44"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "15:13"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "7:37"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "21:54"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "7:21"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "19:02"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "17:39"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "10:50"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "17:52"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "9:05"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "17:54"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "21:29"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "20:07"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "13:43"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "16:12"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "20:43"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "11:33"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "21:34"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "10:56"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "10:03"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "18:23"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "16:12"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "9:02"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "20:49"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "9:29"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "18:06"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "16:36"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "9:20"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "9:01"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "15:47"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "18:20"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "21:54"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "14:24"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "15:57"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "9:10"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "13:32"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "10:54"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "9:12"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "15:37"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "21:31"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "12:54"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "11:41"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "16:26"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "13:25"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "18:08"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "21:50"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "9:36"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "17:28"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "19:57"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "12:54"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "21:52"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "9:11"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "10:20"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "6:48"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "7:48"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "14:31"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "14:42"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "8:21"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "16:58"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "14:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "11:58"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "19:52"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "19:51"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "10:06"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "17:33"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "10:38"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "19:52"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "8:46"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "21:02"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "11:03"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "11:58"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "18:44"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:25"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "20:33"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "10:49"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "9:40"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "12:44"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "13:20"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "11:02"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "17:25"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "14:14"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "15:24"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "6:52"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "11:08"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "8:41"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "12:03"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "18:08"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "12:06"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "14:49"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "13:53"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "16:39"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "6:37"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "21:36"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "6:09"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "12:11"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "19:10"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "21:31"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "10:35"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "17:24"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "20:57"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "14:44"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "6:36"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "14:58"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:44"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "20:24"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "20:25"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "10:40"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "17:22"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "7:36"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "14:05"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "19:39"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "19:51"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "13:15"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "14:40"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "10:44"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "19:12"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "21:29"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "8:31"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "9:32"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "8:25"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "11:31"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "14:11"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "21:14"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "21:08"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "17:58"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "15:40"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "8:32"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "21:49"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "11:46"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "13:48"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "19:05"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "8:32"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "19:01"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "18:17"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "20:49"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "9:37"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "17:44"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "7:58"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "20:30"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "18:47"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "18:45"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "18:45"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "17:24"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "17:34"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "6:03"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "14:25"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "16:55"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "15:30"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "15:08"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "11:07"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "11:42"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "13:21"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "11:07"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:01"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "21:10"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "21:33"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "12:25"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "10:29"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "8:31"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "18:21"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "15:43"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "7:40"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "13:33"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "21:01"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "16:15"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "7:47"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "15:41"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "21:51"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "8:51"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "18:20"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "8:21"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "9:57"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "8:05"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "17:56"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "21:23"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "14:30"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "19:28"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "9:19"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "14:37"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "6:05"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "18:53"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "20:49"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "8:41"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "8:40"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "21:33"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "21:36"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "7:04"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "7:15"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "19:44"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "18:18"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "20:50"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "18:58"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:22"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "21:48"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "9:37"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "15:05"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "11:46"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "10:39"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "15:02"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "16:44"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "19:35"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "21:03"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "12:24"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "9:57"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "16:18"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "16:16"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "18:26"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "7:10"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "7:03"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "18:05"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "13:21"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "20:13"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "11:39"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "13:34"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "10:45"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "13:38"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "10:30"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "17:08"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "11:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "16:18"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "12:08"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "16:34"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "8:45"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "15:06"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "15:53"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "20:27"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "10:28"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "7:36"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "14:45"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "7:20"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "15:53"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "19:53"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "18:40"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "18:39"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "7:52"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "6:16"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "14:30"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "6:44"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "16:58"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "14:44"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "11:33"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "21:46"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "11:39"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "12:27"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "13:36"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "11:58"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "17:09"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "20:26"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "11:27"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "10:47"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "13:15"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "14:28"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "18:49"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "14:46"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "9:35"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:35"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "10:35"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "15:26"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "21:46"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "16:19"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "8:46"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "16:43"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "19:38"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "12:10"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "17:18"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "12:06"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "13:42"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "16:06"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "18:33"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "10:58"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "9:17"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "19:40"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "19:58"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "19:37"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "11:42"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "20:22"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "8:46"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "14:34"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "17:27"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "16:13"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "16:03"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "10:15"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "8:08"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "17:56"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "15:45"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "14:38"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "16:14"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "17:46"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "11:58"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "16:28"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "9:22"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "7:34"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "19:07"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "16:04"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "8:58"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "12:18"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "20:33"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "17:19"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "10:36"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "11:09"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "18:36"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "14:47"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "12:57"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "12:12"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "10:16"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "13:41"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "11:13"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "13:44"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "11:06"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "21:11"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "20:44"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "10:07"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "20:05"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "8:14"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "20:50"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "17:34"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "17:31"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "7:02"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "7:17"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:45"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "11:51"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "14:13"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "18:57"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "15:45"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "21:33"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "13:53"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "18:07"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "15:53"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "9:12"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "10:13"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "17:04"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "9:29"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "21:07"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "14:27"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "20:50"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "20:16"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "21:27"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "19:42"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "14:17"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "20:18"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "18:51"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "7:42"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "6:49"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "16:41"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "21:48"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "7:34"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "17:48"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "13:53"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "10:57"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "18:45"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "9:21"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "20:34"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "20:06"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "9:36"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "16:39"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "20:47"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "12:53"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "10:03"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "14:57"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "7:24"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "12:50"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "7:46"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "11:56"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "20:38"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "12:16"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "19:01"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "8:46"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "9:48"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "6:05"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "7:45"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "14:42"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "16:23"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "18:28"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "18:05"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "19:45"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "19:11"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "17:31"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "16:06"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "15:47"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "11:32"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "9:46"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "20:41"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "15:37"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "19:58"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "19:03"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "15:36"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "7:28"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "17:40"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "16:08"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "12:59"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "18:49"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "7:51"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "8:20"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "7:54"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "7:27"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "9:16"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "7:31"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "6:54"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "18:54"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "15:33"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "12:06"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "11:08"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "17:13"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "13:54"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "16:36"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "18:53"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "7:16"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "15:30"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "17:01"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "18:47"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "7:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "19:40"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "18:28"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "11:54"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "7:47"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "8:15"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "16:32"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "19:45"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "10:55"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "15:40"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "11:16"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "7:42"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "9:36"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "14:47"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "12:04"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "7:40"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "6:18"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "19:20"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "9:49"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "13:21"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "20:49"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "20:48"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "13:48"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "19:16"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "7:37"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "21:45"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "18:05"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "9:37"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "12:57"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "17:21"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "13:42"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "9:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "13:19"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "8:55"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "11:23"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "18:03"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "9:24"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "17:36"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "8:28"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "10:17"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "10:03"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "17:20"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "10:28"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "21:03"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "11:14"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "6:01"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "10:29"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "16:37"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "18:23"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "13:47"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "11:15"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "17:46"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "17:37"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "13:49"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "8:19"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "9:30"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "15:40"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "21:47"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "6:57"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "14:25"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "11:09"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "6:58"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "20:36"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "17:21"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "13:26"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "10:50"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "13:25"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "6:57"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "19:23"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "13:48"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "17:25"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "13:10"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "15:36"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "17:57"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "13:03"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:57"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "7:01"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "6:02"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "19:52"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "12:38"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "12:07"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "19:22"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "6:09"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "15:02"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "10:12"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "9:45"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "19:42"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "10:07"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "13:11"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "17:16"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "20:18"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "14:44"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "10:07"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "9:54"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "15:17"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "12:28"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "18:05"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "6:18"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "17:08"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "19:04"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "10:44"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "17:33"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "20:38"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "19:42"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "14:21"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "8:06"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "10:27"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "9:41"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "20:21"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "9:18"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "11:32"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "13:30"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "14:11"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "6:07"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "8:27"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "7:59"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "16:01"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "13:40"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "10:40"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "7:49"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "17:30"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "7:01"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "9:14"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "10:16"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "6:02"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "19:31"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "8:40"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "9:23"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "6:10"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "19:35"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "9:19"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "17:36"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "13:21"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "8:48"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "15:30"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "16:58"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "17:46"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "15:41"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "7:27"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "6:50"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "12:04"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "11:32"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "12:55"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "16:46"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "7:37"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "11:58"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "6:39"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "16:30"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "19:17"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "14:03"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "7:29"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "9:44"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "20:27"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "19:04"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "21:15"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "6:04"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "9:06"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "8:38"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "13:52"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "19:09"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "10:58"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "20:35"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "11:02"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "9:36"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "21:12"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "12:42"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "19:23"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "16:59"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "21:13"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "16:48"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "9:41"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "7:27"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "11:04"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "20:10"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "18:14"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "8:27"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "21:29"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "18:24"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "21:30"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "18:21"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "16:31"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "15:12"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "16:28"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "21:45"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "15:26"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "12:50"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "12:42"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "17:48"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "7:42"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "7:16"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "15:38"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "17:58"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "16:49"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "11:36"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "20:56"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "13:26"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:09"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "10:06"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "8:40"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "19:17"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "8:47"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "11:20"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "14:43"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "10:05"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "15:55"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "19:07"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "17:56"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "19:14"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "12:09"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "19:31"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "19:33"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:04"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "11:27"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "7:01"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "20:53"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "17:32"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "15:37"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "21:41"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "12:08"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "9:20"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "18:57"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "10:56"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "6:58"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "12:49"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "13:23"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "21:14"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "16:42"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "20:02"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "11:25"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "12:04"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "20:38"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "17:50"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "9:47"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "16:12"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "15:19"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "20:50"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "14:49"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "7:54"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "8:32"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "17:28"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "7:09"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "7:21"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "17:37"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "15:06"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "21:15"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "17:36"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "16:42"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "15:11"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "13:19"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "8:28"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "18:18"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "21:17"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "18:52"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "9:44"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "11:10"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "17:06"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "19:23"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "14:57"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "12:52"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "17:06"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "19:03"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "20:11"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "9:01"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "18:16"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "15:35"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "21:37"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "8:06"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "18:54"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "10:31"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "12:37"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "19:24"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "13:39"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "13:29"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "11:59"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "18:40"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "18:44"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "18:42"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "20:37"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "8:35"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "7:30"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "6:20"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "13:34"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "13:27"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "11:41"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "17:39"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "15:49"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "14:50"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "7:35"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "11:53"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "15:43"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "20:20"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "9:26"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "15:32"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "21:47"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "12:09"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "6:29"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "7:41"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "18:15"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "9:43"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "6:17"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "6:16"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "12:03"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "6:04"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "15:09"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "8:33"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "8:44"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "18:20"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "14:31"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "15:26"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "15:10"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "11:38"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "12:51"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "19:20"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "16:36"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "7:05"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "9:31"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "7:11"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "21:15"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:29"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "16:40"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "13:02"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "8:27"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "15:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "18:43"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "16:39"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "16:58"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "10:55"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "19:39"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "13:24"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "10:20"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "16:25"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "15:58"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "18:51"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "21:33"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "15:43"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "9:32"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "20:58"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "6:11"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "6:03"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "12:51"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "14:21"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "9:30"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "18:50"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "7:11"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "9:15"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "20:28"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "12:42"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "17:56"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "12:45"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "13:34"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "16:16"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "20:31"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "7:17"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "11:55"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "8:03"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "9:36"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "10:46"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "10:52"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "19:47"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "15:45"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "14:50"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "12:02"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "6:07"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "16:49"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "9:09"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "7:08"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "16:26"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "20:02"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "20:56"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "16:09"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "20:35"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "19:35"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "6:42"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "20:26"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "9:48"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "15:12"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "9:09"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "15:07"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "21:21"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "19:28"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "21:37"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "15:14"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "13:53"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "13:53"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "15:46"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "7:06"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "7:51"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "13:10"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "19:44"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "19:38"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "17:56"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "8:16"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "18:48"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "9:05"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "11:17"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "8:02"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "10:38"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "18:35"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "14:13"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "20:26"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "10:42"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "13:39"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "7:17"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "20:17"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "7:13"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "17:02"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "6:11"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "20:53"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "16:57"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "13:26"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "8:40"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "10:33"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "16:53"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "13:06"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "7:42"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "18:25"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "6:49"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "17:13"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "14:25"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "19:57"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "17:35"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "14:58"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "21:50"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "10:09"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "14:01"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "8:57"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "6:11"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "14:19"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "20:08"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "8:12"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "21:58"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "20:49"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "13:30"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "6:41"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "6:24"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "10:27"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "12:26"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "19:05"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "17:19"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "7:19"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "18:36"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "12:58"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "16:05"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "11:35"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "9:15"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "20:08"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "21:31"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "7:54"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "16:58"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "11:10"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "7:16"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "12:21"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "14:52"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "21:13"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "9:04"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "15:17"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "6:15"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:43"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "15:26"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "17:45"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "15:01"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "15:22"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "13:50"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "9:21"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "14:12"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "14:33"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "17:09"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "11:39"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "9:37"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "10:35"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "10:28"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "18:32"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "10:57"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "13:01"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "21:29"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "17:42"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "15:26"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "14:28"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "19:14"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "10:51"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "8:22"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "6:49"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "12:30"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "18:31"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "15:23"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "9:32"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "9:56"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "19:26"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "16:52"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "9:35"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "6:21"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "15:29"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "18:40"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "17:48"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "10:47"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "18:21"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "14:36"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "8:35"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "17:35"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "20:27"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "14:15"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "18:18"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "18:31"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "14:25"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "6:39"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "10:16"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "12:16"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "10:01"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "8:59"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "20:54"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "8:03"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "17:08"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "9:54"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "12:52"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "19:03"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "8:15"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "9:03"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "18:40"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "19:10"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "15:44"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "14:55"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "11:49"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "17:02"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "17:59"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "14:44"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "18:58"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "17:30"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "18:20"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "12:10"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "11:57"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "6:37"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "7:16"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "14:19"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "20:42"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "19:39"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "11:07"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "7:50"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "16:46"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "18:41"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "19:41"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "11:37"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "13:13"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "14:17"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "11:12"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "6:51"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "7:15"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "14:13"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "11:27"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "11:13"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "18:01"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "21:30"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "15:18"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "20:08"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "14:16"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "11:34"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "10:02"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "9:29"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "17:22"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "18:37"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "11:47"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "19:12"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "9:04"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "11:41"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "21:26"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "7:50"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "18:04"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "17:30"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "13:31"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "9:08"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "15:40"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "15:22"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "12:21"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "11:39"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "13:59"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "12:28"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "19:06"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "12:11"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "19:29"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "9:05"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "17:26"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "20:43"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "21:38"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "21:42"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "12:05"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "18:13"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "17:22"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "8:39"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "9:06"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "9:05"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "10:52"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "17:26"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "19:56"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "18:18"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "6:43"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "6:17"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "16:01"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "6:47"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "12:50"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:31"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "17:21"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "19:07"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:27"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "12:49"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "8:16"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "11:03"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "15:14"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "15:29"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "10:14"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "12:39"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "12:32"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "17:11"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "13:34"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "17:50"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "18:37"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "10:29"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "14:02"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "20:34"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "17:08"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "14:37"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "21:12"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "13:58"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "13:45"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "16:30"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "14:40"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "13:09"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "6:13"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "10:35"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "15:14"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "15:20"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "11:09"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "11:27"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "6:18"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "18:39"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "6:20"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "9:59"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "19:20"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "8:49"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "10:51"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "10:40"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "18:32"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "18:44"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "20:40"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "21:07"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "15:52"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "17:08"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "19:30"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "12:28"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "18:35"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "20:23"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "13:55"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "6:14"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "11:39"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "18:33"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "18:13"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "13:55"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "14:36"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "8:39"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "6:52"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "20:38"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "17:47"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "19:08"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "18:36"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "19:10"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "16:53"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "20:44"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "18:11"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "8:53"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "15:03"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "7:24"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "14:46"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "20:51"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "20:42"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "20:17"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "19:02"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "18:12"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "10:51"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "19:18"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "17:02"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "16:53"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "8:17"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "19:02"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "14:42"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "12:18"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "8:21"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "14:02"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "9:49"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "12:22"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "13:16"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "9:51"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "14:09"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "8:35"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "9:24"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "6:18"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "13:44"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "12:07"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "21:35"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "10:17"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "6:55"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "17:30"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "11:36"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "21:37"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "18:11"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "12:57"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "8:28"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "18:47"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "19:41"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "10:34"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "6:42"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "16:47"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "7:54"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "9:16"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "11:31"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "12:38"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "12:43"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "15:53"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "15:23"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "11:20"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "6:57"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "17:47"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "16:07"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "6:06"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "8:39"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "14:35"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "18:53"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "10:48"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "17:03"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "9:56"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "20:39"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "10:07"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "15:20"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "17:49"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "17:07"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "6:38"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "21:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "12:19"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "12:09"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "15:16"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "6:45"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "15:10"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "12:25"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "11:15"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "12:08"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "20:35"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "12:51"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "18:44"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "7:20"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "14:44"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "20:28"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "11:03"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "15:17"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "8:31"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "18:53"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "7:45"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "14:11"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "11:18"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "20:13"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "17:25"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "16:11"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "6:53"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "21:44"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "9:38"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "21:50"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "10:06"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "11:34"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "16:07"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "12:44"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "20:02"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "20:31"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "16:45"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "13:04"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "16:17"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "17:52"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "7:39"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "13:33"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "14:33"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "7:33"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "15:08"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "6:08"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "12:24"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "16:38"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "16:04"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "8:34"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "16:48"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "16:51"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "9:05"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:19"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "20:27"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "11:54"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "13:37"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "14:08"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "10:12"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "6:39"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "14:48"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "11:31"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "8:53"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "6:24"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "8:50"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "13:30"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "20:51"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "14:01"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "7:03"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "17:16"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "7:26"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "15:12"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "18:39"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:42"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "9:24"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "11:56"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "9:18"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "12:03"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "13:51"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "18:28"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "13:23"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "16:40"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "20:43"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "6:16"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "16:41"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "20:38"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "15:42"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:31"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "10:50"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "19:32"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "14:08"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "13:21"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "13:29"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "8:22"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:42"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "18:40"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "14:16"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "15:04"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "17:42"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "20:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "8:24"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "20:52"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "14:15"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "10:13"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "14:44"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "17:16"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "11:15"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "20:27"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "10:36"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "11:02"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "18:12"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "15:46"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "21:07"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "21:20"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "7:50"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "20:40"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "16:34"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "12:05"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "13:53"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "9:39"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "15:41"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "12:05"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "13:49"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "19:22"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "10:58"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "11:54"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:57"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "9:34"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "9:14"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "12:04"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "12:53"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "20:31"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "20:15"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "14:10"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "16:07"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "18:30"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "11:49"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "14:02"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "13:54"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "7:21"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "17:27"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "11:53"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "16:09"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "19:18"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "12:49"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "18:48"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "8:35"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "8:39"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "19:38"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "16:24"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "18:51"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "14:17"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "16:02"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "16:51"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "14:43"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "10:35"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "9:26"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "11:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "18:03"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "12:38"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "7:56"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "13:28"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "13:36"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "17:27"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "6:03"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "11:45"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "18:17"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "15:19"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "17:47"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "14:39"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "13:41"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "7:03"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "17:19"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "18:52"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "17:18"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "19:18"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "8:46"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "19:32"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "7:51"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "8:05"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "9:10"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "11:01"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "10:49"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "13:14"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "17:57"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "18:41"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "15:43"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "16:54"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "10:03"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "15:46"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "13:29"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "10:24"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "17:47"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "20:23"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "10:21"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "21:38"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "11:07"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "13:30"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "18:41"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "17:53"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "6:28"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "21:19"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "10:22"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "15:19"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "7:04"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "17:19"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "9:31"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "17:34"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "13:43"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "17:50"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "16:33"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "17:01"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "17:45"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "10:56"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "8:18"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "7:43"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "10:15"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "14:22"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "8:04"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "20:37"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "9:44"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "13:53"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "8:49"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "11:37"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "6:59"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "15:09"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "6:09"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "13:19"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "19:03"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "8:15"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "8:44"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "12:33"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "19:29"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "11:06"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "14:14"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "14:37"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "15:05"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "15:43"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "13:27"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "7:28"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "20:05"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "8:22"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "12:28"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:08"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "14:52"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "16:50"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "11:36"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "11:50"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "15:24"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "19:11"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "13:58"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "14:41"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:51"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "16:03"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "19:13"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "19:15"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "16:09"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "14:23"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "9:19"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "6:55"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "8:12"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "18:28"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "10:52"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "15:16"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "17:28"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:48"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "17:06"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "12:38"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "11:45"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "6:35"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "16:42"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "8:01"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "21:14"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "12:26"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "9:09"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "11:30"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "19:14"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "9:26"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "11:51"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "21:10"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "17:50"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "15:19"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "11:18"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "20:15"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "10:54"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "21:08"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "9:50"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "21:22"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "12:46"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "9:38"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "10:11"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "20:36"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "18:27"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "16:30"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "7:45"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "14:56"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "13:50"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "21:25"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "7:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "19:54"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "10:44"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "17:16"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "21:03"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "13:54"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "11:58"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "16:30"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "7:26"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "20:23"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "11:04"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "6:42"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "14:02"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "14:12"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "7:44"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "15:11"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "17:19"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "19:05"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "21:28"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "13:38"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "11:20"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "16:59"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "11:57"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "21:41"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "8:03"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "20:39"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "14:29"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "16:39"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "6:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "6:41"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "13:16"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "10:32"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "12:12"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "20:15"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "8:05"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "13:53"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "14:35"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "21:10"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "21:19"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "20:40"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "20:53"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "7:09"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:14"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "7:19"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "12:49"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "12:32"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "7:51"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "20:16"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "8:24"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "10:08"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "7:19"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "6:50"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "9:04"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "8:26"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "7:26"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "17:11"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "20:39"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "8:12"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "10:48"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "20:40"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "13:48"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "6:50"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "10:34"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "21:27"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "13:58"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "18:53"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "18:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "15:44"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "20:53"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "21:02"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "15:05"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "14:45"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "13:10"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "9:21"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "11:10"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "21:26"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "6:33"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "19:33"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "10:46"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "12:27"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "9:50"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "17:20"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "9:05"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "17:37"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "16:44"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "6:32"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "17:43"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "11:40"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "10:36"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "11:40"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "10:43"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "16:56"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "17:33"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "9:55"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "14:38"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "8:01"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "12:21"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "19:30"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "11:40"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "14:26"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "11:44"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "12:24"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "19:05"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "6:05"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "20:05"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "9:44"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "6:24"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "12:47"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "13:19"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "17:04"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "9:35"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "11:13"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "10:48"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "9:46"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "8:25"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "20:28"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "16:08"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "19:27"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "11:54"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "16:28"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "13:19"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "17:17"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "15:14"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "16:17"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "15:06"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "18:42"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "20:27"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "13:44"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "18:52"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "13:25"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "18:18"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "19:38"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "11:11"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "18:39"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "16:57"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "9:09"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "8:59"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "6:56"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "7:23"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "6:06"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "6:43"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "12:17"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "6:22"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "10:31"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "10:16"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "18:28"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "13:24"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "19:11"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "6:27"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "19:46"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "6:05"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "20:58"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "12:45"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "8:47"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "20:59"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "12:26"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "21:24"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "6:16"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "21:53"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "16:14"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "19:38"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "11:10"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "18:49"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "16:48"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "8:53"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "21:32"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "13:08"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "21:10"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "7:10"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "16:13"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "14:47"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "20:40"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "12:13"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "7:37"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "10:14"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "17:54"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "8:19"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "9:28"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "15:26"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "11:55"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "19:29"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "20:40"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "17:53"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "12:32"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "16:52"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "20:11"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "13:23"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "19:58"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "20:56"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "16:16"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "19:44"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "9:33"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "6:29"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "15:11"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:33"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "9:50"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "11:42"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "18:51"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "17:34"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "21:01"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "13:53"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "8:26"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "17:08"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "18:14"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "6:58"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "8:35"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "9:17"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "9:13"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "20:51"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "18:33"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "19:19"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "18:40"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "20:43"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "20:10"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "15:49"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "10:31"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:08"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "12:50"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "8:30"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "19:38"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "19:57"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "12:14"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "16:47"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "19:46"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "17:08"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "14:49"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "14:44"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "10:20"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "13:09"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "21:50"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "19:19"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "20:05"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "7:38"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "9:25"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "19:15"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "16:57"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "13:29"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "16:07"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "19:14"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "20:12"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "18:30"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "10:17"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "13:09"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "20:53"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "7:06"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "6:14"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "7:35"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "14:10"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "16:12"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "19:24"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "10:58"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "7:24"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "21:44"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "7:05"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "16:37"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "21:38"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "17:22"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "7:02"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "19:39"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "11:41"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:17"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "9:01"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "10:38"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "12:18"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "12:10"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "6:15"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "10:38"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "6:41"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "17:01"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "19:58"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "8:13"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "14:04"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "6:05"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "18:28"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "7:57"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "11:33"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "18:03"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "8:10"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "16:26"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "12:58"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "11:06"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "11:41"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "14:02"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "21:56"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "13:47"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "9:45"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "21:40"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "10:06"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "6:55"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "12:01"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "8:44"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "17:33"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "14:50"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "16:36"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "7:17"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "21:30"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "13:54"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "15:58"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "10:17"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "19:10"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "10:34"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "19:39"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "14:35"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "8:01"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "6:32"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "10:49"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "12:35"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "12:16"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "16:44"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "6:21"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "12:51"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "10:19"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "10:23"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "16:18"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "8:42"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "9:41"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "8:36"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "15:30"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "13:53"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "10:34"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "8:09"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "6:41"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "18:07"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "17:25"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "21:15"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "19:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "19:33"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "10:15"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "19:21"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "19:17"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "19:07"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "13:12"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "9:17"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "8:36"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "6:10"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "16:01"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "8:10"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "16:33"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "7:53"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "21:47"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "19:19"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "17:59"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "11:20"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "14:10"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "15:59"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "21:33"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "6:02"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "13:43"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "20:35"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "15:41"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "14:53"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "7:37"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "18:12"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:15"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "20:48"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "13:51"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "6:36"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:46"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "16:35"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "18:21"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "11:34"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "7:01"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "10:46"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "13:17"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "18:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "10:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "10:14"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "11:40"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "15:09"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "11:46"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "10:27"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "9:15"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "10:29"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "13:30"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "9:42"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "12:46"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "19:11"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "6:50"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "7:57"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "21:17"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "10:53"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "6:22"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:49"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "8:21"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "7:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "18:03"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "17:20"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "15:51"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "7:04"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "14:31"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "7:16"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "13:36"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "19:31"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "7:17"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:34"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "9:48"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "12:33"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "17:35"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "15:39"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "15:57"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "10:54"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "20:34"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "8:21"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "21:51"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "15:10"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "19:20"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "11:34"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "20:31"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "15:08"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "12:16"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "9:18"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "16:37"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "6:08"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "6:16"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "17:53"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "6:06"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "14:43"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "21:22"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "18:19"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "16:07"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "6:46"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "16:33"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "17:14"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "21:08"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "7:20"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "8:09"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "12:18"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "14:13"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "16:01"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "7:38"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "12:16"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "20:22"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "15:12"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "17:49"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "16:48"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "13:52"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "12:37"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "14:43"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "14:50"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "6:36"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "17:21"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "21:18"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "10:53"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "12:56"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "6:40"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "9:05"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "6:14"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "10:02"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "13:32"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "8:39"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "9:18"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "20:22"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "6:09"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "17:35"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "11:26"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "16:51"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "16:05"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "21:32"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "18:12"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "8:19"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "21:33"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "13:04"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "14:58"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "20:48"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "12:37"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "16:10"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "8:34"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "13:33"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "11:24"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "21:38"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "18:40"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "21:46"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "19:18"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "10:06"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "13:24"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "19:28"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "19:35"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "21:51"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "19:03"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "14:51"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "8:51"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "12:54"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "21:50"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "20:28"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "7:33"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "20:16"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "6:35"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "12:18"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "12:52"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "21:15"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "9:43"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "6:23"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "8:08"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "13:03"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "11:37"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "14:29"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "16:34"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "9:23"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "7:58"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "16:57"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "6:46"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "17:45"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "7:41"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "15:12"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "11:03"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "20:48"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "17:20"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "12:08"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "20:25"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "19:58"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "17:21"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "17:32"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "14:57"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "17:49"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "15:26"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "18:04"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "15:17"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "12:56"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "21:03"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "18:31"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "20:49"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "20:52"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "12:01"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "14:54"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "17:09"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "10:09"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "19:12"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "15:26"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "8:36"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "17:28"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "20:55"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "9:40"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "8:37"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "8:54"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "7:09"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "20:25"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "16:05"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "12:52"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "11:54"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "18:42"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "10:34"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "7:29"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "9:14"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "15:54"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "6:14"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "13:26"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "12:02"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "20:04"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "9:02"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "10:09"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "21:59"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "21:24"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "14:06"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "9:10"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "18:19"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "17:10"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "6:33"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "21:52"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "12:58"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "19:55"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "17:55"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "9:54"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "9:12"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "20:08"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "15:21"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "12:05"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "16:48"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "6:17"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "6:37"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "21:12"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "14:39"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "16:28"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "14:43"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "12:06"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "19:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "16:16"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "9:12"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "19:07"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "6:42"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "14:27"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "14:15"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "13:45"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "12:41"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "13:44"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "9:05"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "13:26"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "17:58"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "7:07"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "18:36"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "8:27"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "17:29"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "17:44"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "20:26"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "9:40"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "21:13"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "18:48"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "9:01"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "7:29"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "12:24"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "11:16"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "16:21"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "16:27"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "12:09"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "17:32"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "13:24"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "10:12"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "17:23"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "11:06"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "19:54"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "15:38"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "15:28"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "10:03"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "10:44"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "11:18"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "17:38"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "14:08"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "12:41"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "19:17"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "13:30"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "6:35"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "18:22"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "18:03"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "8:22"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "12:01"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "6:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "16:11"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "20:31"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "19:56"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "6:51"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "13:48"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "11:37"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "6:49"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "16:06"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "14:13"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "10:14"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "19:56"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "6:05"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "18:38"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "15:31"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "19:11"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "14:50"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "7:55"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "6:26"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "15:41"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:47"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "12:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "8:02"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "6:09"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "11:57"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "16:55"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "10:13"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "21:22"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "9:04"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "15:13"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "9:39"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "11:10"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "10:53"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "21:03"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "9:50"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "13:57"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "21:55"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "7:08"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "8:02"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "7:08"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "12:37"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "20:16"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "8:52"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "6:44"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "11:02"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "8:21"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "20:26"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "6:54"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "16:13"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "8:55"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "15:50"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "9:20"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "15:32"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "20:20"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "9:06"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "12:17"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "13:12"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "6:56"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "21:32"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "6:09"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "11:07"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "12:49"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "8:12"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "19:37"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "14:03"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "8:44"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:08"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "7:58"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "10:11"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "8:06"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "20:43"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "21:17"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "16:53"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "10:46"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "7:10"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "17:40"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "12:06"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "9:35"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "16:07"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "15:59"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "19:13"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "7:22"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "14:28"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "14:09"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "21:12"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "9:13"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "21:57"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "15:29"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "13:44"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "20:44"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "20:57"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "13:43"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "17:27"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "17:11"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "16:38"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "10:44"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "17:17"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "9:04"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "15:46"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "7:23"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "15:44"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "16:45"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "15:52"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "12:46"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "11:06"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "10:11"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "8:45"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "19:31"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "20:38"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "19:33"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "10:24"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "20:43"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "11:46"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "8:48"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "19:20"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "9:59"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "6:18"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "8:31"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:25"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "13:16"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "10:48"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "9:50"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "14:17"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "6:22"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "13:50"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "6:03"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:14"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "6:45"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:50"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "6:28"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "17:59"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "9:39"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "7:58"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "13:23"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "15:12"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "8:10"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "15:02"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "10:15"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "19:05"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "19:55"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "8:53"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "8:54"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "12:22"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "9:21"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "10:49"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "12:22"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "21:46"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "7:16"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "17:11"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "17:29"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "17:25"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "14:07"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "20:12"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "6:09"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "20:50"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "14:52"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "12:29"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "7:11"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "7:06"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "11:05"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "8:50"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "13:21"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "15:24"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "20:08"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "21:05"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "11:17"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "20:41"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "15:02"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "19:06"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "16:35"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "8:24"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "17:52"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "9:09"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "8:36"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "19:57"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "10:23"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "15:17"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "21:15"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "14:48"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "21:17"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "9:28"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "18:27"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "12:11"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "8:49"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "17:03"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "18:41"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "11:51"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "6:32"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "18:30"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "12:29"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "8:12"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "20:05"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "17:47"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "13:53"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "11:35"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "18:54"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "8:30"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "7:50"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "17:41"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "6:01"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "18:59"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "11:24"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "20:19"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "9:21"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "19:01"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "19:04"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "20:50"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "11:51"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "13:45"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "17:18"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "13:34"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "8:26"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "14:25"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "7:38"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "10:21"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "17:24"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "21:05"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "6:14"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:19"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "21:21"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "14:09"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "6:58"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "8:27"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "11:47"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "13:03"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "17:45"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "6:34"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:20"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "13:32"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "9:47"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "21:10"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "20:58"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "13:55"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "9:39"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "19:24"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "8:18"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "8:47"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "11:10"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "6:32"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "16:56"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "6:38"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "11:17"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "8:55"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "9:22"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "9:12"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "15:59"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "18:36"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "14:55"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "11:19"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "9:31"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "11:58"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "8:04"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "19:29"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "12:18"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "20:48"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "8:59"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "21:45"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "14:03"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "13:40"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "19:04"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "6:01"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "9:17"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "7:21"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "16:56"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "12:03"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "8:56"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "17:44"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "21:34"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "20:50"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "17:29"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "6:21"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "15:22"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "9:36"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "9:23"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "10:55"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "10:51"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "11:32"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "14:31"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "12:42"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "10:27"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "21:17"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "8:11"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "13:40"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "20:52"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "16:46"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "8:18"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "17:32"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "21:41"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "17:24"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "20:23"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "9:14"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "17:05"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "19:38"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "12:16"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "14:11"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "12:23"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "16:39"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "19:48"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "13:29"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "15:34"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "13:18"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "11:40"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "8:16"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "19:25"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:40"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "6:50"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "10:20"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "15:37"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "13:02"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "15:24"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "9:33"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "11:41"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "11:49"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "17:06"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "12:23"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "7:34"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "10:08"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "14:27"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "12:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "15:48"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "7:13"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "12:23"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "12:29"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "19:17"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "20:26"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "18:47"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "6:41"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "9:19"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "10:42"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "6:17"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "11:38"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "20:15"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "11:04"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "14:06"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "18:36"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "14:56"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "16:22"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "17:29"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "13:03"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "14:20"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "14:46"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "19:57"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "6:42"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "6:29"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "10:55"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "21:35"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "9:33"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "16:39"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "20:16"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "13:10"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "10:39"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "12:06"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "17:53"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "9:36"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "15:51"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "10:25"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "14:24"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "14:11"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "6:50"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "19:35"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "19:37"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "19:18"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "9:27"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "16:57"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "15:46"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "10:18"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "15:42"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "12:03"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "14:04"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "9:24"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "13:20"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "13:12"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "10:58"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "14:02"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "6:27"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "15:22"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "8:13"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "6:26"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "6:57"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "7:41"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:53"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "14:46"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "7:40"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "8:56"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "16:39"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "7:11"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "10:11"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "6:33"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "19:39"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:28"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "20:31"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "9:45"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "18:47"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "6:51"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "9:14"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "14:36"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "11:14"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "15:01"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "18:14"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "17:35"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "11:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "8:47"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "6:32"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "6:12"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "16:58"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "20:51"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "18:59"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "10:27"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "18:54"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "8:43"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "19:03"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "20:47"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "14:12"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "17:26"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "7:19"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "19:56"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "11:57"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "11:54"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "10:08"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "10:33"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "21:04"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "19:48"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "9:16"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "11:58"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "14:14"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "15:23"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "15:55"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "10:40"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "20:35"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "19:59"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "16:51"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "13:43"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "14:29"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "15:33"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "15:48"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "21:21"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "9:40"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "18:19"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "10:40"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "21:46"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "14:21"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "17:11"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "6:37"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "6:57"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "17:19"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "7:49"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "17:15"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "6:13"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "16:42"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "21:17"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "6:36"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "12:52"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "11:08"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "13:17"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "16:13"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "15:37"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "17:56"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "12:42"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "7:51"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "18:51"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "12:36"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "9:24"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "15:04"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "7:41"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "20:04"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "11:26"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "15:08"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "8:58"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "7:23"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "16:40"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "14:31"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "15:59"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "21:39"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "21:29"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "14:03"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "15:14"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "19:08"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "16:32"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "10:37"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "20:38"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "6:15"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "8:16"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "16:12"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "13:04"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "17:29"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "18:01"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "9:42"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "9:03"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "21:22"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "8:15"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "14:46"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "10:30"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "20:43"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "6:48"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "7:56"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "9:27"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "7:40"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:45"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "10:15"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "13:44"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "10:11"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "9:46"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "17:06"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "12:50"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "15:42"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "15:19"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "11:38"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "21:17"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "15:41"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "19:19"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "7:49"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "19:36"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "16:59"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "17:40"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "17:53"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "10:12"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "7:49"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "16:22"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "11:17"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "9:26"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "18:55"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "13:41"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "13:29"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "15:10"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "11:57"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "17:15"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "10:42"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "15:15"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "7:14"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "19:13"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "13:02"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "18:47"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "13:41"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "7:36"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "8:14"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "7:44"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "13:19"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "14:55"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "18:25"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "15:26"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "17:50"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "21:37"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "21:25"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "17:47"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "12:22"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "15:20"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "17:01"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "12:21"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "15:52"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "21:34"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "8:18"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "19:48"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "21:45"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "13:31"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:03"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "11:01"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "18:11"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "13:07"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "10:49"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "19:45"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "8:14"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "9:13"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "15:27"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "15:37"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "13:06"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "6:51"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "15:09"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "6:57"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "9:23"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "20:06"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "7:34"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "12:41"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "21:21"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "11:40"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "12:56"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "11:05"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "19:47"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "11:05"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "7:41"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "16:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "10:02"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "13:32"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "19:05"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "7:39"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "18:19"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "15:46"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "9:32"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "16:16"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "15:34"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "9:07"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:43"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "16:43"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "17:44"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "12:31"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "20:20"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "15:25"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "17:23"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "16:08"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "11:40"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "14:54"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "12:06"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "21:22"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "21:16"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "19:53"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "14:56"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "16:38"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "19:24"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "15:05"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "12:30"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "18:01"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "20:47"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "12:25"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "6:09"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "14:10"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "21:43"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "10:59"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "8:21"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "16:52"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "17:01"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "7:37"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "18:30"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "16:48"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "14:54"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "13:05"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "16:29"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "19:38"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "20:55"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "20:04"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "15:05"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "7:31"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "18:35"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "21:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "6:21"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "11:09"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "9:53"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "8:31"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "6:54"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "13:21"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "15:05"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "19:54"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "16:34"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "21:15"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "7:35"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "7:35"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "6:39"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "9:15"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "17:49"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "9:32"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "12:14"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "12:34"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "21:52"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "6:30"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "15:47"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "8:19"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "17:59"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "20:55"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "11:20"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "12:58"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "15:40"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "13:05"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "11:42"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "10:49"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "17:32"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "8:33"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "6:02"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "18:39"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "12:23"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:48"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "7:12"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "6:22"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "19:34"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "21:30"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "8:54"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "20:26"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "16:22"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "20:19"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "6:06"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "11:13"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "18:43"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "8:30"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "17:15"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "21:53"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "19:56"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "16:29"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "10:01"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "20:52"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "8:55"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "11:56"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "15:37"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "20:44"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "20:21"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "7:02"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "9:50"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "9:56"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "20:07"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "9:23"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "19:08"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "11:21"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "10:02"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "14:52"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "19:50"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "18:13"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "20:16"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "21:42"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "13:18"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "16:48"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "16:18"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "18:11"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "17:18"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "7:59"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "12:16"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "18:29"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "15:09"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "14:06"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "16:47"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "19:17"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "6:44"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "19:02"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "12:15"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "8:05"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "10:43"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "21:37"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "9:26"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "8:43"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "13:25"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "6:10"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "12:21"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "21:20"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "8:29"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "12:09"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "9:05"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "19:20"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "20:57"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "9:53"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "11:19"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "10:23"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "16:37"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "8:29"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "9:03"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "14:48"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "19:49"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "12:46"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "11:51"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "13:51"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "21:21"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "7:07"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "18:35"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "18:41"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "8:09"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "18:26"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "14:55"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "13:09"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "18:36"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "8:14"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "17:32"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "21:16"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "10:27"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "10:32"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "20:35"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "18:12"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "16:39"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "11:18"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "11:31"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "6:09"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "12:24"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "18:26"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "16:06"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "16:22"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "10:22"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "7:59"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "15:25"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "10:43"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "14:52"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "17:58"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "11:48"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "9:23"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "10:23"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "20:07"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "13:22"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "21:54"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "6:47"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "14:16"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "20:05"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "14:59"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "20:49"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "17:33"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "13:29"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "9:38"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "20:06"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "6:59"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "15:24"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "8:06"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "20:42"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "20:54"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "20:25"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "6:49"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "12:52"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "16:59"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "9:40"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "20:54"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "18:23"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "13:21"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "17:15"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "12:35"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "16:25"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "10:12"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "11:40"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "16:26"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "15:22"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "15:16"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "14:31"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "7:24"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "16:29"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "18:11"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "16:44"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "17:41"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "15:35"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "8:01"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "16:19"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "7:46"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "10:25"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "14:31"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "10:03"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "9:02"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "15:56"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "7:11"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "18:50"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "16:35"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "19:13"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "12:55"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:16"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "14:29"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "12:53"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "19:30"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "21:25"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "9:52"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "16:04"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "12:46"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "8:27"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "21:58"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "15:34"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "8:52"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "14:21"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "14:35"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "20:51"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "13:10"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "21:51"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "19:26"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "13:39"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "14:02"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "11:49"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "7:46"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "8:26"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "14:17"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "20:21"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "19:25"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "17:13"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "17:26"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "14:32"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "18:39"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "19:33"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "18:27"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "16:17"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "17:29"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "9:39"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "18:31"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "13:56"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "6:52"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "20:31"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "18:45"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "10:46"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "8:27"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "21:05"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "19:25"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "6:30"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "15:32"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "17:37"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "16:07"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "16:34"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "10:49"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "21:57"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "12:26"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "18:36"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "8:59"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "9:57"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "17:34"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "12:08"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "15:56"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "7:27"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "6:35"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "11:51"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "21:34"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "18:53"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "9:14"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "14:55"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "12:09"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "8:30"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "12:44"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "13:50"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "17:08"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "21:46"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "16:03"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "11:02"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "15:41"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "14:11"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:05"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "18:01"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "14:49"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "9:02"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "16:16"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "9:11"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "14:52"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "17:21"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "9:34"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "16:18"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "13:19"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "6:42"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "9:10"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "13:19"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "21:40"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "18:59"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "13:31"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "7:47"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "7:32"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "6:33"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "12:19"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "6:02"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "10:53"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "17:37"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "13:51"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "21:57"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "19:55"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "18:24"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "14:43"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "21:52"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "17:18"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "6:17"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "20:57"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "17:27"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "13:28"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "21:58"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "6:51"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "9:01"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "21:52"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "11:13"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "14:19"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "11:51"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "21:40"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "18:58"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "14:48"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "14:49"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "20:31"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "18:38"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "14:45"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "10:37"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "14:59"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "12:16"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "12:07"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "18:15"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "8:50"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "20:21"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "21:55"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "19:26"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "10:15"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "8:08"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "20:05"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "13:14"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "12:07"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "8:31"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "17:29"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "12:48"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "20:40"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "9:14"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "19:30"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "11:50"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "17:53"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "13:38"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "16:27"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "15:06"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "15:37"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "9:03"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "8:46"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "18:47"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "21:43"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "14:35"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "15:55"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "9:12"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "15:15"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "8:40"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "20:03"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "18:58"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "8:03"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "11:12"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "6:42"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "16:18"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "17:36"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "21:30"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "13:36"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "8:53"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "6:21"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "13:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "13:34"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "18:36"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "21:33"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "21:24"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "7:01"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "10:26"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "15:48"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:39"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "13:51"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "8:52"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "11:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "11:26"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "20:11"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:10"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "9:40"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "12:03"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "6:28"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "15:46"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "8:50"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "20:55"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "20:07"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "11:58"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "6:24"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "10:06"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "10:31"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "9:41"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "10:23"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "21:07"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "20:12"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "14:27"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "15:28"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "19:13"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "17:55"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "12:57"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "17:57"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "21:14"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "13:49"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "10:14"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "16:05"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "19:42"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "11:25"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "19:29"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:11"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "9:04"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "21:36"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "10:20"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "17:14"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "13:13"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "16:53"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "18:40"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "14:31"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "6:02"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "12:13"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "6:28"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "18:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "8:16"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "17:35"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "13:14"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "21:45"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "16:49"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "13:21"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "9:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "14:29"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "20:29"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "10:59"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "16:17"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "18:38"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "19:28"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "21:44"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "9:15"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "6:25"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "6:27"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "15:16"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "16:47"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "11:48"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "20:53"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "6:19"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "11:01"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "13:39"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "15:17"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "19:47"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "21:44"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "18:09"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "8:14"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "11:48"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "7:12"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "13:07"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "13:37"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "14:50"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "13:52"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "17:13"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "16:13"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "6:33"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "20:16"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "20:36"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "11:42"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "18:56"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "17:08"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "15:52"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "9:19"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "16:30"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "19:37"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "16:59"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "7:59"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "21:52"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "19:58"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "8:37"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "12:03"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "16:30"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "21:47"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "11:19"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "10:19"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "7:37"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "9:30"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "17:19"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "10:21"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "11:27"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "19:35"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "8:50"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "21:31"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "12:53"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "9:37"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "15:15"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "6:25"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "11:31"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "7:28"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "11:38"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "21:19"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "20:43"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "6:43"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "11:52"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "16:11"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "20:16"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "15:30"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "13:32"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "9:28"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "20:29"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "10:36"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "18:37"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "18:56"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "7:15"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "13:32"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "14:10"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "17:09"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "20:34"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "6:53"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "6:13"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "7:02"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "10:27"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "18:25"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "10:35"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "10:03"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "20:05"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "7:29"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "18:45"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "8:31"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "10:17"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "8:05"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "18:09"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "15:03"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "11:33"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "12:36"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "14:25"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "18:03"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "18:18"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "13:16"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "21:31"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "9:52"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "13:05"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "13:49"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "13:36"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "10:24"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "14:03"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "17:36"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "6:31"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "17:26"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "16:35"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "16:10"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "10:47"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "9:41"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "20:58"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "6:29"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "14:20"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "21:09"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "7:39"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "10:59"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "21:46"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "16:51"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "13:31"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "20:24"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "18:24"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "8:03"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "9:24"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "8:08"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "7:29"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "11:23"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "11:07"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "15:10"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "21:10"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "15:02"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "18:17"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "7:31"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "6:41"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "8:16"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "11:46"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "18:21"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "10:27"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "11:45"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "20:52"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "14:15"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "18:26"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "15:01"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "15:10"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "18:15"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "9:08"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "21:55"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "14:47"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "17:30"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "14:36"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "20:53"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "20:11"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "12:02"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "18:11"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "10:03"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "10:47"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "17:26"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "7:10"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "13:34"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "18:14"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "11:58"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "12:54"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:08"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:26"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "7:13"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "15:50"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "9:38"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "11:35"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "15:58"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "10:49"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "17:26"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "10:03"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "18:07"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "19:33"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "21:08"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "6:16"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "11:54"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "15:43"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "21:22"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "17:16"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "17:47"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "18:45"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "15:46"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "8:19"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "18:30"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "21:07"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "9:09"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "9:06"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "7:45"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "19:32"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "6:33"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "11:31"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "9:37"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "16:42"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "7:50"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "19:07"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "15:49"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "6:59"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "15:44"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "10:45"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "13:48"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "21:17"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "15:51"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "21:49"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "7:47"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "19:30"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "13:50"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "21:16"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "18:59"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "15:03"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "20:40"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "16:43"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "14:07"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "12:03"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "18:52"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "14:06"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "8:58"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "14:55"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "10:15"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "20:26"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "16:45"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "11:40"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "12:04"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "14:24"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "11:42"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "7:41"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "8:09"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "10:39"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "7:13"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "19:32"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "13:59"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "8:18"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "21:17"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "19:11"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "16:38"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "18:58"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "9:32"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "7:12"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "11:13"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "10:23"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "20:49"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "21:01"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "9:11"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "14:22"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "6:41"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "17:28"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "12:15"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "17:45"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "7:28"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "10:15"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "10:45"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "9:44"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "6:44"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "21:09"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "14:22"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "17:03"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "11:15"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "11:07"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "9:27"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "7:29"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "19:56"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "21:44"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "20:44"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "17:22"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "6:55"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "19:52"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "17:53"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "15:01"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "9:56"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "18:58"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "10:43"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "10:24"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "14:30"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "10:36"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "6:44"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "6:53"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "14:56"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "16:31"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "21:18"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "19:43"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "7:51"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "18:33"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "8:59"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "20:36"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "10:10"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "20:35"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "7:06"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "14:09"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "13:32"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "8:20"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "21:07"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "12:23"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "11:06"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "15:40"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "18:30"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "15:26"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "8:36"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "10:32"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "6:54"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "6:41"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "10:59"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "12:46"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "15:32"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "12:37"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "12:15"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "14:57"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "9:31"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "17:33"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "19:05"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "15:50"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "12:13"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "9:57"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "7:55"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "8:56"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "19:19"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "13:26"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "10:50"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "16:06"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "16:04"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "19:54"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "20:58"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "7:42"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "21:28"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "21:39"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "7:49"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "21:29"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "18:51"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "6:47"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "18:30"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "15:02"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "10:22"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "11:12"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "8:09"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "14:13"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "13:24"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "16:53"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "6:44"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "9:54"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "15:22"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "11:48"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "20:29"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "20:24"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "15:21"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "7:50"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "21:01"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "21:58"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "16:03"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "20:19"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "7:11"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "6:24"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "10:57"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "19:28"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "21:58"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "17:07"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "17:57"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "6:09"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "21:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "6:27"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "8:24"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "8:40"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "7:01"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "17:09"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "16:55"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "20:04"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "6:03"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "10:44"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "18:56"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "12:41"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "13:56"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "6:16"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "13:18"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "17:04"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "19:58"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "15:33"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "17:28"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "10:38"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "14:25"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "9:19"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "18:12"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "15:06"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "11:39"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "8:25"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "20:23"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "21:08"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "7:33"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "14:27"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "19:19"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "13:02"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "16:22"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:44"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "15:22"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "15:06"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "17:16"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "9:01"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "14:17"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "11:38"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "11:21"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "11:30"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "18:29"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "20:11"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "10:47"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "8:34"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "8:20"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "15:04"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "17:48"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "12:58"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "7:06"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "18:25"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "14:28"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "19:08"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "6:55"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "9:04"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "17:21"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "11:58"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "16:58"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "20:42"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "20:48"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "9:21"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "13:25"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "7:31"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "11:59"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "8:53"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "6:47"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "19:33"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "13:18"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "8:37"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "7:43"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "20:17"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "7:52"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "20:37"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "20:01"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "14:55"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "11:37"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "13:02"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "18:57"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "9:25"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "12:25"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "8:41"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "16:03"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "12:41"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "16:16"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "13:47"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "17:32"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "10:56"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "20:46"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "15:54"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "20:40"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "9:05"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "20:33"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "16:15"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "21:14"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "8:10"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "15:56"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "11:51"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "18:16"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "11:21"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "7:40"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "14:50"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "9:10"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "7:12"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "21:44"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "15:58"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "16:02"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "20:45"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "12:02"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "6:47"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "8:14"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "6:37"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "10:20"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "19:29"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "8:46"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "11:15"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "18:17"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "8:43"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "11:54"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "10:19"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "12:34"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "21:45"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "18:32"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "20:31"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "6:19"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "11:38"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "12:34"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "12:21"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "17:24"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:51"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "11:12"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "17:30"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "13:18"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "19:06"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "15:12"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "21:26"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "17:51"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "21:22"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "13:19"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "14:34"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "20:18"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "10:28"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "15:47"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "16:47"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "6:16"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "9:40"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "12:56"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "15:58"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "16:42"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "6:46"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "20:31"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "16:45"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "6:55"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "16:13"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "6:19"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "19:42"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "19:06"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "13:52"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "21:09"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "16:14"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "19:04"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "9:01"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "8:30"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "14:18"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "15:14"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "10:43"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "16:12"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "8:23"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "7:44"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "6:51"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "18:48"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "16:56"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "18:37"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "12:41"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "14:18"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "9:38"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "11:54"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "20:21"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "20:11"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "16:18"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "20:13"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "12:43"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "13:01"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "6:36"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "11:50"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "15:42"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "6:24"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:56"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "19:34"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "13:18"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "18:29"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "20:54"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "16:20"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "8:12"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "17:49"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "12:22"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "18:39"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "19:34"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "17:41"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "12:42"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "20:55"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "9:33"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "15:51"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "15:54"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "18:42"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "19:07"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "21:13"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "19:39"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "7:09"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "8:21"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "15:58"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "12:38"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "6:16"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "18:42"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "11:18"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "15:03"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "14:53"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "16:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "9:45"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "15:17"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "13:03"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "14:05"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "6:41"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "20:32"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "15:38"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "13:40"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "21:24"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "15:01"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "19:47"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "18:52"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "6:43"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "17:10"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "11:53"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "8:56"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "9:06"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "18:08"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "12:06"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "12:56"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "15:53"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "13:42"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "6:50"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "21:12"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "9:37"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "6:03"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "11:10"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "8:03"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "8:05"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "10:41"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "8:22"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "11:40"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "9:10"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "12:30"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "19:40"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "10:51"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "8:25"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "15:36"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "21:48"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "18:31"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "12:12"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "19:04"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "10:07"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "9:02"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "18:23"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "11:26"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "21:10"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "10:49"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "17:46"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "18:15"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "19:36"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "8:46"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "19:10"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "15:05"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "12:14"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "14:47"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "21:37"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "11:04"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "12:52"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "16:38"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "13:24"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "19:16"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "20:09"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "7:28"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "20:40"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "7:22"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "13:58"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "7:23"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "15:02"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "20:18"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "12:07"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:05"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "8:54"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "21:10"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "10:15"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "11:33"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "18:24"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "10:06"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "7:19"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "17:13"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "12:09"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "16:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "10:39"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "20:33"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "14:22"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "19:57"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "11:14"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "15:26"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "8:51"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "17:34"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "11:14"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "15:33"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "9:22"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "17:51"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "11:53"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "7:18"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "13:04"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "11:19"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "12:24"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "18:46"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "19:33"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "16:56"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "9:08"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "13:39"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "17:04"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "14:03"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "8:13"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "15:01"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "16:30"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "19:14"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "10:31"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "7:57"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "15:25"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "12:29"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "20:52"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "17:37"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "7:58"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "19:10"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "9:22"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "21:41"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "21:05"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "11:52"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "15:10"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "7:34"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "19:01"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "13:52"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "16:31"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "12:11"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "12:26"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "10:39"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "8:50"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "14:20"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "15:17"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "12:59"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "13:08"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "6:11"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "14:18"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "16:20"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "17:34"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "15:59"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "6:44"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "19:44"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "7:32"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "13:18"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "12:54"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "12:15"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "6:27"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "8:18"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "12:47"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "21:22"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "16:55"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "12:46"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "7:01"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "10:49"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "21:38"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "6:40"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "15:28"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "12:07"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "12:23"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "15:12"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "13:51"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "10:59"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "11:46"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "9:09"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "13:42"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "8:19"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "20:53"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "20:21"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "12:11"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "13:09"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "7:37"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "9:59"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "6:39"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "9:32"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "18:49"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "16:22"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "20:31"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "12:29"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "19:03"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "17:43"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "16:03"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "20:44"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "19:12"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "12:43"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "17:42"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "12:07"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "11:49"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "7:43"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "18:55"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "18:08"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "14:56"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "15:41"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "18:02"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "14:36"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "7:44"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "21:27"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "11:21"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "21:03"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "16:44"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "7:36"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "21:09"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "15:48"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "17:23"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "11:41"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "12:02"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "18:30"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "6:12"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "16:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "14:38"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "21:18"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "11:47"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "9:23"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "10:41"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "18:15"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "19:21"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "20:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "19:49"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "8:18"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "21:30"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:25"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "17:11"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "13:38"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "11:06"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "10:36"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "12:49"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "11:58"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "15:10"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "16:40"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "19:04"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "17:48"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "21:02"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "17:31"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "10:42"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "8:46"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "19:35"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "12:25"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "19:16"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "9:48"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "9:27"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "19:42"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "21:36"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "18:38"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:12"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "8:48"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "20:28"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "17:10"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "20:50"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "7:47"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "13:06"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "14:38"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "13:42"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "11:53"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "10:52"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "10:16"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "10:46"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "17:35"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "14:30"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "6:22"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "7:39"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "10:18"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "13:46"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "6:32"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "7:28"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "13:33"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "16:53"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "12:15"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "14:03"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "12:09"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "20:17"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "20:02"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "17:17"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "10:03"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "20:53"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "15:24"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "6:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "9:15"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "17:32"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "10:02"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "14:59"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "18:44"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "17:17"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "20:59"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "12:16"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "10:40"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "10:12"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "19:54"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "11:22"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "7:46"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "19:27"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "9:18"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "14:03"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "7:14"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "12:22"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "17:25"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "18:59"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "8:26"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:15"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "9:19"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "6:18"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "6:29"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "9:54"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "16:44"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "18:02"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "21:03"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "11:27"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "20:33"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "11:20"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "11:16"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "10:46"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "19:38"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "12:55"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "8:09"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "12:49"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "12:09"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "20:42"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "18:42"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "17:38"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "14:36"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "9:19"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "16:37"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "19:17"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "15:15"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "16:49"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "18:18"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "12:10"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "8:25"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "16:47"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "6:01"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "13:43"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "17:05"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "8:25"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "10:15"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "13:08"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "20:21"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "12:30"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "17:07"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "21:54"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "10:27"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "21:42"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "6:18"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "19:04"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "15:18"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "10:36"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "21:28"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "7:01"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "20:14"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "8:31"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "12:21"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "21:18"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "10:37"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "16:53"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "17:22"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "10:23"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "13:38"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "14:24"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "21:17"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "12:39"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "19:33"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:44"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "13:40"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "13:51"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "17:53"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "11:51"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "7:22"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "9:26"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "17:37"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "15:01"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "6:20"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "12:26"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "14:33"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "8:55"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "8:37"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "20:16"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "20:07"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "10:01"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "19:12"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "19:51"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "21:34"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "13:14"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "12:07"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "18:45"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "14:04"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "14:48"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "6:35"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "20:19"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "12:37"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "10:46"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "17:11"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "20:31"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "11:26"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "9:48"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "9:26"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "11:55"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "9:48"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "6:33"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "11:44"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "11:40"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "20:47"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "13:52"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "10:27"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "17:03"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "8:09"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "14:26"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "11:08"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "13:13"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "11:39"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "13:09"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "11:29"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "15:59"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "18:17"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "10:46"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "20:21"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "15:42"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "17:08"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "17:10"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "15:25"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "20:42"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "18:02"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "12:34"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "21:49"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "9:41"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "6:41"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "11:19"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "19:28"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "18:46"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "15:19"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "18:26"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "8:09"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "13:30"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "8:58"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "19:57"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "20:42"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "16:26"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "19:58"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "15:54"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "12:42"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "10:21"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "8:48"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "21:35"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "10:48"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:36"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:54"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "21:20"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "8:40"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "15:01"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "11:07"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "12:14"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "18:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "6:35"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "20:37"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "17:27"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "10:08"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "6:46"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "18:13"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "18:34"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "17:26"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "15:52"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "14:51"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "20:13"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "6:23"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "16:29"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "9:59"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "19:34"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "19:50"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "17:21"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "14:15"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "15:04"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "6:40"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "13:54"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "16:49"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "7:55"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "18:53"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "10:16"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:07"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "15:13"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "19:15"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "20:43"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "13:06"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "14:55"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "18:13"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "10:15"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "6:50"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "6:50"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "19:56"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "8:37"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "16:44"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "11:05"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "6:29"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "20:06"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "19:19"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "12:31"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "11:29"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "14:16"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "21:57"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "19:26"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "15:14"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "9:56"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "16:32"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "17:18"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "10:52"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "12:16"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "15:44"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "16:23"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "9:34"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "20:53"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "6:49"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "16:53"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "14:01"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "8:02"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "21:03"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "8:14"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "7:48"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "10:05"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "9:17"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "17:12"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "16:36"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "15:50"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "10:58"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "11:34"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "20:46"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "7:18"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "9:30"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "17:44"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "6:32"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "13:21"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "15:57"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "13:55"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "9:54"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "17:24"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "19:54"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "20:31"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "9:25"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "11:33"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "8:31"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "21:04"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "7:39"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "10:56"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "16:37"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "9:53"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "9:57"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "14:26"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "18:38"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "13:56"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "19:19"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "21:05"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "12:42"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "16:30"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "12:36"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "9:54"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "18:17"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "20:42"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "15:31"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "21:31"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "16:20"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "9:40"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "21:51"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "6:21"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "16:54"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "17:19"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "18:29"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "18:18"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "16:57"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "18:05"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "16:03"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "12:47"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "10:23"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "19:50"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "14:30"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "13:27"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "7:27"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "11:39"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "18:43"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "8:24"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "10:16"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "19:02"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "8:46"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "11:49"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "16:18"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "21:14"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "6:32"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "7:12"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "12:14"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "13:12"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "19:42"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "9:59"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "11:24"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "21:49"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "12:21"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "12:59"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "21:33"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "8:51"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "11:29"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "8:24"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "12:17"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "21:10"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "12:52"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "14:21"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "19:19"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "18:29"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "19:35"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "14:27"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "12:35"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "15:54"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "13:16"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "19:52"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "19:26"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "17:32"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "8:11"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "10:56"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "13:14"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "11:39"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "18:27"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "11:53"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "12:58"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "14:53"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "17:49"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "11:04"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "9:59"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "13:35"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "21:31"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "21:26"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "17:27"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "14:36"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "18:43"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "9:29"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "9:08"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "18:30"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "16:14"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "9:22"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "10:57"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "14:55"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "20:11"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "7:53"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "9:42"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "12:10"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "11:38"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "17:29"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "21:01"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "16:38"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "11:31"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "17:57"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "18:32"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "6:27"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "15:31"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "11:34"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "6:30"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "14:20"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "7:45"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "21:09"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "15:52"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "21:08"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "13:30"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "15:10"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "19:24"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "21:50"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "13:42"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "9:19"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "9:53"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "7:13"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "14:46"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "12:32"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "20:18"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "16:33"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "11:22"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "11:43"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "21:40"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "18:40"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "14:31"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "11:22"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "17:47"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "21:14"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "6:30"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "12:42"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "19:56"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "13:49"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "20:37"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "20:17"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "16:19"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "13:36"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "16:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "14:11"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "13:02"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "9:17"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "7:42"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "16:28"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "13:43"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "7:53"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "18:38"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "19:24"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "8:55"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "11:53"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "16:34"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "12:45"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "18:40"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "18:58"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "21:32"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "14:10"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "15:51"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "7:52"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "13:47"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "9:04"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "17:04"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "6:03"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "12:25"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "18:06"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "9:30"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "11:34"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "10:06"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "16:11"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "10:02"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "8:25"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "12:35"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "18:47"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "20:53"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "17:17"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "17:44"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "15:30"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "9:17"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "14:25"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "7:07"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "21:30"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "10:34"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "16:37"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "19:07"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "13:42"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "16:09"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "10:25"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "8:59"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "14:22"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "16:14"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "13:49"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "9:44"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "8:56"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "10:19"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "10:54"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "7:38"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "9:02"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "21:41"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "20:23"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "9:29"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "13:22"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "6:31"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "14:27"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "7:52"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "6:20"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "8:54"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "14:09"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "18:04"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "6:24"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "15:28"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "21:22"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "21:14"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "18:32"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "19:24"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "13:10"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "18:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "13:53"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "20:23"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "17:10"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "8:54"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "7:31"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "16:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "6:20"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "16:38"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "19:46"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "12:12"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "13:54"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "14:14"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "13:45"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "8:26"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "19:02"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "16:37"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "14:36"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "17:55"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "14:50"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "15:38"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "17:41"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "19:43"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "13:06"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "7:55"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "15:56"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "19:57"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "8:12"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "14:16"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "14:29"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "14:20"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "15:44"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "19:41"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "13:09"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "10:04"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "11:48"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "20:37"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "12:09"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "17:44"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "10:53"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "6:43"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "12:15"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "9:21"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "16:54"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "16:55"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "9:17"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "17:26"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "13:26"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "21:48"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "14:10"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "17:11"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "16:53"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "15:32"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "14:47"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "14:22"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "11:49"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "17:58"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "14:07"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "7:29"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "6:19"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "17:27"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "10:10"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "16:39"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "12:57"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "17:11"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "11:25"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "14:42"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "13:50"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "15:47"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "20:22"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "16:47"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "18:58"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "9:32"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "10:16"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "9:18"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "21:43"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "17:52"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "6:31"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "19:48"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "8:30"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "21:42"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "7:05"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "12:37"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "12:41"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "6:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "19:40"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "12:56"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "20:46"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "20:39"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "16:39"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "10:46"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "6:05"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "7:31"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "13:13"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "7:44"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "13:50"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "17:08"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "8:11"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "13:17"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:39"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "19:33"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "9:24"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "8:58"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "14:50"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "7:31"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "15:23"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "10:40"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "20:50"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "10:47"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "14:11"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "17:07"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "9:58"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "19:30"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "12:15"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "19:07"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "6:09"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "18:19"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "15:21"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "16:28"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "6:24"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "10:52"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "14:13"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "11:52"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "8:15"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "18:43"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "16:54"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "20:15"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "17:40"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "16:40"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "14:50"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "21:12"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "17:21"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "12:33"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "6:10"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "7:58"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "21:59"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "9:34"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "7:29"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "8:24"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "10:55"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "8:38"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "12:33"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "21:36"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "15:08"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "21:50"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "13:37"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "13:15"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "7:31"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "17:49"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "8:59"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "12:26"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "19:24"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "13:35"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "14:25"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "13:35"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "10:29"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "7:44"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "14:24"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "8:28"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "18:29"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "13:03"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "21:54"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "18:27"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "21:46"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "9:50"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "9:56"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "18:52"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "11:27"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "6:09"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "9:26"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "8:53"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "11:10"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "10:39"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "17:45"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "12:15"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "16:11"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "10:52"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "21:55"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "7:02"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "16:24"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "11:12"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "12:55"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "21:47"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "9:27"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "9:27"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "18:58"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "9:13"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "10:14"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "14:09"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "19:48"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "7:26"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "11:07"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "7:30"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "15:05"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "19:54"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "9:27"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "10:38"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "14:33"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "20:59"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "21:45"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "11:30"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "19:59"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "14:32"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "18:21"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "16:58"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "13:55"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "10:33"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "14:35"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "16:59"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "20:33"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "12:43"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "10:17"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "11:22"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "16:41"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "20:23"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "16:24"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "7:19"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "8:38"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "12:50"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "6:17"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "20:35"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "15:11"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "8:32"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "13:35"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "16:33"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "18:42"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "19:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "20:28"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "21:30"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "19:53"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "8:51"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "8:46"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "14:32"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "7:31"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "6:55"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "19:06"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "21:37"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "16:47"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "11:57"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "12:29"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "16:29"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "17:49"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "21:23"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "18:54"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "11:25"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "10:04"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "19:46"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "8:33"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "7:58"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "14:25"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "17:37"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "21:15"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "15:31"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "20:05"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "6:44"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "17:08"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "14:40"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "6:12"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "9:30"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "7:03"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "21:10"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "21:22"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "14:55"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "21:31"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "21:04"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "11:24"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "19:35"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "16:56"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "13:55"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "17:56"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "21:35"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "16:11"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "14:59"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "13:55"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "7:43"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "15:04"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "20:49"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "19:45"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "21:56"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "11:31"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "14:40"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "10:06"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "13:20"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "15:19"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "15:13"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "12:02"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "21:37"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "16:43"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "9:16"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "17:58"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "10:49"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "17:01"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "10:56"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "13:09"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "12:14"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "11:10"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "15:54"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "10:09"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "13:44"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "17:26"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "21:38"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "6:29"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "7:42"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "14:37"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "8:08"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "12:21"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "20:37"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "11:52"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "19:55"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "6:24"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "9:18"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "19:04"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "15:47"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "11:22"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "16:07"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "9:27"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "20:50"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "10:18"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "13:39"
    },
    {
        "line": 106,
        "stop": "Babińskiego",
        "order": 11,
        "time": "13:40"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "15:15"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "13:11"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "9:52"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "17:12"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "12:39"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "18:40"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "13:48"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "20:11"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "20:35"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "7:05"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "19:30"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "21:25"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "11:45"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "10:42"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "8:04"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "7:23"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "9:37"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "14:39"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "18:51"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "10:23"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "17:06"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "15:28"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "19:41"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "18:52"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "14:02"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "6:44"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "13:26"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "18:21"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "17:58"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "17:21"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "13:56"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "12:01"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "14:36"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "10:45"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "20:47"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "7:49"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "14:59"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "17:59"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "19:13"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "7:18"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "20:15"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "11:32"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "10:39"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "19:42"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "12:31"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "7:53"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "21:23"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "14:53"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "17:45"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "15:13"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "15:06"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "16:53"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "19:54"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "7:08"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "14:21"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "10:36"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "7:43"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "19:26"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "16:17"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "20:32"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "19:14"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "18:20"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "19:20"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "6:53"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "13:52"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "18:51"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "12:56"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "10:38"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "21:46"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "13:05"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "18:07"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "11:26"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "21:52"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "19:28"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "7:02"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "13:58"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "9:11"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "12:19"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "21:06"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "8:46"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "9:07"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "16:17"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:09"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "7:40"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "11:05"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "20:44"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "18:52"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "8:14"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "10:13"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "16:44"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "8:14"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "18:46"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "13:15"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "20:28"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "8:14"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "14:18"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "16:21"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "19:30"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "19:26"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "9:45"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "21:33"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "7:46"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "6:02"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "18:07"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "6:30"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "15:09"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "14:04"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "14:14"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "21:24"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "14:52"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "8:14"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "10:52"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "16:27"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "10:49"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "10:31"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "17:13"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "9:18"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "14:33"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "8:16"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "12:36"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "19:14"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "6:39"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "6:08"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "15:15"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "15:30"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "12:25"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "14:03"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "9:37"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "15:52"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "8:31"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "21:52"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "10:21"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "17:12"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "15:13"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "12:33"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "21:37"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "9:45"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "10:25"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "16:13"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "17:12"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "16:32"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "7:42"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "13:55"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "11:35"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "21:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "16:40"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "19:02"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "9:04"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "20:23"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "17:35"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "12:21"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "20:25"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "6:58"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "21:46"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:41"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "17:34"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "8:11"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "11:50"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "17:48"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "6:13"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "15:34"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "21:05"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "8:49"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "16:27"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "18:37"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "16:37"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "12:02"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "15:15"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "13:23"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "13:31"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "10:24"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "19:33"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "10:12"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "17:40"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "13:27"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "14:22"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "20:57"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "14:04"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "12:34"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "18:01"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "17:07"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "13:36"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "11:04"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "17:13"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "19:04"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "18:53"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "8:57"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "11:48"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "9:32"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "9:54"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "12:21"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "21:08"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "14:25"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "19:12"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "6:42"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "10:42"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "13:17"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "8:33"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "15:26"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "15:21"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "12:42"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "16:34"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "19:33"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "12:31"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "21:28"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "15:14"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "8:50"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "18:33"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "16:19"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "15:33"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "7:01"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "8:12"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "6:33"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "19:10"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "8:13"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "8:28"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "6:17"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "15:31"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "17:55"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "13:47"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "18:28"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "11:11"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "18:53"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "11:09"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "9:43"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "11:51"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "7:27"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "14:23"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "12:55"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "11:24"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "8:37"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "9:52"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "17:24"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "21:52"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "9:20"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "13:26"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "21:24"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "11:13"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "21:18"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "6:39"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "16:22"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "11:11"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "15:14"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "9:22"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "17:26"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "19:32"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "11:47"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "12:19"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "9:33"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "6:40"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "9:42"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "15:14"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "14:55"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "17:40"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "21:37"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "19:34"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "19:24"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "7:18"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "12:49"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "18:08"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "11:38"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "20:10"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "11:45"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "14:01"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "20:07"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "21:26"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "12:34"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "7:15"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "17:33"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "7:17"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "10:56"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "12:13"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "11:22"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "12:16"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "19:55"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "15:11"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "16:20"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "17:57"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "12:19"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "19:54"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:25"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "8:07"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "15:41"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "7:51"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "14:40"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "20:58"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "8:38"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "19:08"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "8:04"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "17:32"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "19:50"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "6:53"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "11:20"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "10:40"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "17:28"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "16:07"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "18:40"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "13:44"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "11:17"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "9:43"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "21:53"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "10:35"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "8:02"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "16:38"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "18:24"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "16:42"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "20:19"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "12:30"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "14:35"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "19:14"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "13:18"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "7:34"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "21:14"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "12:25"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "19:57"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "14:42"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "21:07"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "19:03"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "19:16"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "14:22"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "11:01"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "20:41"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "8:01"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "13:29"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "7:39"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "9:35"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "19:13"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "20:38"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "13:08"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "18:35"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "14:01"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "18:11"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "16:40"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "7:26"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "7:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "11:17"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "21:27"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "12:32"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "21:25"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "7:56"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "19:35"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "11:20"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "16:16"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "11:51"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "21:57"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "9:14"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "14:40"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "21:01"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "9:36"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "14:23"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "8:33"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "9:41"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:51"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "21:43"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "9:53"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "6:47"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "9:33"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "7:16"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "15:52"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "19:45"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "9:40"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "12:45"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "17:26"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "19:56"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "11:14"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "11:36"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "13:20"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "13:56"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "15:34"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "10:08"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "6:18"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "16:27"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "20:47"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "12:20"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "9:29"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "13:40"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "10:12"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "18:53"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "10:18"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "19:39"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "7:13"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:10"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "9:51"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "7:51"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "6:58"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "6:31"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "6:21"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "18:02"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "14:37"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "21:19"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "16:23"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "8:11"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "7:31"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:35"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "16:22"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "17:30"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "20:26"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "7:31"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "12:32"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "18:17"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "13:57"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "11:01"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "20:23"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "19:50"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "6:11"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "16:25"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "19:47"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "10:20"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "10:57"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "21:14"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "13:25"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "20:35"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "18:13"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "19:57"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "11:53"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "13:05"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "17:34"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "6:40"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "21:10"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "14:30"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "7:43"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "7:57"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "16:49"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "16:12"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "14:55"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "10:19"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "16:48"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "7:24"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "9:43"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "9:05"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "16:19"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "19:06"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "10:50"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "18:01"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "21:11"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "6:58"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "16:42"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "11:34"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "7:06"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "20:37"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "6:21"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "15:39"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "6:36"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "10:04"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "11:31"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "20:16"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "10:25"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "13:37"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "17:19"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "9:33"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "9:55"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "6:28"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "11:28"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "16:07"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "11:45"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "6:14"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "21:23"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "11:11"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "18:05"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "7:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "16:32"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "13:27"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "14:12"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "13:07"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "16:32"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "14:32"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "8:47"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "13:30"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "19:13"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "14:09"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "18:34"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "18:11"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "15:54"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "13:10"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "16:47"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "19:27"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "9:40"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "10:34"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "9:41"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "20:41"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "17:21"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "21:04"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "19:11"
    },
    {
        "line": 109,
        "stop": "Wodociągowa",
        "order": 7,
        "time": "21:52"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "13:13"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "14:44"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "16:56"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "8:40"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "14:09"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "12:58"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "16:36"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "10:26"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "21:21"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "20:42"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "12:04"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "18:36"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "19:53"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "12:31"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "20:02"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "19:18"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "17:20"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "19:39"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "14:15"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "7:25"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "11:18"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "19:39"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "18:46"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "10:14"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "6:30"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "14:36"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "9:14"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "20:07"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "20:25"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "12:33"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "9:58"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "11:50"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "9:08"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "10:42"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "19:52"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "7:08"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "8:29"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "19:04"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "16:51"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "20:26"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "7:31"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "21:25"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "17:20"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "15:04"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "14:19"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "6:51"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "14:12"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "8:38"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "13:56"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "14:49"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "11:22"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "21:15"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "19:32"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "21:49"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "10:25"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "10:37"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "20:58"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "16:27"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "14:05"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "8:16"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "21:37"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "9:41"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "20:03"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "19:26"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "10:17"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "18:34"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "20:10"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "18:44"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "14:12"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "13:31"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "10:02"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "6:05"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "11:03"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "20:53"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "15:54"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "12:51"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "7:56"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "18:54"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "18:01"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "15:53"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "15:23"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "17:57"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "12:11"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "11:35"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "16:35"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "21:40"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "16:03"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "18:20"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "19:22"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "13:50"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "17:55"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "15:35"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "14:37"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "17:53"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "8:26"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "7:53"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "10:58"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "14:06"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "19:11"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "15:37"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "6:07"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "13:33"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "7:28"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "13:54"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "16:09"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "17:28"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "11:17"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "15:05"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "20:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "14:26"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "16:41"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "6:51"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "20:48"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "13:10"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "14:54"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "7:34"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "10:20"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "7:32"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "7:56"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "8:26"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "17:41"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "6:53"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "8:29"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "16:01"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "17:46"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "9:10"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "15:53"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "6:36"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "12:47"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "8:56"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "15:53"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "20:12"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "8:23"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "9:33"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "20:40"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "19:03"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "13:55"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "6:06"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "6:16"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "18:19"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "7:46"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "21:57"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "9:50"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "6:58"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "20:40"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "7:36"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "20:43"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "14:04"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "9:09"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "8:25"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "21:05"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "14:11"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "15:39"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "6:12"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "10:27"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "21:13"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "19:32"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "13:46"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "10:10"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "15:12"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "20:10"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "8:40"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "20:49"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "13:35"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "19:19"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "8:12"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "15:21"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "20:46"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "9:10"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "13:34"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "16:44"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "14:32"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "8:40"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "18:10"
    },
    {
        "line": 102,
        "stop": "Zakamycze",
        "order": 23,
        "time": "7:25"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "6:44"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "13:32"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "9:27"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "15:14"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "17:52"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "7:39"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "20:56"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "18:37"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "6:53"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "6:56"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "8:14"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "13:54"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "21:40"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "13:23"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "9:17"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "8:39"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "14:45"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "7:16"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "15:02"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "10:01"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "7:12"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "6:49"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "6:25"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "13:57"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "10:26"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "17:38"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "7:12"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "13:58"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "12:57"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "10:28"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "17:34"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "13:53"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "8:11"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "13:34"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "19:20"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "7:22"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "20:43"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "13:39"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "20:04"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "10:26"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "12:31"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "6:54"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "7:23"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "9:34"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "11:09"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "11:59"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "12:20"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "21:09"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "7:32"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "10:38"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "10:23"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "11:38"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "7:52"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "8:34"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "12:49"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "17:56"
    },
    {
        "line": 110,
        "stop": "Lubocza Szkoła",
        "order": 12,
        "time": "8:48"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "6:12"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "13:28"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "16:31"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "14:19"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "11:41"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "17:15"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "15:19"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "6:37"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:37"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "18:08"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "10:57"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "17:53"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "21:47"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "17:24"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "21:56"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "16:24"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "17:38"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "21:25"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "7:46"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "8:34"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "12:50"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "11:11"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "6:54"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "7:44"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "11:28"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "12:11"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "8:16"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "21:46"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "10:14"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "11:12"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "15:30"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "9:08"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "20:21"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "19:12"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "15:48"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "9:49"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "11:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "20:55"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "9:25"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "11:55"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "13:56"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "7:06"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "12:49"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "6:31"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "15:35"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "19:56"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "14:50"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "19:18"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "20:45"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "21:39"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "18:52"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "18:06"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "19:01"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "20:23"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "9:32"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "15:36"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "18:21"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "6:05"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "11:23"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "17:22"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "12:07"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "20:31"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "11:42"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "8:21"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "12:12"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:22"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "9:17"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "16:17"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "9:14"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "10:18"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "14:58"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "10:45"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "6:45"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "6:29"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "9:33"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "12:48"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "12:40"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "18:09"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "9:55"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "20:53"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "15:37"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "17:08"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "17:11"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "10:45"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "11:30"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "20:32"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "6:28"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "7:42"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "14:32"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "15:49"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "21:37"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "15:18"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "19:10"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "10:31"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "6:45"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "10:21"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "9:38"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "12:14"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "21:55"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "21:44"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "18:37"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "18:44"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "11:40"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "21:36"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "11:34"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "17:29"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "14:58"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "21:36"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "20:54"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "8:12"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "14:57"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "10:18"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "18:06"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "13:38"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "11:04"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "21:08"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "13:38"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "20:41"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "19:26"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "21:35"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "12:14"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "18:18"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "9:35"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "21:49"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "9:13"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "20:47"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "9:06"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "6:14"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "17:11"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "9:49"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "19:55"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "7:52"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "21:29"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "16:12"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "19:31"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "7:50"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "21:27"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "21:29"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "8:02"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "6:46"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "17:42"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "19:57"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "9:30"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "18:33"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "17:19"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "11:18"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "15:53"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "18:51"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "17:04"
    },
    {
        "line": 110,
        "stop": "Wadów",
        "order": 15,
        "time": "15:53"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "11:18"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "16:39"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "15:04"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "7:05"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "12:35"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "16:15"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "10:13"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "16:34"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "18:48"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "9:06"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "6:07"
    },
    {
        "line": 102,
        "stop": "Zielony Dół",
        "order": 18,
        "time": "12:15"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "16:57"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "15:36"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "13:57"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "10:11"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "14:05"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "19:13"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "15:45"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "7:50"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "6:29"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "9:25"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "20:50"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "16:33"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "19:53"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "7:28"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "20:50"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "16:53"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "17:26"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "17:51"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "21:53"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "11:05"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "8:01"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "21:19"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "12:22"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "7:41"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "12:33"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "11:15"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "16:14"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "10:24"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "11:58"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "13:59"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "12:16"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "21:54"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "18:06"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "14:37"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "16:04"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "17:13"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "18:50"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "16:17"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "9:11"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "11:19"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "15:30"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "15:49"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "9:35"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "17:54"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "13:14"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "10:05"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "6:07"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "13:35"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "6:30"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "13:26"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "8:36"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "21:28"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "17:40"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "8:06"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "6:16"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "13:54"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "21:14"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "16:50"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "8:02"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "10:22"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "16:13"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "10:51"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "20:44"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "19:30"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "6:13"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "13:58"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "17:11"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "10:29"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "17:45"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "17:46"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "16:12"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "14:54"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "14:59"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "19:12"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "10:07"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "21:49"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "15:27"
    },
    {
        "line": 112,
        "stop": "Tyniec",
        "order": 18,
        "time": "13:46"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "7:42"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "17:05"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "6:40"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "20:25"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "6:48"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "15:37"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "8:46"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "12:11"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "16:51"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "18:12"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "18:32"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "19:30"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "10:43"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "6:17"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "18:58"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "20:55"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "12:10"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "13:02"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "21:56"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "18:47"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "15:56"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "11:37"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "15:42"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "16:27"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "20:36"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "21:18"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "14:32"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "12:25"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "18:41"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "21:02"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "7:56"
    },
    {
        "line": 111,
        "stop": "Pleszów",
        "order": 1,
        "time": "10:09"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "10:02"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "14:57"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "20:59"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "8:08"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "18:07"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "18:01"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "8:36"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "8:29"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "9:20"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "12:31"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "12:26"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "12:39"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "11:51"
    },
    {
        "line": 105,
        "stop": "UR al. 29 Listopada",
        "order": 7,
        "time": "20:04"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "14:08"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "16:02"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "6:14"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "14:07"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "7:31"
    },
    {
        "line": 102,
        "stop": "Bielany Szkoła",
        "order": 26,
        "time": "17:17"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "20:14"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "6:32"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "20:36"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "17:17"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "13:18"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "6:46"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "10:20"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "10:40"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "10:43"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "6:54"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "13:44"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "19:56"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "21:03"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "7:47"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "7:53"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "20:30"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "8:43"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "8:27"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "10:10"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "15:25"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "9:53"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "14:29"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "17:56"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "13:49"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "12:48"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "19:18"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "9:34"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "6:16"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "16:35"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "10:42"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "15:53"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "21:51"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "18:54"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "13:20"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "11:50"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "9:17"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "10:28"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "16:55"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "9:33"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "14:36"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "20:16"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "20:07"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "7:16"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "11:38"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "18:59"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "17:54"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "12:24"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "16:40"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "18:14"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "21:03"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "9:15"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "12:21"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "18:34"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "18:38"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "6:45"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "15:15"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "18:33"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "18:03"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "13:17"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "15:34"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "8:29"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "7:52"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "17:05"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "16:15"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "20:36"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "13:43"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "19:30"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "19:17"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "18:16"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "16:49"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "8:07"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "7:21"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "17:39"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "20:08"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "19:38"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "12:27"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "16:41"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "14:28"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "16:45"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "6:34"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "20:25"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "16:26"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "6:34"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "20:55"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "20:19"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "18:11"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "20:08"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "19:17"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "8:20"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "8:13"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "6:01"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "17:16"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "15:31"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "11:44"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Dół",
        "order": 21,
        "time": "21:08"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "8:36"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "14:50"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "19:28"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "12:11"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "18:26"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "7:08"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "15:38"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "7:49"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "16:35"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "15:07"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "16:25"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "15:19"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "13:44"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "9:20"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "12:03"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "16:35"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "8:54"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "11:44"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "19:08"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "13:44"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "21:08"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "21:13"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "20:40"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "15:28"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "15:45"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "16:43"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "13:52"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "15:22"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "21:55"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "18:30"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "7:40"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "15:16"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "11:32"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "20:55"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "14:05"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "14:32"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "12:44"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "11:11"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "6:27"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "18:54"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "20:17"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "8:07"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "7:40"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "19:30"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "19:06"
    },
    {
        "line": 111,
        "stop": "Drożyska",
        "order": 13,
        "time": "17:59"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "20:21"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "7:58"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "15:02"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "10:29"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "13:54"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "20:57"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "16:45"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "18:07"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "15:59"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "12:25"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "11:52"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "20:28"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "7:56"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "21:20"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "17:54"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "6:29"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "20:59"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "19:58"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "19:23"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "20:24"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "10:58"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "8:15"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "21:31"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "7:31"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "12:18"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "14:56"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "11:54"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 6,
        "time": "7:44"
    },
    {
        "line": 110,
        "stop": "Lubocza Przychodnia",
        "order": 11,
        "time": "12:57"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "16:13"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "9:55"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "6:37"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "18:56"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "7:13"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "18:17"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "8:44"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "14:17"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "13:43"
    },
    {
        "line": 103,
        "stop": "Os. Zgody",
        "order": 2,
        "time": "17:07"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "8:57"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "19:07"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "21:15"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "16:50"
    },
    {
        "line": 107,
        "stop": "Wola Duchacka",
        "order": 2,
        "time": "10:43"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "8:04"
    },
    {
        "line": 103,
        "stop": "Na Załęczu",
        "order": 11,
        "time": "16:27"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "19:07"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:34"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "19:20"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "15:16"
    },
    {
        "line": 109,
        "stop": "Bielańskie Skały",
        "order": 13,
        "time": "16:19"
    },
    {
        "line": 111,
        "stop": "Cmentarz Ruszcza",
        "order": 8,
        "time": "15:59"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "16:44"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "11:34"
    },
    {
        "line": 109,
        "stop": "Bielany Szkoła",
        "order": 16,
        "time": "17:52"
    },
    {
        "line": 111,
        "stop": "Zakępie",
        "order": 22,
        "time": "6:51"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "20:20"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "20:16"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "20:54"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "18:02"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "8:23"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "14:18"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "7:29"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "12:13"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "9:14"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "21:06"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "6:18"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "11:36"
    },
    {
        "line": 103,
        "stop": "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
        "order": 3,
        "time": "21:08"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "9:25"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "11:01"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "17:13"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "10:06"
    },
    {
        "line": 106,
        "stop": "Skotniki Kościół",
        "order": 13,
        "time": "7:45"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "16:39"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "6:11"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "11:41"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "7:20"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "19:20"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "12:52"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "21:03"
    },
    {
        "line": 102,
        "stop": "Sielanka",
        "order": 14,
        "time": "16:51"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "21:35"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "17:16"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:56"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "20:24"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "7:56"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "9:11"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "12:34"
    },
    {
        "line": 106,
        "stop": "Rostworowskiego",
        "order": 5,
        "time": "20:51"
    },
    {
        "line": 102,
        "stop": "Kopalina",
        "order": 17,
        "time": "15:51"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "10:44"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "9:17"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "15:21"
    },
    {
        "line": 111,
        "stop": "Wyciąska",
        "order": 11,
        "time": "15:41"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "15:17"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "8:20"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "16:44"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "6:06"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "10:46"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "9:32"
    },
    {
        "line": 105,
        "stop": "Dobrego Pasterza",
        "order": 5,
        "time": "10:25"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "13:14"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "17:14"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "15:28"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "15:17"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "21:51"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "15:42"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "20:34"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "10:29"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "17:52"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "6:28"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "12:30"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "19:35"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "13:24"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "16:31"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "21:59"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "20:59"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "12:33"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "7:35"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "9:48"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "8:49"
    },
    {
        "line": 111,
        "stop": "Przylasek Wyciąski",
        "order": 14,
        "time": "13:24"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "9:32"
    },
    {
        "line": 109,
        "stop": "Benedyktowicza",
        "order": 8,
        "time": "6:55"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "21:52"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "17:34"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "16:04"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "17:28"
    },
    {
        "line": 109,
        "stop": "Cracovia Stadion",
        "order": 1,
        "time": "6:38"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "17:19"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "16:45"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "12:05"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "8:28"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "13:37"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "7:46"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "7:20"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "9:58"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "16:36"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "11:07"
    },
    {
        "line": 107,
        "stop": "Hala Sportowa Piaski Wielkie",
        "order": 8,
        "time": "8:21"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "15:33"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "6:29"
    },
    {
        "line": 107,
        "stop": "Krzemieniecka",
        "order": 14,
        "time": "6:51"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "13:19"
    },
    {
        "line": 112,
        "stop": "Kostrze Szkoła",
        "order": 12,
        "time": "20:19"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "16:14"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "15:40"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "16:51"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "7:53"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "15:34"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "15:07"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "19:32"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "14:28"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "21:12"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "15:03"
    },
    {
        "line": 112,
        "stop": "Bolesława Śmiałego",
        "order": 17,
        "time": "13:27"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "14:43"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "21:41"
    },
    {
        "line": 102,
        "stop": "Park Decjusza",
        "order": 15,
        "time": "9:51"
    },
    {
        "line": 101,
        "stop": "Szwedzka",
        "order": 4,
        "time": "15:51"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "9:28"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "12:46"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "10:59"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "7:37"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "16:32"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "8:16"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "16:30"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "17:32"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "17:59"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "20:20"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "21:15"
    },
    {
        "line": 112,
        "stop": "Wały Wiślane",
        "order": 13,
        "time": "20:44"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "7:51"
    },
    {
        "line": 110,
        "stop": "Węgrzynowice Centrum",
        "order": 23,
        "time": "13:47"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "7:34"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "7:19"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "12:23"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "16:09"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "10:50"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "6:01"
    },
    {
        "line": 102,
        "stop": "Rzepichy",
        "order": 21,
        "time": "11:34"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "6:33"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "15:47"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "21:14"
    },
    {
        "line": 111,
        "stop": "Podstawie",
        "order": 12,
        "time": "10:48"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "9:06"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "11:11"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "21:39"
    },
    {
        "line": 103,
        "stop": "Centralna",
        "order": 6,
        "time": "19:29"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "14:06"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "13:09"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 5,
        "time": "17:40"
    },
    {
        "line": 100,
        "stop": "Aleja Waszyngtona",
        "order": 3,
        "time": "9:12"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "13:47"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "13:59"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "12:42"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "14:32"
    },
    {
        "line": 102,
        "stop": "Głowackiego",
        "order": 8,
        "time": "20:54"
    },
    {
        "line": 105,
        "stop": "Majora",
        "order": 4,
        "time": "17:47"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "7:07"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "11:23"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "17:19"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "14:58"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "13:42"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "20:01"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "10:57"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "19:15"
    },
    {
        "line": 102,
        "stop": "Kasztanowa",
        "order": 16,
        "time": "8:52"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "13:10"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "20:42"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "16:40"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "21:33"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "10:55"
    },
    {
        "line": 109,
        "stop": "Malczewskiego",
        "order": 6,
        "time": "12:07"
    },
    {
        "line": 107,
        "stop": "Karpińskiego",
        "order": 3,
        "time": "18:57"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "15:33"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "13:05"
    },
    {
        "line": 102,
        "stop": "Cichy Kącik",
        "order": 10,
        "time": "20:06"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "18:48"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "9:44"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "12:24"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "8:48"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "8:33"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "16:04"
    },
    {
        "line": 112,
        "stop": "Kostrze Kapliczka",
        "order": 14,
        "time": "13:22"
    },
    {
        "line": 110,
        "stop": "Spławy",
        "order": 19,
        "time": "7:33"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "7:15"
    },
    {
        "line": 111,
        "stop": "Wolica Kościół",
        "order": 18,
        "time": "10:44"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "13:47"
    },
    {
        "line": 101,
        "stop": "Kapelanka",
        "order": 5,
        "time": "6:54"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "7:09"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "19:41"
    },
    {
        "line": 111,
        "stop": "Igołomska",
        "order": 4,
        "time": "6:05"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "8:22"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "15:24"
    },
    {
        "line": 112,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "7:41"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "19:40"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "15:32"
    },
    {
        "line": 107,
        "stop": "Kosocice",
        "order": 10,
        "time": "14:01"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "18:27"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "8:43"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "18:34"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Zakłady",
        "order": 8,
        "time": "7:23"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 3,
        "time": "11:17"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "12:18"
    },
    {
        "line": 102,
        "stop": "Krowodrza Górka",
        "order": 1,
        "time": "21:30"
    },
    {
        "line": 102,
        "stop": "Uniwersytet Pedagogiczny",
        "order": 7,
        "time": "6:25"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "7:10"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "14:53"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "9:48"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "18:24"
    },
    {
        "line": 106,
        "stop": "Skośna",
        "order": 9,
        "time": "12:11"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "12:09"
    },
    {
        "line": 105,
        "stop": "Powstańców Garaże",
        "order": 2,
        "time": "20:24"
    },
    {
        "line": 105,
        "stop": "Politechnika",
        "order": 10,
        "time": "21:10"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "21:02"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "7:50"
    },
    {
        "line": 110,
        "stop": "Barwna",
        "order": 22,
        "time": "15:59"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "10:43"
    },
    {
        "line": 107,
        "stop": "Tuchowska",
        "order": 4,
        "time": "19:44"
    },
    {
        "line": 106,
        "stop": "Kobierzyn",
        "order": 10,
        "time": "17:23"
    },
    {
        "line": 112,
        "stop": "Bogucianka",
        "order": 19,
        "time": "19:40"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "14:48"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "8:04"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "9:04"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "18:14"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "21:22"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "16:52"
    },
    {
        "line": 111,
        "stop": "Wolica Szkoła",
        "order": 17,
        "time": "17:44"
    },
    {
        "line": 101,
        "stop": "Zielińskiego",
        "order": 6,
        "time": "16:50"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "14:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "17:03"
    },
    {
        "line": 106,
        "stop": "Skotniki",
        "order": 12,
        "time": "18:08"
    },
    {
        "line": 111,
        "stop": "Wyciąże Sklep",
        "order": 10,
        "time": "17:28"
    },
    {
        "line": 112,
        "stop": "Tyniecka Autostrada",
        "order": 16,
        "time": "10:48"
    },
    {
        "line": 106,
        "stop": "Borsucza",
        "order": 2,
        "time": "20:58"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "20:31"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "9:10"
    },
    {
        "line": 111,
        "stop": "Ruszcza",
        "order": 7,
        "time": "20:14"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "8:45"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "19:21"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "11:09"
    },
    {
        "line": 105,
        "stop": "Biskupa Prandoty",
        "order": 8,
        "time": "17:28"
    },
    {
        "line": 111,
        "stop": "Wolica Most",
        "order": 19,
        "time": "15:10"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "15:17"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "6:59"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "17:29"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "17:43"
    },
    {
        "line": 103,
        "stop": "Rondo Czyżyńskie",
        "order": 5,
        "time": "15:51"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "11:10"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "10:20"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "7:54"
    },
    {
        "line": 106,
        "stop": "Brücknera",
        "order": 14,
        "time": "10:35"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "13:40"
    },
    {
        "line": 110,
        "stop": "Cienista",
        "order": 5,
        "time": "7:35"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "6:43"
    },
    {
        "line": 109,
        "stop": "Na Krępaku",
        "order": 12,
        "time": "16:48"
    },
    {
        "line": 102,
        "stop": "Strzelnica",
        "order": 13,
        "time": "7:33"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "7:09"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "9:56"
    },
    {
        "line": 107,
        "stop": "Piaski Wielkie",
        "order": 7,
        "time": "7:21"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "15:27"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "7:34"
    },
    {
        "line": 103,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "10:08"
    },
    {
        "line": 112,
        "stop": "Fort Bodzów",
        "order": 11,
        "time": "19:50"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "15:42"
    },
    {
        "line": 102,
        "stop": "Kosmowskiej",
        "order": 22,
        "time": "8:21"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "7:06"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "13:42"
    },
    {
        "line": 111,
        "stop": "Wolica Las",
        "order": 20,
        "time": "9:36"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "15:04"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "14:13"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "18:46"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "7:43"
    },
    {
        "line": 110,
        "stop": "Wadowska",
        "order": 14,
        "time": "9:08"
    },
    {
        "line": 103,
        "stop": "Sikorki",
        "order": 10,
        "time": "13:16"
    },
    {
        "line": 111,
        "stop": "Jeziorko",
        "order": 9,
        "time": "6:58"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "6:22"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "6:53"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "17:16"
    },
    {
        "line": 112,
        "stop": "Praska",
        "order": 4,
        "time": "13:57"
    },
    {
        "line": 112,
        "stop": "Kolna",
        "order": 15,
        "time": "11:43"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "10:14"
    },
    {
        "line": 106,
        "stop": "Lipińskiego",
        "order": 3,
        "time": "17:01"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "20:11"
    },
    {
        "line": 110,
        "stop": "Żeromskiego",
        "order": 3,
        "time": "20:41"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "9:25"
    },
    {
        "line": 102,
        "stop": "Obserwatorium",
        "order": 24,
        "time": "18:06"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "7:27"
    },
    {
        "line": 107,
        "stop": "Szczegów",
        "order": 11,
        "time": "8:43"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "16:03"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "13:44"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "10:22"
    },
    {
        "line": 102,
        "stop": "Biprostal",
        "order": 6,
        "time": "13:03"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "18:48"
    },
    {
        "line": 111,
        "stop": "Bartnicza",
        "order": 16,
        "time": "8:46"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "8:34"
    },
    {
        "line": 102,
        "stop": "Łobzów SKA",
        "order": 4,
        "time": "14:18"
    },
    {
        "line": 102,
        "stop": "Tondosa",
        "order": 12,
        "time": "12:19"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "10:48"
    },
    {
        "line": 110,
        "stop": "Darwina",
        "order": 7,
        "time": "16:58"
    },
    {
        "line": 105,
        "stop": "Powstańców",
        "order": 3,
        "time": "18:44"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "12:31"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "18:35"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "21:30"
    },
    {
        "line": 107,
        "stop": "Niebieska Autostrada",
        "order": 9,
        "time": "20:36"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "13:14"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "17:52"
    },
    {
        "line": 102,
        "stop": "Wybickiego",
        "order": 3,
        "time": "17:33"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "11:34"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "7:32"
    },
    {
        "line": 110,
        "stop": "Wańkowicza",
        "order": 6,
        "time": "21:49"
    },
    {
        "line": 111,
        "stop": "Wyciąże Zachód",
        "order": 26,
        "time": "14:02"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "20:49"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "18:52"
    },
    {
        "line": 111,
        "stop": "Wolica",
        "order": 21,
        "time": "19:44"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "15:32"
    },
    {
        "line": 110,
        "stop": "Aleja Przyjaźni",
        "order": 1,
        "time": "13:56"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "21:37"
    },
    {
        "line": 109,
        "stop": "Przegorzały",
        "order": 10,
        "time": "11:27"
    },
    {
        "line": 109,
        "stop": "Muzeum Narodowe",
        "order": 2,
        "time": "18:46"
    },
    {
        "line": 109,
        "stop": "Wodociągi",
        "order": 14,
        "time": "18:34"
    },
    {
        "line": 109,
        "stop": "Bielany Klasztor",
        "order": 15,
        "time": "18:50"
    },
    {
        "line": 106,
        "stop": "Lubostroń",
        "order": 8,
        "time": "20:07"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "8:36"
    },
    {
        "line": 107,
        "stop": "Bochenka",
        "order": 5,
        "time": "14:47"
    },
    {
        "line": 102,
        "stop": "Piastowska",
        "order": 11,
        "time": "16:04"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "6:20"
    },
    {
        "line": 106,
        "stop": "Łagiewniki",
        "order": 1,
        "time": "10:25"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "7:39"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "13:42"
    },
    {
        "line": 105,
        "stop": "Opolska Estakada",
        "order": 6,
        "time": "9:19"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "21:47"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "6:20"
    },
    {
        "line": 107,
        "stop": "Łużycka",
        "order": 6,
        "time": "9:53"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "6:47"
    },
    {
        "line": 103,
        "stop": "Sołtysowska Osiedle",
        "order": 9,
        "time": "20:10"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "12:52"
    },
    {
        "line": 106,
        "stop": "Zachodnia",
        "order": 6,
        "time": "11:18"
    },
    {
        "line": 112,
        "stop": "Park Skały Twardowskiego",
        "order": 7,
        "time": "11:18"
    },
    {
        "line": 110,
        "stop": "Węgrzynowicka",
        "order": 20,
        "time": "17:35"
    },
    {
        "line": 111,
        "stop": "Wyciąże",
        "order": 27,
        "time": "17:42"
    },
    {
        "line": 110,
        "stop": "Aleja Róż",
        "order": 2,
        "time": "8:50"
    },
    {
        "line": 112,
        "stop": "Rynek Dębnicki",
        "order": 3,
        "time": "17:43"
    },
    {
        "line": 112,
        "stop": "Rodzinna",
        "order": 9,
        "time": "6:06"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "12:37"
    },
    {
        "line": 101,
        "stop": "Aleja Waszyngtona",
        "order": 8,
        "time": "12:30"
    },
    {
        "line": 110,
        "stop": "Cmentarz Grębałów Południe",
        "order": 8,
        "time": "13:21"
    },
    {
        "line": 112,
        "stop": "Os. Robotnicze",
        "order": 6,
        "time": "19:25"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "18:25"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "6:22"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "15:28"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "20:43"
    },
    {
        "line": 103,
        "stop": "Bieńczycka",
        "order": 4,
        "time": "11:44"
    },
    {
        "line": 110,
        "stop": "Wadów Działki",
        "order": 18,
        "time": "10:18"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "20:34"
    },
    {
        "line": 107,
        "stop": "Zajezdnia Wola Duchacka",
        "order": 1,
        "time": "7:20"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "10:37"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "19:02"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "8:25"
    },
    {
        "line": 103,
        "stop": "Sołtysowska",
        "order": 7,
        "time": "7:34"
    },
    {
        "line": 101,
        "stop": "Os. Podwawelskie",
        "order": 1,
        "time": "14:09"
    },
    {
        "line": 111,
        "stop": "Siejówka",
        "order": 15,
        "time": "20:19"
    },
    {
        "line": 109,
        "stop": "Jubilat",
        "order": 3,
        "time": "19:04"
    },
    {
        "line": 109,
        "stop": "Zaskale",
        "order": 11,
        "time": "17:56"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "12:48"
    },
    {
        "line": 107,
        "stop": "Drużbackiej",
        "order": 15,
        "time": "9:03"
    },
    {
        "line": 111,
        "stop": "Wyciąże Wiadukt",
        "order": 25,
        "time": "10:46"
    },
    {
        "line": 112,
        "stop": "Pychowice",
        "order": 8,
        "time": "17:42"
    },
    {
        "line": 110,
        "stop": "Lubocza Bugaj",
        "order": 10,
        "time": "20:18"
    },
    {
        "line": 102,
        "stop": "Mazowiecka",
        "order": 5,
        "time": "10:07"
    },
    {
        "line": 112,
        "stop": "Zielińskiego",
        "order": 5,
        "time": "20:18"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 29,
        "time": "19:04"
    },
    {
        "line": 100,
        "stop": "Malczewskiego",
        "order": 2,
        "time": "18:22"
    },
    {
        "line": 107,
        "stop": "Żelazowskiego",
        "order": 12,
        "time": "21:26"
    },
    {
        "line": 112,
        "stop": "Górka Pychowicka",
        "order": 10,
        "time": "11:43"
    },
    {
        "line": 105,
        "stop": "Prądnik Czerwony",
        "order": 1,
        "time": "13:42"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "12:35"
    },
    {
        "line": 109,
        "stop": "Salwator",
        "order": 5,
        "time": "15:35"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "8:17"
    },
    {
        "line": 102,
        "stop": "Chełmska",
        "order": 20,
        "time": "7:50"
    },
    {
        "line": 101,
        "stop": "Rondo Grunwaldzkie",
        "order": 3,
        "time": "10:45"
    },
    {
        "line": 102,
        "stop": "Cmentarz Bielany",
        "order": 25,
        "time": "11:28"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "9:06"
    },
    {
        "line": 105,
        "stop": "Cmentarz Rakowicki Zachód",
        "order": 9,
        "time": "20:51"
    },
    {
        "line": 103,
        "stop": "Lasek Łęgowski",
        "order": 14,
        "time": "7:36"
    },
    {
        "line": 111,
        "stop": "Brzeska",
        "order": 23,
        "time": "19:03"
    },
    {
        "line": 106,
        "stop": "Grota-Roweckiego",
        "order": 4,
        "time": "20:36"
    },
    {
        "line": 110,
        "stop": "Teatr Ludowy",
        "order": 4,
        "time": "6:18"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "19:05"
    },
    {
        "line": 110,
        "stop": "Wadów Glinik",
        "order": 17,
        "time": "9:01"
    },
    {
        "line": 103,
        "stop": "Habina",
        "order": 12,
        "time": "21:17"
    },
    {
        "line": 109,
        "stop": "Glinnik",
        "order": 9,
        "time": "13:28"
    },
    {
        "line": 110,
        "stop": "Wadów Os. Kolejowe",
        "order": 16,
        "time": "13:52"
    },
    {
        "line": 112,
        "stop": "Rondo Grunwaldzkie",
        "order": 2,
        "time": "21:35"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "15:31"
    },
    {
        "line": 111,
        "stop": "Cło",
        "order": 24,
        "time": "10:11"
    },
    {
        "line": 111,
        "stop": "Szymańskiego",
        "order": 28,
        "time": "12:17"
    },
    {
        "line": 102,
        "stop": "Krowodrza Urzędy Skarbowe",
        "order": 2,
        "time": "20:41"
    },
    {
        "line": 106,
        "stop": "Torfowa",
        "order": 7,
        "time": "16:11"
    },
    {
        "line": 101,
        "stop": "Malczewskiego",
        "order": 7,
        "time": "18:05"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "17:32"
    },
    {
        "line": 102,
        "stop": "Chełm",
        "order": 19,
        "time": "14:27"
    },
    {
        "line": 103,
        "stop": "Odmętowa",
        "order": 13,
        "time": "18:27"
    },
    {
        "line": 107,
        "stop": "Barycz",
        "order": 13,
        "time": "11:56"
    },
    {
        "line": 111,
        "stop": "Zakład Przeróbki",
        "order": 2,
        "time": "9:50"
    },
    {
        "line": 109,
        "stop": "Komorowskiego",
        "order": 4,
        "time": "12:39"
    },
    {
        "line": 110,
        "stop": "Lubocza Trafo",
        "order": 13,
        "time": "12:09"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "20:06"
    },
    {
        "line": 102,
        "stop": "Miasteczko Studenckie AGH",
        "order": 9,
        "time": "10:04"
    },
    {
        "line": 100,
        "stop": "Salwator",
        "order": 1,
        "time": "6:33"
    }
]

module.exports = stops
