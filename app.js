const days = [
  {
    id: "nov20",
    when: "Fri 20",
    date: "Friday, November 20",
    name: "Arrival: Kyoto",
    place: "Travel day",
    summary: "Day 1",
    weather: "☁️ Kyoto forecast · 46–59°F · overcast, small chance of rain",
    prompt: "What do you want to remember about the first few hours?",
    photos: [
      ["photos/p4.png", "The Blossom Kyoto at night", "full"],
      ["photos/p5b.png", "teamLab"],
    ],
    blocks: [
      { time: "Until 3:00 PM", title: "Before we meet", detail: "Separate ways until check-in at the Blossom.", parallel: [
        ["Night before", "", { text: "Asiana from Los Angeles at 11:50pm. OZ 203, then OZ 112 after a 1 hour 10 minute stop in Incheon.", reserve: [
          ["Airline", "Asiana"],
          ["Flights", "OZ 203, then OZ 112. Airbus A350-900."],
          ["When", "Los Angeles 11:50pm → Kansai 9:15am the next morning"],
          ["Stop", "Incheon, 1 hour 10 minutes. Total 16 hours 25 minutes."],
          ["Fare", "Economy, class K. A checked bag and a carry-on are included."],
          ["Seats", "Seat selection is not included in the fare."],
        ] }],
        ["9:15 AM", "", { text: "Lands at Kansai Airport. Use the Visit Japan Web QR code for customs & arrival." }],
        ["To Kyoto", { text: "Nozomi 29. Shinagawa 11:37 AM → Kyoto at 1:44 PM.", star: "Fuji is on the left.", guide: "Nozomi 29 to Kyoto", reserve: [
          ["Reference", "2007"],
          ["Train", "Nozomi 29 · N700, 16 cars · ordinary car"],
          ["When", "Fri, Nov 20, Shinagawa 11:37am → Kyoto 1:44pm"],
          ["Ticket", "smartEX. QR ticket or IC card. This fare covers the Shinkansen only."],
          ["Platform", "Check the board at Shinagawa. The track is posted that morning."],
        ] }, { text: "Haruka 18 to Kyoto.", guide: "Haruka to Kyoto", times: [
          ["10:44 AM", "Kyoto at 12:04 PM."],
          ["11:14 AM", "Kyoto at 12:34 PM."],
          ["11:44 AM", "Kyoto at 1:04 PM."],
          ["12:14 PM", "Kyoto at 1:34 PM.", "This one reaches Kyoto at the same time as Ria."],
        ] }],
        ["1:44 PM", { text: "Transit from Kyoto Station, Subway to the Blossom Hotel.", guide: "Kyoto Station to the hotel", span: true }],
      ] },
      { time: "3:00 PM", title: "Hotel check-in", detail: "The Blossom Kyoto, a quiet hotel in Shimogyo with the onsen downstairs. Check-in starts at 3:00pm.", reserve: [
        ["Reference", "73569698715877"],
        ["Name", "Ria Chuapoco"],
        ["Stay", "Fri, Nov 20, check-in from 3:00pm · checkout Tue, Nov 24, 11:00am"],
        ["Address", "140-2 Manjujicho, Shimogyo-ku, Kyoto 600-8104"],
        ["Perk", "20% off food and drink, once during the stay"],
        ["Cancel", "Free until Nov 18, 12:00am hotel time"],
        ["At the desk", "City tax is collected at the hotel"],
      ] },
      { time: "3:00–3:30 PM", kind: "Transit", transit: true, title: "Walk to teamLab", detail: "teamLab sits just south of Kyoto Station, a dark hall of light before dinner. Leave as soon as you have the keys so you make the 3:30 entry window." },
      { time: "3:30–6:00 PM", title: "teamLab Kyoto", detail: "Rooms of light and water. Be inside during the 3:30–4:00pm entry window.", star: "Wear something light. The rooms are drawn in light, and pale clothes catch it. Leave the flash off.", fact: [
        ["teamLab", [
          "teamLab began in Tokyo in 2001, a group of artists, programmers, and engineers working as one.",
          "This museum, Biovortex, opened on October 7, 2025, southeast of Kyoto Station. It is the largest teamLab museum in Japan.",
        ]],
      ], reserve: [
        ["Reference", "KYMAKYTKNH7JR-0001"],
        ["Ticket", "Entrance Pass, teamLab Biovortex"],
        ["Entry", "Fri, Nov 20, 3:30–4:00pm"],
        ["Changes", "The date or time can be moved up to three times, until 2 hours before entry"],
      ] },
      { time: "6:00–6:15 PM", kind: "Transit", transit: true, title: "Walk to Dinner", guide: "Walk to Akayashiro", detail: "Leave teamLab at 6:00. The restaurant is a short walk in Higashikujo, and the table is at 6:15." },
      { time: "6:15 PM", kind: "Booked", meal: true, title: "Wagyu sukiyaki at Akayashiro", detail: "Sukiyaki in a small room near the station. The 6:15 reservation is booked.", fact: [
        ["Sukiyaki", [
          "A Kansai hot pot. In 1872 Emperor Meiji ate beef in public, and the old Buddhist taboo on meat began to loosen.",
          "In Kansai the beef is simmered in soy and mirin. In Tokyo it was often seared in the pan first.",
        ]],
      ], reserve: [
        ["Reference", "Held by the hotel. Sign the confirmation slip at check-in."],
        ["Name", "Ria Chuapoco"],
        ["When", "Fri, Nov 20, 6:15pm"],
        ["Address", "51 Higashikujo Minami-Sannocho"],
        ["Phone", "075-201-0218"],
        ["Note", "A cake can be dropped off ahead for the birthday"],
      ] },
    ],
  },
  {
    id: "nov21",
    when: "Sat 21",
    date: "Saturday, November 21",
    name: "Fushimi, Gion, Rings",
    place: "Kyoto",
    summary: "Day 2",
    weather: "🌤️ Kyoto forecast · 46–55°F · mostly clear",
    prompt: "Which little thing from today belongs in our story?",
    photos: [
      ["photos/p6b.png", "Fushimi Inari"],
      ["photos/p6a.png", "A Kyoto lane and pagoda"],
      ["photos/p5a.png", "Nishiki Market"],
    ],
    blocks: [
      { time: "7:20–7:45 AM", kind: "Transit", transit: true, title: "Leave for Fushimi Inari", detail: "Leave the hotel at 7:20 so you are at the torii by 7:45, before the tour buses." },
      { time: "7:45–9:30 AM", title: "Fushimi Inari", detail: "A mountainside of vermilion torii. The path is quietest early.", star: "The upper path is a hike, and the gates fill up after mid-morning. Kiyomizu-Gojo on the Keihan line is a different station from the subway Gojo.", fact: [
        ["Fushimi Inari", [
          "Traditionally founded in 711 by the Hata clan, for Inari, the kami of rice, sake, and business.",
          "Companies still donate the vermilion gates. The donor’s name and the date are written on the back of each one.",
          "The foxes are Inari’s messengers. Look at what they hold: a key to the rice granary, a jewel, or a sheaf of rice.",
          "The tunnel everyone photographs is the Senbon Torii, the thousand gates. The view over Kyoto is higher up, at Yotsutsuji.",
        ]],
      ] },
      { time: "9:30–10:00 AM", kind: "Transit", transit: true, title: "Leave for Kiyomizu-dera", detail: "Leave the shrine at 9:30. The train north and the walk up the lanes take you to the temple." },
      { time: "10:00 AM–12:40 PM", title: "Kiyomizu-dera and the pottery lanes", detail: "The wooden stage over the hillside, then ceramic shops along Ninenzaka and Sannenzaka. Leave the temple area at 12:40.", fact: [
        ["Kiyomizu-dera", [
          "Founded in 778 beside the Otowa waterfall. The name means pure water. Three streams fall there, and the custom is to drink from one.",
          "The wooden stage was rebuilt in 1633 under Tokugawa Iemitsu, joined without nails, about 13 meters over the hillside.",
          "In the Edo period people jumped from that stage to stake a wish. “Jumping from the stage at Kiyomizu” still means taking a leap.",
        ]],
        ["The slopes", [
          "Ninenzaka and Sannenzaka are the old pilgrim lanes up to the temple. A stumble on Ninenzaka was said to bring two years of misfortune, and Sannenzaka three.",
        ]],
      ] },
      { time: "12:40–1:30 PM", kind: "Transit", transit: true, title: "Walk to Lunch", guide: "Walk down into Gion", detail: "Leave the temple lanes at 12:40. Wooden machiya and the stone lanes of Gion, down toward Hanamikoji." },
      { time: "1:30–2:30 PM", kind: "Lunch", meal: true, title: "Wabiya Korekido", detail: "Obanzai lunch on Hanamikoji, just south of Shijo. Seating is 60 minutes. Be inside at 1:30 — the table is released after 10 minutes. Leave a little early for the 2:30 jewelry appointment.", reserve: [
        ["Reference", "SMYGTD"],
        ["Name", "Ria Chuapoco"],
        ["When", "Sat, Nov 21, 1:30pm · counter · 60 minutes"],
        ["Address", "570-8 Higashiyama, Hanamikoji south of Shijo and north of the Kaburenjo, Kyoto 605-0074"],
        ["Order", "Stone-grilled oyakodon"],
        ["Arrival", "If you are more than 10 minutes late and have not called, the table can be released"],
        ["Cancel", "Within 12 hours, the reserved plan is charged in full"],
      ] },
      { time: "2:15–2:30 PM", kind: "Transit", transit: true, title: "Gion, then walk to Glänta", detail: "Leave Wabiya at 2:15. About 15 minutes north to the Sanjo Kawaramachi store. The appointment starts at 2:30." },
      { time: "2:30–4:00 PM", kind: "Booked", title: "Custom jewelry at Glänta", detail: "Rings made for the two of you at the Sanjo Kawaramachi store. The appointment runs 2:30–4:00pm.", note: "A request is in to move this to 4:00pm, so lunch is not a rush. Pending confirmation.", reserve: [
        ["Reference", "Confirmed by email. The message has the store, not a separate number."],
        ["Name", "Ria Chuapoco"],
        ["When", "Sat, Nov 21, 2:30–4:00pm"],
        ["Store", "glänta Kyoto Sanjo Kawaramachi, not the Ninenzaka shop"],
        ["Address", "1F, 87 Nakajima-cho, Sanjo-dori Kawaramachi Higashi-iru, Nakagyo-ku, Kyoto 604-8004"],
        ["Phone", "075-708-8419"],
        ["Bring", "Nothing. Tools and aprons are at the store."],
      ] },
      { time: "4:00–4:15 PM", kind: "Transit", transit: true, title: "Walk to Kiyamachi", detail: "Leave Glänta at 4:00. The canal street is a walk south from Sanjo Kawaramachi." },
      { time: "4:15 PM on", title: "Kiyamachi evening", detail: "Explore the canal street after dark & check out Shirakawa lanterns. Then find local dinner options nearby like Chao Chao Gyoza or Kyoto Engine Ramen." },
    ],
  },
  {
    id: "nov22",
    birthday: true,
    when: "Sun 22",
    date: "Sunday, November 22",
    name: "Marie’s 30th Birthday",
    place: "Arashiyama",
    summary: "Day 3",
    weather: "🧥 Kyoto, usual for late November · about 43–57°F · coat weather. The daily forecast is not out this far yet.",
    prompt: "Marie, what should 40-year-old you know about this birthday?",
    photos: [
      ["photos/p7b.png", "Arashiyama bamboo grove"],
      ["photos/p7a.png", "The hotel onsen"],
    ],
    blocks: [
      { time: "9:00–9:45 AM", kind: "Transit", transit: true, title: "Train to Arashiyama", detail: "Leave the hotel at 9:00. The western edge of Kyoto, where the hills meet the river." },
      { time: "9:45 AM–1:00 PM", title: "Bamboo grove and Tenryu-ji", detail: "The grove first, then the Zen gardens. Nothing booked, so the morning can wander.", star: "The path is shoulder to shoulder by late morning, so stay with the early crowd.", fact: [
        ["Tenryu-ji", [
          "Founded in 1339 by the shogun Ashikaga Takauji, to calm the spirit of Emperor Go-Daigo, his ally and then his enemy.",
          "The name means Temple of the Heavenly Dragon. The story says a golden dragon rose from the river in Takauji’s dream.",
          "The garden is credited to the Zen monk Muso Soseki. The Arashiyama hills are part of the design, borrowed scenery beyond the pond.",
        ]],
      ] },
      { time: "1:00–3:00 PM", kind: "Transit", transit: true, title: "Riverside lunch and the train back", detail: "Leave the grove when lunch is done. A light lunch or matcha along the Katsura River, then the train back to the hotel by 3:00." },
      { time: "3:00–5:30 PM", title: "Blossom onsen", detail: "The hotel baths, and a quiet stretch before dinner.", pending: "A massage is still to be booked.", star: "Wash before you get in, and keep the towel close by." },
      { time: "7:30–8:00 PM", kind: "Transit", transit: true, title: "Taxi to Dinner", guide: "Taxi to Higashiyama", detail: "Leave the hotel at 7:30. Evening in the temple streets beside Kodai-ji.", fact: [
        ["Kodai-ji", [
          "Built in 1606 by Nene, widow of Toyotomi Hideyoshi. She became a nun under the name Kodaiin, and the temple took that name.",
          "Some of the lacquered rooms were carried here from Hideyoshi’s Fushimi Castle after it was taken apart.",
        ]],
      ] },
      { time: "8:00 PM", kind: "Booked", meal: true, title: "Kaiseki at Kodaiji Kiwami", detail: "The birthday dinner, course by course. The 8pm reservation is booked.", star: "Counter seating, and the courses take the evening.", reserve: [
        ["Reference", "855D-4FF0-5623-70C2"],
        ["When", "Sun, Nov 22, 8:00pm"],
        ["Where", "Kodaiji Kiwami, Kyoto 605-0828 · counter"],
        ["Cancel", "92 hours ahead"],
        ["Booked through", "Reserve with Google, via Ikyu"],
      ] },
    ],
  },
  {
    id: "nov23",
    when: "Mon 23",
    date: "Monday, November 23",
    name: "Osaka Day Trip",
    place: "Dotonbori",
    summary: "Day 4",
    weather: "🍂 Osaka, usual for late November · about 46–61°F. The daily forecast is not out this far yet.",
    prompt: "What bite are you going to describe for years?",
    photos: [
      ["photos/p8a.png", "Dotonbori and the Glico sign"],
      ["photos/p8b.png", "A night street in Osaka"],
    ],
    blocks: [
      { time: "8:30–9:30 AM", title: "Luggage transfer", detail: "Bags wait at the front desk for Hotel Groove Shinjuku, about $16.50 a bag.", star: "Keep passports with you.", reserve: [
        ["Where", "The Blossom front desk, sent on to Hotel Groove Shinjuku"],
        ["Cost", "About $16.50 a bag"],
        ["Reference", "Ask the desk. No confirmation number came through in the mail."],
      ] },
      { time: "9:30–10:15 AM", kind: "Transit", transit: true, title: "Kyoto to Osaka", detail: "Leave the hotel at 9:30. Across to Umeda, and a whole city for the afternoon." },
      { time: "10:15–10:30 AM", kind: "Transit", transit: true, title: "Umeda to Dotonbori", detail: "Leave Umeda at 10:15. Namba is one subway ride, and the canal is outside the station." },
      { time: "10:30 AM–3:00 PM", title: "Dotonbori and Shinsaibashi-suji", detail: "The neon canal, the Glico sign, and a long covered shopping street. Food hopping and vintage.", star: "Labor Thanksgiving Day, a national holiday. The trains and the canal will be packed, and a lot of the stalls are cash.", fact: [
        ["Dotonbori", [
          "The canal was begun in 1612 by the merchant Yasui Doton. He died before it was finished, and it was named for him.",
          "Kabuki houses and theater boats lined the water in the Edo period, which is why the signs still hang over the canal.",
          "The Glico running man first went up in 1935. The sign has been replaced several times. The pose is a runner at the finish.",
        ]],
        ["Osaka", [
          "The old city slogan is kuidaore: eat until you drop.",
        ]],
      ] },
      { time: "3:00–3:50 PM", kind: "Transit", transit: true, title: "Back to Kyoto", detail: "Leave Dotonbori at 3:00. The ride home along the river, back to the hotel." },
      { time: "3:50–6:45 PM", title: "Onsen and pack", detail: "Hotel baths, then bags ready for the Shinkansen tomorrow." },
      { time: "6:45–7:00 PM", kind: "Transit", transit: true, title: "Walk to Dinner", guide: "Walk to the izakaya", detail: "Leave the hotel at 6:45. The counter is on Takakura-dori, a short walk west." },
      { time: "7:00 PM on", title: "Izakaya near the hotel", detail: "A counter on Takakura-dori. Yakitori and a draft beer." },
    ],
  },
  {
    id: "nov24",
    when: "Tue 24",
    date: "Tuesday, November 24",
    name: "Kyoto → Tokyo",
    place: "Travel day",
    summary: "Day 5",
    weather: "🧥 Kyoto in the morning, Tokyo by afternoon. Usual for late November · about 45–59°F. The daily forecast is not out this far yet.",
    prompt: "Write the Fuji moment down before it turns into a blur.",
    photos: [
      ["photos/p11b.png", "A train with Mount Fuji behind it"],
      ["photos/p11a.png", "Kabukicho at night"],
      ["photos/p10.png", "A Shinjuku hotel room"],
    ],
    blocks: [
      { time: "10:15–11:15 AM", kind: "Transit", transit: true, title: "Checkout and Kyoto Station", detail: "Leave the hotel at 10:15. Coffee at Inoda Coffee Porta or Kurasu, and an ekiben before the gates.", star: "The track number is posted at Kyoto Station that morning." },
      { time: "11:30 AM–1:38 PM", kind: "Booked", title: "Nozomi 250 to Shinagawa", detail: "Two hours of countryside between Kyoto and Tokyo. Fuji shows up around 1:10pm.", star: "Fuji is on the right. Seats 20A and 20B are on the left, so watch across the aisle around 1:10.", fact: [
        ["The Shinkansen", [
          "The Tokaido line opened on October 1, 1964, nine days before the Tokyo Olympics.",
          "The first services were Hikari and Kodama. At 210 km/h they were the fastest trains in the world. Nozomi, the one you are on, came later.",
        ]],
      ], reserve: [
        ["Reference", "2001"],
        ["Train", "Nozomi 250 · N700, 16 cars · ordinary car"],
        ["When", "Tue, Nov 24, Kyoto 11:30am → Shinagawa 1:38pm"],
        ["Seats", "Car 14, 20A and 20B. Fuji is on the right. 20A is the left window, 20B the left aisle."],
        ["Ticket", "smartEX. QR ticket or IC card. This fare covers the Shinkansen only."],
        ["Platform", "Check the board at Kyoto Station. The track is posted that morning."],
      ] },
      { time: "1:38–2:05 PM", kind: "Transit", transit: true, title: "Shinagawa to Shinjuku", detail: "Leave Shinagawa at 1:38. Into the west side of the city, and the hotel above Kabukicho." },
      { time: "2:05–5:30 PM", title: "Hotel Groove Shinjuku", detail: "A room high in Tokyu Kabukicho Tower. Reception is on 18F. Check-in starts at 3:00pm, so the first hour can be bags and a walk.", reserve: [
        ["Reference", "73565165348655"],
        ["Name", "Ria Chuapoco"],
        ["Stay", "Tue, Nov 24, check-in from 3:00pm · checkout Sat, Nov 28, 11:00am"],
        ["Address", "Kabukicho 1-29-1, Shinjuku, Tokyo 160-0021"],
        ["Reception", "18F, Shinjuku east / Kabukicho exit"],
        ["Cancel", "Free until Nov 23, 3:00pm hotel time"],
        ["At the desk", "City tax is collected at the hotel"],
      ] },
      { time: "5:30–5:45 PM", kind: "Transit", transit: true, title: "Out into Kabukicho", detail: "Leave the room at 5:30. Kabukicho is outside the tower. Omoide Yokocho is the west side of Shinjuku Station." },
      { time: "5:45 PM on", title: "Kabukicho and Omoide Yokocho", detail: "Neon streets outside the hotel, then yakitori under the lanterns.", fact: [
        ["Kabukicho", [
          "The blocks here were burned flat in 1945. On April 1, 1948 the district was named for a kabuki theater that was planned after the war and never built.",
        ]],
        ["Omoide Yokocho", [
          "Memory Lane. The yakitori stalls went up beside the tracks in the years after the war.",
          "The early stalls had no real plumbing, so the lane also picked up the nickname Shonben Yokocho.",
        ]],
      ] },
    ],
  },
  {
    id: "nov25",
    when: "Wed 25",
    date: "Wednesday, November 25",
    name: "Fashion & Shibuya Views",
    place: "Tokyo",
    summary: "Day 6",
    weather: "🌅 Tokyo, usual for late November · about 45–59°F · sunset near 4:30. The daily forecast is not out this far yet.",
    prompt: "What did the city look like, and who were you standing next to?",
    photos: [
      ["photos/p12a.png", "Shibuya Crossing"],
      ["photos/p1-shibuya.jpg", "Shibuya at night"],
    ],
    blocks: [
      { time: "9:30–10:00 AM", kind: "Transit", transit: true, title: "Leave for the facial", detail: "Leave the hotel at 9:30.", pending: "The salon is still to be booked, so the route waits on that address." },
      { time: "10:00 AM–12:00 PM", title: "Glass skin facial", detail: "Two quiet hours.", pending: "Still to be booked." },
      { time: "12:00–12:20 PM", kind: "Transit", transit: true, title: "To Omotesando", detail: "Leave the salon at 12:00. The avenue is next, and the route depends on where the facial is booked." },
      { time: "12:20–3:30 PM", title: "Omotesando and Harajuku", detail: "The wide zelkova avenue, Laforet, and the smaller shops along Cat Street.", fact: [
        ["Omotesando", [
          "The front approach to Meiji Shrine, dedicated in 1920 to Emperor Meiji and Empress Shoken.",
          "The zelkova trees line an avenue laid out like a European boulevard.",
        ]],
      ] },
      { time: "3:30–4:15 PM", kind: "Transit", transit: true, title: "To the Google office", detail: "Leave Harajuku at 3:30. The crossing, then the office.", fact: [
        ["Hachiko", [
          "An Akita who came to Shibuya Station every afternoon to meet Professor Hidesaburo Ueno. Ueno died in 1925. Hachiko kept coming until 1935.",
          "The first statue went up in 1934 and was melted down for the war. The one by the crossing was recast in 1948.",
        ]],
      ] },
      { time: "4:15–6:00 PM", title: "Check out Google office", detail: "The Shibuya office, after the crossing.", fact: [
        ["Google Japan", [
          "Google’s first office outside the United States opened in Tokyo in 2001, when the company was three years old. That was before Gmail, Chrome, and YouTube.",
          "The Shibuya office fills floors 14 through 35 of Shibuya Stream, on the ground where Toyoko Line trains used to run before the tracks went underground in 2013.",
        ]],
      ] },
      { time: "6:00–6:30 PM", kind: "Transit", transit: true, title: "Walk to Dinner", guide: "Walk to Shibuya dinner", detail: "Leave at 6:00. Kaikaya and Nonbei Yokocho are a short walk from the crossing." },
      { time: "6:30 PM on", title: "Dinner in Shibuya", detail: "Walk-in at Kaikaya by the Sea, or skewers in the lanes of Nonbei Yokocho." },
    ],
  },
  {
    id: "nov26",
    when: "Thu 26",
    date: "Thursday, November 26",
    name: "Ginza Exploration",
    place: "Tokyo",
    summary: "Day 7",
    weather: "🧥 Tokyo, usual for late November · about 45–59°F. The daily forecast is not out this far yet.",
    prompt: "What is worth telling your future selves about tonight?",
    photos: [
      ["photos/p13a.png", "A Tokyo market street"],
    ],
    blocks: [
      { time: "8:30–9:00 AM", kind: "Transit", transit: true, title: "Leave for Tsukiji", detail: "Leave the hotel at 8:30. The ride is about 22 minutes, for a 9:00 start in the lanes." },
      { time: "9:00–11:30 AM", title: "Tsukiji outer market", detail: "Morning lanes of grilled seafood, tamagoyaki, and coffee.", star: "Go hungry, carry cash, and leave the big bag at the hotel.", fact: [
        ["Tsukiji", [
          "Edo’s fish market began at Nihonbashi in the early 1600s, after Ieyasu brought fishers in from Osaka.",
          "The 1923 earthquake destroyed that market. Tsukiji opened on reclaimed land in 1935.",
          "The tuna auction moved to Toyosu in October 2018. These outer lanes stayed.",
        ]],
      ] },
      { time: "11:30–11:50 AM", kind: "Transit", transit: true, title: "Walk to Ginza", detail: "Leave the market at 11:30. Ginza is the next neighborhood north, on foot." },
      { time: "11:50 AM–3:00 PM", title: "Ginza", detail: "Ginza Six, Dover Street Market, and the old department stores.", fact: [
        ["Ginza", [
          "The name means silver mint. In 1612 Tokugawa Ieyasu set the shogunate’s silver guild on this street.",
          "After a fire in 1872 the government rebuilt it in brick, with gas lamps, as a showpiece of the new Japan.",
        ]],
      ] },
      { time: "3:00–6:15 PM", kind: "Transit", transit: true, title: "Zojo-ji and Tokyo Tower", detail: "Leave Ginza at 3:00. The temple gate with the tower behind it, then Shiba Park at sunset.", fact: [
        ["Zojo-ji", [
          "Ieyasu made this the Tokugawa family temple in 1598. Six of the shoguns were buried in the grounds.",
          "The main gate, Sangedatsumon, dates from 1622. It is one of the few buildings here that survived the 1945 air raids.",
        ]],
        ["Tokyo Tower", [
          "Opened in 1958 as a broadcast tower and a marker of the recovery. It is 333 meters, built to stand taller than the Eiffel Tower.",
        ]],
      ] },
      { time: "6:15–7:00 PM", kind: "Transit", transit: true, title: "Walk to Dinner", guide: "To Standing Sushi Hiroya", detail: "Leave Tokyo Tower at 6:15 so you are at the counter for 7:00." },
      { time: "7:00 PM", kind: "Booked", meal: true, title: "Standing Sushi Hiroya", detail: "Sushi at the counter. The 7pm reservation is booked.", star: "You stand for the meal. Cancel with 68 hours’ notice if plans change.", fact: [
        ["Edomae sushi", [
          "Nigiri as street food in Edo, often credited to Yohei Hanaya’s stall around 1824.",
          "Edomae means in front of Edo: fish from the bay. It was vinegared so it would keep, and people ate it standing, with their hands.",
        ]],
      ], reserve: [
        ["Reference", "B842-9FFE-9860-1058"],
        ["When", "Thu, Nov 26, 7:00pm"],
        ["Where", "Standing Sushi Hiroya, Minato City, Tokyo 105-0012"],
        ["Cancel", "68 hours ahead"],
        ["Changes", "Contact the restaurant"],
        ["Booked through", "Reserve with Google, via Rakuten Gurunavi"],
      ] },
    ],
  },
  {
    id: "nov27",
    when: "Fri 27",
    date: "Friday, November 27",
    name: "Style & Asakusa Night",
    place: "Tokyo",
    summary: "Day 8",
    weather: "🌆 Tokyo, usual for late November · about 45–59°F · dusk near 4:30. The daily forecast is not out this far yet.",
    prompt: "What feeling you want to remember most?",
    photos: [
      ["photos/p14b.png", "Senso-ji at dusk"],
      ["photos/p14a.png", "Color drapes from the personal color session"],
    ],
    blocks: [
      { time: "9:40–10:00 AM", kind: "Transit", transit: true, title: "Leave for Shimokitazawa", detail: "Leave the hotel at 9:40. The Odakyu ride is about 7 minutes." },
      { time: "10:00 AM–1:15 PM", title: "Shimokitazawa", detail: "A low neighborhood of vintage shops, record stores, and cafes." },
      { time: "1:15–1:45 PM", kind: "Transit", transit: true, title: "To Waseda", detail: "Leave Shimokitazawa at 1:15. A quiet campus neighborhood before the color appointment." },
      { time: "2:15–4:00 PM", kind: "Booked", title: "Personal color analysis", detail: "Best Colors 4 You. Drapes, swatches, and a palette to take home. 2:15pm is booked.", reserve: [
        ["When", "Fri, Nov 27, 2:15pm"],
        ["Place", "Best Colors 4 You, near Waseda"],
        ["Reference", "No confirmation number turned up in the mail."],
      ] },
      { time: "4:00–4:25 PM", kind: "Transit", transit: true, title: "To Asakusa", detail: "Leave Waseda at 4:00. The old east side, temple streets and snack stalls." },
      { time: "4:30–6:35 PM", title: "Senso-ji at dusk", detail: "Nakamise before the stalls close, then the hall lit up for the night.", star: "Shop Nakamise first. Many stalls close by early evening, and the hall stays lit after they do.", fact: [
        ["Senso-ji", [
          "Tokyo’s oldest temple. In 628 two fishermen, the Hinokuma brothers, hauled a statue of Kannon out of the Sumida. It kept returning to the net.",
          "Nakamise, the shop street inside the gate, has been selling to pilgrims since the Edo period.",
          "The precinct burned in the 1945 air raids. Kaminarimon, the Thunder Gate, was rebuilt in 1960.",
        ]],
      ] },
      { time: "6:35–6:45 PM", kind: "Transit", transit: true, title: "Walk to Dinner", guide: "Walk to Unatetsu", detail: "Leave the temple at 6:35. The Asakusa Station store is a short walk, and the table is at 6:45." },
      { time: "6:45 PM", kind: "Booked", meal: true, title: "Asakusa Unatetsu", detail: "Grilled eel near the temple. The 6:45 reservation is booked.", star: "Give 24 hours’ notice if you need to cancel.", fact: [
        ["Unagi", [
          "The summer custom of eating eel on the Day of the Ox is often traced to Hiraga Gennai in the 18th century. He told a slow eel shop to advertise that one day, and the idea stuck.",
        ]],
      ], reserve: [
        ["Reference", "2F74-F564-2F39-882A"],
        ["When", "Fri, Nov 27, 6:45pm"],
        ["Where", "Asakusa Unatetsu, Asakusa Station Main Store, Taito City, Tokyo 111-0033"],
        ["Cancel", "24 hours ahead"],
        ["Booked through", "Reserve with Google, via ebica"],
      ] },
    ],
  },
  {
    id: "nov28",
    when: "Sat 28",
    date: "Saturday, November 28",
    name: "Check Out of Shinjuku",
    place: "Narita",
    summary: "Day 9",
    weather: "🧥 Tokyo, usual for late November · about 45–59°F. The daily forecast is not out this far yet.",
    prompt: "It's the final night! This friendship means the world to me. Cheers to infinite adventures ahead. xo Ria",
    photos: [
      ["photos/p15.jpg", "The torii path"],
    ],
    blocks: [
      { time: "9:15 AM", kind: "Transit", transit: true, title: "Ria to Narita", detail: "Leave Hotel Groove at 9:15. The 1:20pm flight to Korea needs you at Narita with time to spare, and the Narita Express is about 90 minutes from Shinjuku.", reserve: [
        ["Confirmation", "AO5J55"],
        ["Booked through", "Expedia, itinerary 73551897140009"],
        ["Flight", "Korean Air 5704, operated by Asiana"],
        ["When", "Sat, Nov 28, 1:20pm Narita Terminal 1 → 3:55pm Incheon Terminal 2"],
        ["In the air", "2 hours 35 minutes"],
        ["Fare", "Economy, class U"],
      ] },
      { time: "11:00 AM", kind: "Transit", transit: true, title: "Out from the hotel", detail: "Checkout is 11:00am. Shopping stops are still open, so the route waits on the neighborhood you pick." },
      { time: "Daytime", title: "Last Tokyo shopping", detail: "One more pass through the city. Times still follow the flight." },
      { time: "Evening", kind: "Transit", transit: true, title: "Marie at the Narita hotel", guide: "Narita hotel and unagi", detail: "Marie checks in to the Narita hotel and gets ready for the flight home to the US.", star: "The Narita Express needs its own reserved-seat ticket, about 90 minutes from Shinjuku. Buy it before you are on the platform with the bags.", fact: [
        ["Shinjuku Station", [
          "Counted as the busiest railway station in the world.",
        ]],
        ["Narita", [
          "Naritasan Shinsho-ji was founded in 940. A statue of Fudo Myoo was brought from Kyoto during a rebellion in the east, and the temple town grew up around it.",
          "The airport opened in 1978 on farmland the government took over, after years of protest. The Narita Express into the city began in 1991.",
        ]],
      ] },
    ],
  },
];

const yenPerDollar = 158;

const guides = {
  "Walk to Akayashiro": {
    mode: "walking",
    from: "teamLab Biovortex Kyoto",
    to: "Akayashiro 51 Higashikujo Minami-Sannocho Kyoto",
    steps: [
      { title: "On foot", body: "Leave teamLab at 6:00. Akayashiro is in the same Higashikujo neighborhood, south of Kyoto Station. Follow the map and be inside for 6:15." },
    ],
  },
  "Walk to Kiyamachi": {
    mode: "walking",
    from: "Glänta 87 Nakajimacho Kyoto",
    to: "Kiyamachi Street Kyoto",
    steps: [
      { title: "On foot", body: "Leave Glänta at 4:00. Walk south from Sanjo Kawaramachi to the canal along Kiyamachi." },
    ],
  },
  "Walk to the izakaya": {
    mode: "walking",
    from: "The Blossom Kyoto",
    to: "Takakura-dori Gojo Kyoto",
    steps: [
      { title: "On foot", body: "Leave the hotel at 6:45. The counter is on Takakura-dori, a short walk west of the hotel." },
    ],
  },
  "Out into Kabukicho": {
    mode: "walking",
    from: "Hotel Groove Shinjuku",
    to: "Omoide Yokocho Shinjuku",
    steps: [
      { title: "Kabukicho", body: "Leave the room at 5:30. The neon streets are outside Tokyu Kabukicho Tower." },
      { title: "Omoide Yokocho", body: "The west exit of Shinjuku Station, on foot from the hotel." },
    ],
  },
  "Leave for the facial": {
    maps: false,
    steps: [
      { title: "Once the salon is booked", body: "Leave Hotel Groove at 9:30. Put the salon address into Google Maps from the hotel. Nothing is booked yet, so there is no line to memorize.", pending: true },
    ],
  },
  "To Omotesando": {
    maps: false,
    steps: [
      { title: "From the salon", body: "Leave at 12:00. Open the map from the salon address to Omotesando. The route depends on where the facial is booked.", pending: true },
    ],
  },
  "Walk to Shibuya dinner": {
    mode: "walking",
    from: "Shibuya Stream",
    to: "Nonbei Yokocho Shibuya",
    steps: [
      { title: "On foot", body: "Leave at 6:00. Nonbei Yokocho is a few minutes from the crossing. Kaikaya by the Sea is a little farther, so follow the map for whichever you pick." },
    ],
  },
  "Walk to Ginza": {
    mode: "walking",
    from: "Tsukiji Outer Market",
    to: "Ginza Station",
    steps: [
      { title: "On foot", body: "Leave the market at 11:30. Walk north into Ginza. No train for this hop." },
    ],
  },
  "To Standing Sushi Hiroya": {
    mode: "walking",
    from: "Tokyo Tower",
    to: "Standing Sushi Hiroya Tokyo",
    steps: [
      { title: "From the tower", body: "Leave Tokyo Tower at 6:15. The restaurant is in Minato, near Hamamatsucho. Use the map for the walk or a short taxi, and be at the counter by 7:00." },
    ],
  },
  "Walk to Unatetsu": {
    mode: "walking",
    from: "Senso-ji",
    to: "Asakusa Unatetsu Asakusa Station",
    steps: [
      { title: "On foot", body: "Leave the hall at 6:35. The Asakusa Station store is a short walk, and the table is at 6:45." },
    ],
  },
  "Ria to Narita": {
    mode: "transit",
    from: "Hotel Groove Shinjuku",
    to: "Narita Airport",
    steps: [
      { title: "Leave at 9:15", body: "Walk to Shinjuku Station with the bags. The Narita Express needs its own reserved-seat ticket, so buy it before you are on the platform." },
      { title: "Narita Express", body: "About 90 minutes from Shinjuku to Narita Airport. Leaving at 9:15 puts you there around 11:00, ahead of the 1:20pm flight to Korea." },
    ],
  },
  "Out from the hotel": {
    maps: false,
    steps: [
      { title: "Checkout", body: "Leave Hotel Groove at 11:00am. Shopping stops are still open, so set the map from the hotel once you pick the neighborhood." },
    ],
  },
  "Haruka to Kyoto": {
    mode: "transit",
    from: "Kansai International Airport",
    to: "Kyoto Station",
    steps: [
      { title: "To the train", body: "Kansai Airport Station is inside the airport. Follow the signs for the Haruka to Kyoto." },
      { title: "The ride", body: "About 1 hour 20 minutes to Kyoto. Reserved seat.", fare: 3790 },
      { title: "Ticket", body: "Buy the reserved-seat Haruka ticket before the platform. An IC card alone does not cover the limited express." },
      { title: "Platform", body: "The track is posted at Kansai Airport Station. Follow the board for the Haruka to Kyoto." },
    ],
  },
  "Nozomi 29 to Kyoto": {
    mode: "transit",
    from: "Shinagawa Station",
    to: "Kyoto Station",
    steps: [
      { title: "Nozomi 29", body: "Series N700, 16 cars. Shinagawa to Kyoto, 2 hours 7 minutes. Reservation 2007. Car 14." },
      { title: "Where to look for Fuji", body: "Facing Kyoto, Fuji is on the left." },
      { title: "Platform", body: "Car numbers are painted along the platform. The track can change, so follow the board for Nozomi 29 rather than a memorized track. You want car 14." },
    ],
  },
  "Kyoto Station to the hotel": {
    mode: "transit",
    from: "Kyoto Station",
    to: "The Blossom Kyoto",
    steps: [
      { title: "Karasuma line", body: "Toward Kokusaikaikan. Gojo is the next stop.", fare: 220 },
      { title: "Walk", body: "With luggage, take the elevator at Exit 6. That walk is about 6 minutes. Exit 1 is stairs and about 2 minutes east, with the hotel on the left." },
    ],
  },
  "Walk to teamLab": {
    mode: "walking",
    from: "The Blossom Kyoto",
    to: "teamLab Biovortex Kyoto",
    steps: [
      { title: "On foot", body: "About 15 minutes south from the hotel toward the Hachijo side of Kyoto Station." },
      { title: "Taxi", body: "About 5 minutes if the walk feels like too much with bags.", fare: 800 },
    ],
  },
  "Leave for Fushimi Inari": {
    mode: "transit",
    from: "The Blossom Kyoto",
    to: "Fushimi Inari Taisha",
    steps: [
      { title: "Walk", body: "About 7 minutes from the hotel to Keihan Kiyomizu-Gojo. This is the Keihan station, a different Gojo from the subway." },
      { title: "Keihan line", body: "Southbound. The sign says Yodoyabashi or Hirakatashi. Get off at Fushimi-Inari, about 5 minutes, then walk up to the torii.", fare: 220 },
    ],
  },
  "Leave for Kiyomizu-dera": {
    mode: "transit",
    from: "Fushimi-Inari Station",
    to: "Kiyomizu-dera",
    steps: [
      { title: "Keihan line", body: "Back north. The sign says Demachiyanagi. Get off at Kiyomizu-Gojo.", fare: 220 },
      { title: "Walk up", body: "From the station, walk up through Ninenzaka and Sannenzaka to the temple. Leave this area at 12:40." },
    ],
  },
  "Walk down into Gion": {
    mode: "walking",
    from: "Kiyomizu-dera",
    to: "Wabiya Korekido Hanamikoji",
    steps: [
      { title: "Downhill walk", body: "About 20 minutes from the temple lanes down into Gion, to Hanamikoji just south of Shijo. The extra time is the buffer so you are inside at 1:30." },
    ],
  },
  "Gion, then walk to Glänta": {
    mode: "walking",
    from: "Wabiya Korekido Hanamikoji",
    to: "Glänta 87 Nakajimacho Kyoto",
    steps: [
      { title: "Walk north", body: "About 15 minutes from Hanamikoji up toward Sanjo and the Kamogawa. Glänta is at 87 Nakajimacho." },
      { title: "If you arrive by train instead", body: "Keihan or Tozai Sanjo is Exit 6. Hankyu Kawaramachi is East Exit 3." },
    ],
  },
  "Train to Arashiyama": {
    mode: "transit",
    from: "The Blossom Kyoto",
    to: "Saga-Arashiyama Station",
    steps: [
      { title: "Walk", body: "Exit 1, without luggage. About 2 minutes to subway Gojo." },
      { title: "Karasuma line", body: "Toward Takeda. Kyoto Station is the next stop." },
      { title: "JR Sagano line", body: "From Kyoto to Saga-Arashiyama. The whole ride is about 25 minutes.", fare: 420 },
    ],
  },
  "Riverside lunch and the train back": {
    mode: "transit",
    from: "Saga-Arashiyama Station",
    to: "The Blossom Kyoto",
    steps: [
      { title: "JR Sagano line", body: "Saga-Arashiyama back to Kyoto Station." },
      { title: "Karasuma line", body: "From Kyoto Station one stop to Gojo. Exit 1, without luggage, then about 2 minutes to the hotel.", fare: 420 },
    ],
  },
  "Taxi to Higashiyama": {
    mode: "driving",
    from: "The Blossom Kyoto",
    to: "Kodaiji Kiwami 400-1 Kinencho",
    steps: [
      { title: "Taxi", body: "About 10 minutes to 400-1 Kinencho, for the 8pm kaiseki.", fare: 1200 },
    ],
  },
  "Kyoto to Osaka": {
    mode: "transit",
    from: "The Blossom Kyoto",
    to: "Osaka Station",
    steps: [
      { title: "Walk", body: "Exit 1, without luggage. About 2 minutes to subway Gojo." },
      { title: "Karasuma line", body: "Toward Takeda. Kyoto Station is one stop." },
      { title: "JR Special Rapid", body: "Kyoto to Osaka-Umeda, about 28 minutes. Stay on until Osaka.", fare: 570 },
    ],
  },
  "Umeda to Dotonbori": {
    mode: "transit",
    from: "Osaka-Umeda Station",
    to: "Namba Station",
    steps: [
      { title: "Midosuji line", body: "From Osaka-Umeda toward Nakamozu or Tennoji. Namba is about 8 minutes. The northbound sign says Senri-Chuo, which is the wrong way.", fare: 240 },
    ],
  },
  "Back to Kyoto": {
    mode: "transit",
    from: "Yodoyabashi Station",
    to: "The Blossom Kyoto",
    steps: [
      { title: "Keihan limited express", body: "From Yodoyabashi toward Demachiyanagi. Get off at Kiyomizu-Gojo, about 45 minutes.", fare: 430 },
      { title: "Walk", body: "About 7 minutes from Kiyomizu-Gojo to the hotel." },
    ],
  },
  "Checkout and Kyoto Station": {
    mode: "transit",
    from: "The Blossom Kyoto",
    to: "Kyoto Station",
    steps: [
      { title: "Walk", body: "With luggage, take the elevator at Exit 6. About 6 minutes to subway Gojo." },
      { title: "Karasuma line", body: "Toward Takeda. Kyoto Station is one stop.", fare: 220 },
      { title: "Shinkansen platform", body: "Car numbers are painted along the platform. The track can change, so follow the board for Nozomi 250 rather than a memorized track. You want car 14." },
    ],
  },
  "Nozomi 250 to Shinagawa": {
    mode: "transit",
    from: "Kyoto Station",
    to: "Shinagawa Station",
    seat: true,
    steps: [
      { title: "Nozomi 250", body: "Series N700, 16 cars. Kyoto to Shinagawa, 2 hours 8 minutes. Reservation 2001. Car 14, seats 20A and 20B." },
      { title: "Where to look for Fuji", body: "Facing Tokyo, 20A is the left window and 20B is the left aisle. Mount Fuji is on the right side of the train, around 1:10pm, so it is across the aisle from your seats." },
    ],
  },
  "Shinagawa to Shinjuku": {
    mode: "transit",
    from: "Shinagawa Station",
    to: "Shinjuku Station",
    steps: [
      { title: "Yamanote line", body: "Inner loop, marked 内回り. It goes Shinagawa, Shibuya, then Shinjuku, about 19 minutes. The other loop goes the long way around Tokyo Station.", fare: 210 },
      { title: "Hotel Groove", body: "Leave by the east exit, toward Kabukicho. About 7 minutes into Tokyu Kabukicho Tower. Reception is on 18F." },
    ],
  },
  "To the Google office": {
    mode: "transit",
    from: "Harajuku Station",
    to: "Shibuya Stream",
    steps: [
      { title: "On foot", body: "About 15 minutes down Cat Street into Shibuya." },
      { title: "Yamanote line", body: "From Harajuku, one stop on the inner loop, 内回り, to Shibuya. About 2 minutes.", fare: 150 },
    ],
  },
  "Leave for Tsukiji": {
    mode: "transit",
    from: "Shinjuku Station",
    to: "Tsukiji Station",
    steps: [
      { title: "Marunouchi line", body: "From Shinjuku toward Ikebukuro. Change at Ginza." },
      { title: "Hibiya line", body: "Toward Kita-Senju. Tsukiji is the stop. The ride is about 22 minutes.", fare: 210 },
    ],
  },
  "Zojo-ji and Tokyo Tower": {
    mode: "transit",
    from: "Ginza Station",
    to: "Tokyo Tower",
    steps: [
      { title: "Toei Asakusa line", body: "Walk over to Higashi-Ginza. Take the Asakusa line toward Nishi-Magome. Daimon is the stop after Shimbashi, about 6 minutes.", fare: 180 },
      { title: "Walk", body: "Zojo-ji and Shiba Park are outside Daimon, then Tokyo Tower." },
    ],
  },
  "Leave for Shimokitazawa": {
    mode: "transit",
    from: "Shinjuku Station",
    to: "Shimokitazawa Station",
    steps: [
      { title: "Odakyu line", body: "A local or semi-express toward Odawara or Katase-Enoshima. Shimokitazawa is about 7 minutes. The Romancecar does not stop there.", fare: 170 },
    ],
  },
  "To Waseda": {
    mode: "transit",
    from: "Shimokitazawa Station",
    to: "Waseda Station",
    steps: [
      { title: "Odakyu line", body: "Back toward Shinjuku." },
      { title: "Tozai line", body: "Change and ride to Waseda. From Takadanobaba it is one stop toward Nishi-Funabashi. About 22 minutes in all.", fare: 280 },
    ],
  },
  "To Asakusa": {
    mode: "transit",
    from: "Waseda Station",
    to: "Asakusa Station",
    steps: [
      { title: "Tozai line", body: "From Waseda toward Nishi-Funabashi. Change at Nihombashi." },
      { title: "Ginza line", body: "Toward Asakusa. Asakusa is the last stop, about 22 minutes from Waseda.", fare: 250 },
    ],
  },
  "Narita hotel and unagi": {
    mode: "transit",
    from: "Hotel Groove Shinjuku",
    to: "Narita Airport",
    steps: [
      { title: "Narita Express", body: "From Shinjuku, about 90 minutes to Narita. It needs its own reserved-seat ticket. Buy it before you are on the platform with the bags." },
    ],
  },
};

function dollars(yen) {
  const amount = yen / yenPerDollar;
  return `$${amount.toFixed(2)}`;
}

function mapsUrl(guide) {
  const params = new URLSearchParams({
    api: "1",
    origin: guide.from,
    destination: guide.to,
    travelmode: guide.mode,
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

function timesHtml(cell) {
  if (!cell.times) return "";
  const rows = cell.times
    .map(
      ([when, detail, tip]) => `
        <li>
          <span>${escapeHtml(when)}</span> ${escapeHtml(detail)}
          ${tip ? `<em class="star">Tip: ${escapeHtml(tip)}</em>` : ""}
        </li>`
    )
    .join("");
  return `<ul class="alt-times">${rows}</ul>`;
}

function cellHtml(cell) {
  if (!cell) return "";
  if (typeof cell === "string") return escapeHtml(cell);
  const block = { guide: cell.guide, reserve: cell.reserve };
  const guide = cell.guide ? guideHtml(block) : "";
  return `
    <p>${escapeHtml(cell.text || "")}</p>
    ${cell.times ? guide : ""}
    ${timesHtml(cell)}
    ${cell.note ? `<p>${escapeHtml(cell.note)}</p>` : ""}
    ${cell.star ? `<p class="star">Tip: ${escapeHtml(cell.star)}</p>` : ""}
    ${reserveHtml(block)}
    ${cell.times ? "" : guide}`;
}

function parallelHtml(block) {
  if (!block.parallel) return "";
  const rows = block.parallel
    .map(
      ([when, ria, marie]) => {
        const shared = ria && typeof ria === "object" && ria.span;
        const cells = shared
          ? `<td colspan="2">${cellHtml(ria)}</td>`
          : `<td>${cellHtml(ria)}</td><td>${cellHtml(marie)}</td>`;
        return `
        <tr>
          <th scope="row">${escapeHtml(when)}</th>
          ${cells}
        </tr>`;
      }
    )
    .join("");
  return `
    <div class="split-wrap">
      <table class="split">
        <thead>
          <tr>
            <th scope="col">When</th>
            <th scope="col">Ria</th>
            <th scope="col">Marie</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function guideHtml(block) {
  const guide = guides[block.guide || block.title];
  if (!guide) return "";
  const steps = guide.steps
    .map(
      (step) => `
        <li>
          <h4>${escapeHtml(step.title)}</h4>
          <p class="${step.pending ? "pending" : ""}">${escapeHtml(step.body)}${step.fare ? ` <span class="fare">¥${step.fare} · about ${dollars(step.fare)}</span>` : ""}</p>
        </li>`
    )
    .join("");
  const seats = guide.seat
    ? `<div class="seat-map" aria-hidden="true"><span>Window</span><b>20A</b><b>20B</b><span class="aisle">Aisle</span><span class="fuji">Fuji side</span></div>`
    : "";
  return `
    <details class="guide">
      <summary>How to get there</summary>
      <ol>${steps}</ol>
      ${seats}
      ${guide.maps === false ? "" : `<a href="${mapsUrl(guide)}" target="_blank" rel="noopener">Open in Google Maps</a>`}
    </details>`;
}

function reserveHtml(block) {
  const groups = [];
  if (block.reserve) groups.push({ summary: "Reservation", rows: block.reserve });
  if (block.reserves) groups.push(...block.reserves);
  if (!groups.length) return "";
  return groups
    .map((group) => {
      const rows = group.rows
        .map(
          ([label, value]) => `
        <li>
          <h4>${escapeHtml(label)}</h4>
          <p>${escapeHtml(value)}</p>
        </li>`
        )
        .join("");
      return `
    <details class="guide reserve">
      <summary>${escapeHtml(group.summary)}</summary>
      <ol>${rows}</ol>
    </details>`;
    })
    .join("");
}

const storageKey = "japan26-journal";
const secretKey = "japan26-secret-until";
const secretUntil = 1794119035360;
const revealAt = Date.parse("2026-11-20T18:15:00+09:00");

function feliciaVisible() {
  if (Date.now() >= revealAt) return true;
  if (Date.now() < secretUntil) return true;
  const until = Number(localStorage.getItem(secretKey) || 0);
  return until > Date.now();
}

const state = {
  dayId: "nov20",
  entered: false,
  dayOpen: false,
  tab: "before",
  author: "Ria",
  draft: "",
  entries: loadEntries(),
  journalNote: "",
  strips: {},
  boothNote: "",
  freshStrip: "",
  editingId: "",
};

function loadEntries() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
    Object.values(saved).forEach((list) => {
      list.forEach((entry) => {
        if (!entry.id) entry.id = crypto.randomUUID();
      });
    });
    return saved;
  } catch {
    return {};
  }
}

function rememberEntries() {
  localStorage.setItem(storageKey, JSON.stringify(state.entries));
}

function applyEntries(data) {
  state.entries = data && typeof data === "object" && !Array.isArray(data) ? data : {};
  rememberEntries();
}

async function pullEntries() {
  const response = await fetch(new URL("api/journal", document.baseURI), { cache: "no-store" });
  if (!response.ok) throw new Error("journal");
  applyEntries(await response.json());
}

async function sendJournal(method, body) {
  const response = await fetch(new URL("api/journal", document.baseURI), {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("journal");
  applyEntries(await response.json());
  state.journalNote = "";
}

async function syncJournal() {
  try {
    await pullEntries();
  } catch {
    state.journalNote = "These notes are on this phone until the link is open again.";
  }
}

function stamp(ms) {
  return new Date(ms).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function dayTitle(item) {
  if (!item.birthday) return item.name;
  const stars = "<i></i>".repeat(8);
  const balloon = `<span class="balloon-wrap"><span class="balloon" aria-label="30th">30<sup>th</sup></span></span>`;
  return `<span class="bday-title"><span class="confetti" aria-hidden="true">${stars}</span>${item.name.replace("30th", balloon)}</span>`;
}

const phrases = [
  ["Say hello", [
    ["こんにちは", "konnichiwa", "Hello"],
    ["ありがとうございます", "arigatou gozaimasu", "Thank you"],
    ["すみません", "sumimasen", "Excuse me, or sorry"],
    ["お願いします", "onegai shimasu", "Please"],
  ]],
  ["At the table", [
    ["これください", "kore kudasai", "This, please"],
    ["いくらですか", "ikura desu ka", "How much?"],
    ["二人です", "futari desu", "Two people"],
    ["水をください", "mizu o kudasai", "Water, please"],
    ["おいしいです", "oishii desu", "This is delicious"],
    ["お会計お願いします", "okaikei onegai shimasu", "The check, please"],
    ["いただきます", "itadakimasu", "Said before you eat"],
    ["ごちそうさまでした", "gochisousama deshita", "Said after the meal"],
  ]],
  ["Finding your way", [
    ["トイレはどこですか", "toire wa doko desu ka", "Where is the bathroom?"],
    ["駅はどこですか", "eki wa doko desu ka", "Where is the station?"],
    ["わかりません", "wakarimasen", "I don’t understand"],
    ["英語は話せますか", "eigo wa hanasemasu ka", "Do you speak English?"],
    ["大丈夫です", "daijoubu desu", "It’s all right"],
  ]],
];

function phraseSheet() {
  return `
    <form class="translator">
      <div class="direction">
        <button type="button" data-dir="en" aria-pressed="true">English → Japanese</button>
        <button type="button" data-dir="ja" aria-pressed="false">Japanese → English</button>
      </div>
      <label>
        <span data-prompt>English</span>
        <textarea name="line" rows="2" placeholder="Type in English"></textarea>
      </label>
      <button type="submit">Translate</button>
      <div class="translation" hidden>
        <button type="button" class="hear-line">
          <span class="jp" data-japanese></span>
          <span class="hear-note">Tap to hear</span>
        </button>
        <p data-english></p>
      </div>
    </form>
    <div class="phrases">
      ${phrases
        .map(
          ([group, lines]) => `
        <h3>${group}</h3>
        <ul>
          ${lines
            .map(
              ([jp, say, mean]) => `
            <li>
              <button type="button" class="say-phrase" data-speak="${escapeHtml(jp)}">
                <span class="jp">${jp}</span>
                <span class="say">${say}</span>
                <span class="mean">${mean}</span>
              </button>
            </li>`
            )
            .join("")}
        </ul>`
        )
        .join("")}
    </div>`;
}

function speakLine(text, lang) {
  if (!text || !window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = lang.startsWith("ja") ? 0.85 : 0.95;
  const voices = speechSynthesis.getVoices();
  const voice = voices.find((item) => item.lang.toLowerCase().replace("_", "-").startsWith(lang.slice(0, 2).toLowerCase()));
  if (voice) utter.voice = voice;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function bindPhrases(app) {
  const form = app.querySelector(".translator");
  if (!form) return;
  if (window.speechSynthesis) speechSynthesis.getVoices();
  app.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speakLine(button.dataset.speak, "ja-JP"));
  });
  const field = form.querySelector("textarea");
  const result = form.querySelector(".translation");
  const japanese = form.querySelector("[data-japanese]");
  const english = form.querySelector("[data-english]");
  const prompt = form.querySelector("[data-prompt]");
  let direction = "en";
  form.querySelectorAll("[data-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      direction = button.dataset.dir;
      form.querySelectorAll("[data-dir]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      prompt.textContent = direction === "en" ? "English" : "Japanese";
      field.placeholder = direction === "en" ? "Type in English" : "日本語を入力";
      result.hidden = true;
    });
  });
  form.querySelector(".hear-line").addEventListener("click", () => {
    const line = japanese.dataset.speak;
    if (line) speakLine(line, "ja-JP");
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = field.value.trim();
    if (!text) return;
    const source = direction === "en" ? "en" : "ja";
    const target = direction === "en" ? "ja" : "en";
    result.hidden = false;
    delete japanese.dataset.speak;
    japanese.textContent = "Translating…";
    english.textContent = "";
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`
      );
      if (!response.ok) throw new Error("translate");
      const data = await response.json();
      const line = data[0].map((part) => part[0]).join("");
      const spoken = direction === "en" ? line : text;
      japanese.textContent = spoken;
      japanese.dataset.speak = spoken;
      english.textContent = direction === "en" ? text : line;
    } catch {
      japanese.textContent = "That didn’t translate.";
      english.innerHTML = `<a href="https://translate.google.com/?sl=${source}&tl=${target}&text=${encodeURIComponent(text)}&op=translate" target="_blank" rel="noopener">Open this in Google Translate</a>`;
    }
  });
}

const prepChecksKey = "japan26-prep";
const sudokuKey = "japan26-sudoku";
const sudokuKinds = ["Top", "Bottom", "Layer", "Bottom", "Layer", "Top", "Layer", "Top", "Bottom"];
const sudokuLines = [
  ["Row 1", "0,1,2"],
  ["Row 2", "3,4,5"],
  ["Row 3", "6,7,8"],
  ["Column 1", "0,3,6"],
  ["Column 2", "1,4,7"],
  ["Column 3", "2,5,8"],
];
const prepGroups = [
  ["Digital + cash", [
    ["visit", "Visit Japan Web — complete immigration and customs declarations online; save the QR code for arrival."],
    ["ic", "IC card — add Suica to Apple Wallet; load ¥6,000 ($37.97) for trains and convenience stores."],
    ["cash", "Yen cash — hold off on withdrawing cash. A card has covered everything."],
  ]],
  ["Tech + power", [
    ["battery", "Power bank — pack a 10,000 mAh+ battery for navigation and photos."],
    ["adapter", "Type A adapters — bring dual-prong cables for Japan’s 100V outlets."],
  ]],
  ["Daypack + transit", [
    ["daypack", "Travel daypack — a lightweight bag for Shinkansen days during luggage transfer."],
    ["shoes", "Comfortable sneakers — essential for 15k+ steps and shoe-free tatami venues."],
    ["coins", "Cash Wallet + Coin pouch — contain yen change from cash payments and vending machines."],
    ["tote", "Shopping tote — for food halls and shopping in Omotesandō and Shimokitazawa."],
  ]],
  ["Personal care", [
    ["skin", "Hydrating skincare — lip balm, moisturizer, and a travel-size hydration spray."],
    ["meds", "Prescriptions + vitamins — keep them in original containers in your carry-on."],
    ["towel", "Hand wipes / hand towel — many public restrooms do not provide paper towels."],
  ]],
];

function icEstimate() {
  const rides = [
    ["Fri 20", "Kyoto Station to Gojo", 220],
    ["Sat 21", "Keihan to Fushimi Inari and back", 440],
    ["Sun 22", "Subway both ways, Sagano line both ways", 1280],
    ["Mon 23", "To Osaka, Midosuji, Keihan home", 1460],
    ["Tue 24", "To Kyoto Station, Yamanote to Shinjuku", 430],
    ["Thu 26", "Shinjuku to Tsukiji, Ginza to Daimon", 390],
    ["Fri 27", "Shimokitazawa, Waseda, then Asakusa", 700],
  ];
  const total = rides.reduce((sum, ride) => sum + ride[2], 0);
  return `
    <details class="ic-estimate">
      <summary>See our cost estimate</summary>
      <p>These are the local rides already in the plan, one card each. Load about ¥6,000 (${dollars(6000)}) so the card also covers a convenience-store tap and the rides back to the hotel that are not written in.</p>
      <ul>
        ${rides
          .map(
            ([day, ride, yen]) => `
          <li><span>${day}</span><span>${ride}</span><span>¥${yen.toLocaleString("en-US")}</span></li>`
          )
          .join("")}
      </ul>
      <p class="total"><span>Total</span><span>¥${total.toLocaleString("en-US")} (${dollars(total)})</span></p>
      <p>Harajuku to Shibuya is another ¥150 if you take the train instead of walking. The Haruka, both Nozomi tickets, and the Narita Express are their own tickets, not this card.</p>
    </details>`;
}

function loadPrepChecks() {
  try {
    return JSON.parse(localStorage.getItem(prepChecksKey)) || {};
  } catch {
    return {};
  }
}

function loadSudoku() {
  try {
    const saved = JSON.parse(localStorage.getItem(sudokuKey));
    if (Array.isArray(saved) && saved.length === 9) return saved;
  } catch {}
  return Array(9).fill("");
}

function prepSheet() {
  const checks = loadPrepChecks();
  const pieces = loadSudoku();
  const checklist = (groups) =>
    groups
      .map(
        ([title, items]) => `
      <h3>${title}</h3>
      <ul class="check-list">
        ${items
          .map(
            ([id, text]) => `
          <li>
            <label class="check">
              <input type="checkbox" data-prep="${id}" ${checks[id] ? "checked" : ""}>
              <span>${escapeHtml(text)}</span>
            </label>
            ${id === "ic" ? icEstimate() : ""}
          </li>`
          )
          .join("")}
      </ul>`
      )
      .join("");
  return `
    <section class="prep">
      <h2>Before you go</h2>
      <h3>Pre-travel prep</h3>
      ${checklist(prepGroups.slice(0, 2))}
      <h3>Packing list</h3>
      ${checklist(prepGroups.slice(2))}
      <h3>Sudoku packing</h3>
      <p class="sudoku-note">Nine pieces: three tops, three bottoms, three layers. A piece stays only if it works with the others in its row and its column. Each line is an outfit. Late November is about 45–60°F, so one of the layers is a wool coat or a mid-weight jacket.</p>
      <div class="sudoku">
        ${sudokuKinds
          .map(
            (kind, index) => `
          <label>${kind}
            <input data-sudoku="${index}" value="${escapeHtml(pieces[index])}" placeholder="${kind}">
          </label>`
          )
          .join("")}
      </div>
      <ul class="outfits">
        ${sudokuLines
          .map(([label, indexes]) => {
            const parts = indexes.split(",").map((index) => pieces[Number(index)].trim()).filter(Boolean);
            return `<li data-outfit="${indexes}"><b>${label}</b><span>${parts.length ? escapeHtml(parts.join(" · ")) : "—"}</span></li>`;
          })
          .join("")}
      </ul>
    </section>`;
}

function bindPrep(app) {
  const root = app.querySelector(".prep");
  if (!root) return;
  root.querySelectorAll("[data-prep]").forEach((box) => {
    box.addEventListener("change", () => {
      const saved = loadPrepChecks();
      saved[box.dataset.prep] = box.checked;
      localStorage.setItem(prepChecksKey, JSON.stringify(saved));
    });
  });
  const inputs = [...root.querySelectorAll("[data-sudoku]")];
  const paint = () => {
    const values = inputs.map((input) => input.value.trim());
    localStorage.setItem(sudokuKey, JSON.stringify(inputs.map((input) => input.value)));
    root.querySelectorAll("[data-outfit]").forEach((row) => {
      const parts = row.dataset.outfit.split(",").map((index) => values[Number(index)]).filter(Boolean);
      row.querySelector("span").textContent = parts.length ? parts.join(" · ") : "—";
    });
  };
  inputs.forEach((input) => input.addEventListener("input", paint));
}

const tabs = [
  ["before", "Before you go"],
  ["itinerary", "Itinerary"],
  ["phrases", "Translate"],
  ["booth", "Photobooth"],
  ["journal", "Journal"],
];

function dayChips() {
  return `
    <div class="day-chips">
      ${days
        .map(
          (item) =>
            `<button type="button" data-chip="${item.id}" aria-pressed="${item.id === state.dayId}">${item.when}</button>`
        )
        .join("")}
    </div>`;
}

function factHtml(block) {
  if (!block.fact) return "";
  const groups = block.fact
    .map(
      ([topic, points]) => `
        <h4>${escapeHtml(topic)}</h4>
        <ul>
          ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>`
    )
    .join("");
  return `<details class="guide fact"><summary>Fun fact</summary>${groups}</details>`;
}

function japanCountdown() {
  const start = new Date(2026, 10, 20);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const days = Math.round((start.getTime() - today.getTime()) / 86400000);
  if (days > 1) return `${days} days till we meet in Japan!`;
  if (days === 1) return "1 day till we meet in Japan!";
  if (days === 0) return "We meet in Japan today!";
  return "Japan!";
}

function render() {
  const day = days.find((item) => item.id === state.dayId) || days[0];
  const revealed = feliciaVisible();
  if (!revealed && state.author === "Felicia") state.author = "Ria";
  const authors = revealed ? ["Ria", "Marie", "Felicia"] : ["Ria", "Marie"];
  const entries = (state.entries[day.id] || [])
    .filter((entry) => revealed || entry.author !== "Felicia")
    .slice()
    .sort((a, b) => (a.created || 0) - (b.created || 0));
  const app = document.querySelector("#app");
  if (!state.entered) {
    app.className = "app is-intro";
    app.innerHTML = `
      <button class="intro" type="button" data-enter>
        <div class="intro-copy">
          <p class="kicker">November 2026</p>
          <h1>Japan</h1>
          <p class="kicker">Kyoto · Osaka · Tokyo</p>
          <p class="quote">celebration of life, friendship &amp; adventures<br>all over the world.</p>
        </div>
      </button>`;
    app.querySelector("[data-enter]").addEventListener("click", () => {
      state.entered = true;
      render();
    });
    return;
  }
  app.className = state.dayOpen ? "app day-open" : "app is-home";
  const cover = `
      <div class="cover">
        <img src="photos/p6a.png" alt="A Kyoto lane at dusk, with the pagoda above the roofs">
        ${revealed ? `<img class="cover-people cover-group" src="photos/reveal-cutout.png" alt="Ria, Marie, and Felicia">` : ""}
        <img class="cover-people" src="photos/p1-portrait.png" alt="Ria and Marie">
        <div class="cover-copy">
          <p class="countdown" data-countdown>${japanCountdown()}</p>
        </div>
      </div>`;
  const stripFigure = (strip) => `
          <figure class="strip${strip.id === state.freshStrip ? " is-printing" : ""}">
            <ol>
              ${strip.frames
                .map(
                  (src, index) => `
                <li>
                  <img src="${src}" alt="">
                  <button type="button" class="save" data-save-frame="${strip.id}" data-frame="${index}">Save</button>
                </li>`
                )
                .join("")}
            </ol>
            <figcaption>${escapeHtml(strip.caption)}${strip.created ? ` · ${escapeHtml(stamp(strip.created))}` : ""}</figcaption>
            <div class="strip-actions">
              <button type="button" class="save" data-save-strip="${strip.id}">Save to phone</button>
              <button type="button" data-strip="${strip.id}" data-strip-day="${strip.dayId}">Remove</button>
            </div>
          </figure>`;
  const journal = `
      <section class="journal">
        <h2>Journal</h2>
        ${dayChips()}
        <p class="summary">${day.prompt}</p>
        <div class="authors">
          ${authors
            .map(
              (name) =>
                `<button type="button" data-author="${name}" aria-pressed="${state.author === name}">${name}</button>`
            )
            .join("")}
        </div>
        ${
          entries.length
            ? `<ul class="entries">${entries
                .map((entry) => {
                  const editing = state.editingId === entry.id;
                  return `
              <li>
                <span class="who">${escapeHtml(entry.author)}</span>${entry.created ? `<time class="when">${escapeHtml(stamp(entry.created))}</time>` : ""}
                ${
                  editing
                    ? `<form class="entry-edit">
                  <textarea name="text">${escapeHtml(entry.text)}</textarea>
                  <button type="submit">Save</button>
                  <button type="button" data-cancel-edit>Cancel</button>
                </form>`
                    : `<p>${escapeHtml(entry.text)}</p>
                <div class="entry-actions">
                  <button type="button" data-edit-entry="${entry.id}">Edit</button>
                  <button type="button" data-remove-entry="${entry.id}">Remove</button>
                </div>`
                }
              </li>`;
                })
                .join("")}</ul>`
            : `<p class="empty">Nothing written on this day yet.</p>`
        }
        <form class="composer">
          <textarea name="note" placeholder="${escapeHtml(day.prompt)}">${escapeHtml(state.draft)}</textarea>
          <button type="submit">Add ${state.author}’s note</button>
        </form>
        ${state.journalNote ? `<p class="empty">${escapeHtml(state.journalNote)}</p>` : ""}
      </section>`;
  const panels = {
    before: prepSheet(),
    itinerary: `
      <h2>Itinerary</h2>
      <ul class="day-nav">
        ${days
          .map(
            (item) => `
          <li class="${item.birthday ? "is-birthday" : ""}">
            <button type="button" data-day="${item.id}" ${item.id === day.id ? 'aria-current="true"' : ""}>
              <span class="day-when">${item.when}</span>
              <span>
                <span class="day-name">${dayTitle(item)}</span>
                <span class="day-place">${item.place}</span>
              </span>
            </button>
          </li>`
          )
          .join("")}
      </ul>`,
    phrases: `<h2>Translate</h2>${phraseSheet()}`,
    booth: `
      <section class="booth-day">
        <h2>Photobooth</h2>
        ${dayChips()}
        <button class="booth-open" type="button" data-booth-open>Open the booth</button>
        ${state.boothNote ? `<p class="empty">${escapeHtml(state.boothNote)}</p>` : ""}
        ${days
          .map((item) => (state.strips[item.id] || []).map(stripFigure).join(""))
          .join("")}
      </section>`,
    journal,
  };
  if (!state.dayOpen) {
    app.innerHTML = `
    <div class="home">
      ${cover}
      <div class="tabs" role="tablist">
        ${tabs
          .map(
            ([id, label]) =>
              `<button type="button" role="tab" data-tab="${id}" aria-selected="${state.tab === id}">${label}</button>`
          )
          .join("")}
      </div>
      <div class="panel">${panels[state.tab] || panels.before}</div>
    </div>`;
    bindHome(app, day);
    return;
  }
  app.innerHTML = `
    <main class="main">
      <div class="main-top">
        <p class="day-date">${day.date}</p>
        <button class="back" type="button" data-close>Home</button>
      </div>
      <h2>${dayTitle(day)}</h2>
      <p class="summary">${day.summary}</p>
      ${day.weather ? `<p class="weather">${escapeHtml(day.weather)}</p>` : ""}
      ${
        day.photos
          ? `<div class="frames frames-${day.photos.length}${day.photos.some((photo) => photo[2] === "full") ? " has-full" : ""}">
        ${day.photos
          .map(
            ([src, alt, fit]) =>
              `<figure class="${fit === "full" ? "is-full" : ""}"><img src="${src}" alt="${escapeHtml(alt)}"></figure>`
          )
          .join("")}
      </div>`
          : ""
      }
      <ol class="timeline">
        ${day.blocks
          .map((block) => {
            const classes = ["block", block.transit ? "transit" : "", block.meal ? "meal" : ""]
              .filter(Boolean)
              .join(" ");
            return `
          <li class="${classes}">
            <div class="time">${block.time}</div>
            <div class="rail"><span class="dot"></span></div>
            <div class="body">
              ${block.kind ? `<span class="kind">${block.kind}</span>` : ""}
              <h3>${block.title}</h3>
              <p class="detail">${block.detail}</p>
              ${block.note ? `<p class="pending">${escapeHtml(block.note)}</p>` : ""}
              ${parallelHtml(block)}
              ${block.pending ? `<p class="pending">${escapeHtml(block.pending)}</p>` : ""}
              ${block.star ? `<p class="star">Tip: ${escapeHtml(block.star)}</p>` : ""}
              ${reserveHtml(block)}
              ${guideHtml(block)}
              ${factHtml(block)}
            </div>
          </li>`;
          })
          .join("")}
      </ol>
    </main>
  `;

  app.querySelector("[data-close]").addEventListener("click", () => {
    state.dayOpen = false;
    state.tab = "itinerary";
    render();
  });
}

function bindHome(app, day) {
  bindPrep(app);
  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      state.editingId = "";
      render();
    });
  });

  app.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.dayId = button.dataset.day;
      state.dayOpen = true;
      state.draft = "";
      state.editingId = "";
      render();
    });
  });

  app.querySelectorAll("[data-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.dayId = button.dataset.chip;
      state.draft = "";
      state.editingId = "";
      render();
    });
  });

  app.querySelectorAll("[data-author]").forEach((button) => {
    button.addEventListener("click", () => {
      state.author = button.dataset.author;
      const note = app.querySelector(".composer textarea");
      if (note) state.draft = note.value;
      render();
    });
  });

  app.querySelectorAll("[data-strip]").forEach((button) => {
    button.addEventListener("click", () => removeStrip(button.dataset.stripDay, button.dataset.strip));
  });

  app.querySelectorAll("[data-save-frame]").forEach((button) => {
    button.addEventListener("click", () => {
      const strip = findStrip(button.dataset.saveFrame);
      const frame = strip && strip.frames[Number(button.dataset.frame)];
      if (frame) savePhotos([frame], `japan-26-${strip.id}-${Number(button.dataset.frame) + 1}`);
    });
  });

  app.querySelectorAll("[data-save-strip]").forEach((button) => {
    button.addEventListener("click", () => {
      const strip = findStrip(button.dataset.saveStrip);
      if (strip) savePhotos(strip.frames, `japan-26-${strip.id}`);
    });
  });

  bindPhrases(app);

  const openBooth = app.querySelector("[data-booth-open]");
  if (openBooth) openBooth.addEventListener("click", () => startBooth(day));

  const composer = app.querySelector(".composer");
  if (composer) {
    composer.addEventListener("submit", async (event) => {
      event.preventDefault();
      const text = new FormData(event.currentTarget).get("note").toString().trim();
      if (!text) return;
      state.draft = text;
      try {
        await sendJournal("POST", { dayId: day.id, author: state.author, text });
        state.draft = "";
      } catch {
        state.journalNote = "That note did not join the thread. Keep this computer awake and try again.";
      }
      render();
    });
  }

  app.querySelectorAll("[data-edit-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingId = button.dataset.editEntry;
      const note = app.querySelector(".composer textarea");
      if (note) state.draft = note.value;
      render();
    });
  });

  app.querySelectorAll("[data-remove-entry]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await sendJournal("DELETE", { dayId: day.id, id: button.dataset.removeEntry });
        state.editingId = "";
      } catch {
        state.journalNote = "That note is still in the thread. Try removing it again.";
      }
      render();
    });
  });

  const editForm = app.querySelector(".entry-edit");
  if (editForm) {
    editForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const text = new FormData(editForm).get("text").toString().trim();
      if (!text) return;
      const id = state.editingId;
      try {
        await sendJournal("PATCH", { dayId: day.id, id, text });
        state.editingId = "";
      } catch {
        state.journalNote = "That edit did not reach the thread. Try saving it again.";
      }
      render();
    });
    editForm.querySelector("[data-cancel-edit]").addEventListener("click", () => {
      state.editingId = "";
      render();
    });
  }
}

function openStripDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("japan26", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("strips", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function groupStrips(rows) {
  state.strips = {};
  rows
    .slice()
    .sort((a, b) => b.created - a.created)
    .forEach((strip) => {
      state.strips[strip.dayId] = state.strips[strip.dayId] || [];
      state.strips[strip.dayId].push(strip);
    });
}

function findStrip(id) {
  return Object.values(state.strips)
    .flat()
    .find((strip) => strip.id === id);
}

async function localStrips() {
  const db = await openStripDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction("strips", "readonly").objectStore("strips").getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeStripLocally(strip) {
  const db = await openStripDb();
  await new Promise((resolve, reject) => {
    const request = db.transaction("strips", "readwrite").objectStore("strips").put(strip);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function replaceLocalStrips(rows) {
  const db = await openStripDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("strips", "readwrite");
    const store = tx.objectStore("strips");
    store.clear();
    rows.forEach((strip) => store.put(strip));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function pullStrips() {
  const response = await fetch(new URL("api/strips", document.baseURI), { cache: "no-store" });
  if (!response.ok) throw new Error("strips");
  const rows = await response.json();
  groupStrips(rows);
  return rows;
}

async function syncStrips() {
  let local = [];
  try {
    local = await localStrips();
  } catch {
    local = [];
  }
  let remote = [];
  try {
    remote = await pullStrips();
  } catch {
    groupStrips(local);
    state.boothNote = "These photos are on this phone until the link is open again.";
    return;
  }
  const leftovers = [];
  for (const strip of local) {
    if (remote.some((item) => item.id === strip.id)) continue;
    try {
      const response = await fetch(new URL("api/strips", document.baseURI), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(strip),
      });
      if (!response.ok) throw new Error("strips");
      remote = await response.json();
    } catch {
      leftovers.push(strip);
    }
  }
  groupStrips([
    ...remote,
    ...leftovers.filter((strip) => !remote.some((item) => item.id === strip.id)),
  ]);
  if (!leftovers.length) {
    try {
      await replaceLocalStrips(remote);
    } catch {
      /* the site copy is already shared */
    }
    state.boothNote = "";
    return;
  }
  state.boothNote = "A photo on this phone has not joined the site yet.";
}

async function saveStrip(strip) {
  try {
    const response = await fetch(new URL("api/strips", document.baseURI), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(strip),
    });
    if (!response.ok) throw new Error("strips");
    groupStrips(await response.json());
    state.boothNote = "";
  } catch {
    state.strips[strip.dayId] = state.strips[strip.dayId] || [];
    state.strips[strip.dayId].unshift(strip);
    state.boothNote = "That strip is on this phone until this computer is awake again.";
  }
  try {
    await storeStripLocally(strip);
  } catch {
    /* the shared copy is what everyone sees */
  }
  state.freshStrip = strip.id;
}

async function removeStrip(dayId, id) {
  try {
    const response = await fetch(new URL("api/strips", document.baseURI), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dayId, id }),
    });
    if (!response.ok) throw new Error("strips");
    const rows = await response.json();
    groupStrips(rows);
    await replaceLocalStrips(rows);
    state.boothNote = "";
  } catch {
    state.boothNote = "That strip is still on the site. Try removing it again.";
  }
  render();
}

function fileFromFrame(dataUrl, name) {
  const [head, body] = dataUrl.split(",");
  const mime = (head.match(/:(.*?);/) || [])[1] || "image/jpeg";
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], `${name}.jpg`, { type: mime });
}

async function savePhotos(frames, name) {
  const files = frames.map((src, index) => fileFromFrame(src, frames.length > 1 ? `${name}-${index + 1}` : name));
  if (navigator.canShare && navigator.canShare({ files })) {
    try {
      await navigator.share({ files });
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
    return;
  }
  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}

function frameFromImage(source) {
  const width = source.videoWidth || source.naturalWidth || source.width;
  const height = source.videoHeight || source.naturalHeight || source.height;
  const canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 640;
  const context = canvas.getContext("2d");
  const scale = Math.max(480 / width, 640 / height);
  const sw = 480 / scale;
  const sh = 640 / scale;
  context.drawImage(source, (width - sw) / 2, (height - sh) / 2, sw, sh, 0, 0, 480, 640);
  return canvas.toDataURL("image/jpeg", 0.72);
}

function fileToFrame(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(frameFromImage(image));
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read that photo."));
    };
    image.src = url;
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let boothStream = null;
let boothDay = null;

function stopBoothCamera() {
  if (!boothStream) return;
  boothStream.getTracks().forEach((track) => track.stop());
  boothStream = null;
  const video = document.querySelector("#booth video");
  video.srcObject = null;
}

function closeBooth() {
  stopBoothCamera();
  document.querySelector("#booth").hidden = true;
  document.querySelector(".booth-count").textContent = "";
}

async function startBooth(day) {
  boothDay = day;
  const booth = document.querySelector("#booth");
  const note = booth.querySelector(".booth-note");
  note.textContent = "Four frames, a few seconds apart.";
  booth.hidden = false;
  try {
    boothStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    const video = booth.querySelector("video");
    video.srcObject = boothStream;
    await video.play();
  } catch {
    note.textContent = "The camera is unavailable here. Add photos from the camera roll instead.";
  }
}

async function shootStrip() {
  const booth = document.querySelector("#booth");
  const video = booth.querySelector("video");
  const count = booth.querySelector(".booth-count");
  const flash = booth.querySelector(".booth-flash");
  if (!video.videoWidth) return;
  const start = booth.querySelector("[data-booth-start]");
  start.disabled = true;
  const frames = [];
  count.textContent = "3";
  await wait(700);
  count.textContent = "2";
  await wait(700);
  count.textContent = "1";
  await wait(700);
  count.textContent = "";
  for (let n = 0; n < 4; n += 1) {
    flash.classList.add("on");
    frames.push(frameFromImage(video));
    await wait(140);
    flash.classList.remove("on");
    if (n < 3) await wait(1100);
  }
  start.disabled = false;
  await keepStrip(frames);
}

async function keepStrip(frames) {
  const day = boothDay;
  const strip = {
    id: `${day.id}-${Date.now()}`,
    dayId: day.id,
    created: Date.now(),
    frames,
    caption: `${day.date} · ${day.place}`,
  };
  await saveStrip(strip);
  closeBooth();
  render();
}

async function addFromRoll(files) {
  const frames = [];
  for (const file of [...files].slice(0, 4)) {
    frames.push(await fileToFrame(file));
  }
  if (!frames.length || !boothDay) return;
  await keepStrip(frames);
}

function bindBooth() {
  const booth = document.querySelector("#booth");
  booth.querySelector("[data-booth-close]").addEventListener("click", closeBooth);
  booth.querySelector("[data-booth-start]").addEventListener("click", () => {
    shootStrip().catch(() => {
      booth.querySelector(".booth-note").textContent = "That take didn’t finish. Try the camera roll.";
      booth.querySelector("[data-booth-start]").disabled = false;
    });
  });
  booth.querySelector("input").addEventListener("change", (event) => {
    const input = event.currentTarget;
    addFromRoll(input.files).catch(() => {
      booth.querySelector(".booth-note").textContent = "Those photos didn’t load. Try again.";
    });
    input.value = "";
  });
}

bindBooth();
syncStrips()
  .then(() => syncJournal())
  .catch(() => {})
  .then(render);

setInterval(() => {
  if (!state.entered || state.editingId) return;
  const note = document.querySelector(".composer textarea");
  const beforeNotes = JSON.stringify(state.entries);
  const beforeStrips = Object.values(state.strips)
    .flat()
    .map((strip) => strip.id)
    .sort()
    .join();
  const jobs = [pullEntries().catch(() => {})];
  if (state.tab === "booth") jobs.push(pullStrips().catch(() => {}));
  Promise.all(jobs).then(() => {
    const notesChanged = JSON.stringify(state.entries) !== beforeNotes;
    const stripsChanged =
      Object.values(state.strips)
        .flat()
        .map((strip) => strip.id)
        .sort()
        .join() !== beforeStrips;
    if (state.tab === "journal" && notesChanged) {
      if (note) state.draft = note.value;
      render();
    } else if (state.tab === "booth" && stripsChanged) {
      render();
    }
  });
}, 4000);

let feliciaOn = feliciaVisible();
setInterval(() => {
  const on = feliciaVisible();
  if (on === feliciaOn) return;
  feliciaOn = on;
  render();
}, 5000);
