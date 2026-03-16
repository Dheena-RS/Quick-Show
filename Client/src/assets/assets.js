import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/qfQ4-suh4Pk/hqdefault.jpg",
        videoUrl: 'https://youtu.be/qfQ4-suh4Pk?si=scAcnbE_zQbc69Qb'
    },
    {
        image: "https://img.youtube.com/vi/Way9Dexny3w/hqdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=Way9Dexny3w'
    },
    {
        image: "https://img.youtube.com/vi/lnApv5WFK6M/hqdefault.jpg",
        videoUrl: 'https://youtu.be/lnApv5WFK6M?si=JiyXJ1hos9JJ95vG'
    },
    {
        image: "https://img.youtube.com/vi/d9MyW72ELq0/hqdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=d9MyW72ELq0'
    },
]

export const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "299534",
        "title": "Avengers: Endgame",
        "poster_path": "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        "release_date": "2019-04-24",
        "vote_average": 8.3,
        "vote_count": 15000,
        "runtime": 181,
        "genres": [{ "name": "Adventure" }, { "name": "Science Fiction" }]
    },
    {
        "_id": "533535",
        "title": "Deadpool & Wolverine",
        "poster_path": "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
        "release_date": "2024-07-24",
        "vote_average": 7.7,
        "vote_count": 18000,
        "runtime": 128,
        "genres": [{ "name": "Action" }, { "name": "Comedy" }]
    },
    {
        "_id": "634649",
        "title": "Spider-Man: No Way Home",
        "poster_path": "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        "release_date": "2021-12-15",
        "vote_average": 8.0,
        "vote_count": 27500,
        "runtime": 148,
        "genres": [{ "name": "Action" }, { "name": "Adventure" }]
    },
    {
        "_id": "1121040",
        "title": "Fast and Furious x",
        "poster_path": "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        "release_date": "2023-05-19",
        "vote_average": 8.2,
        "vote_count": 36000,
        "runtime": 141,
        "genres": [{ "name": "Action" }, { "name": "Crime" }]
    },
    {
        "_id": "361743",
        "title": "Top Gun: Maverick",
        "poster_path": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
        "release_date": "2022-05-27",
        "vote_average": 8.3,
        "vote_count": 12400,
        "runtime": 130,
        "genres": [{ "name": "Action" }, { "name": "Drama" }]
    },
    {
        "_id": "693134",
        "title": "Dune: Part Two",
        "poster_path": "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
        "release_date": "2024-03-01",
        "vote_average": 8.3,
        "vote_count": 19200,
        "runtime": 166,
        "genres": [{ "name": "Science Fiction" }, { "name": "Adventure" }]
    },
    {
        "_id": "76600",
        "title": "Avatar: The Way of Water",
        "poster_path": "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
        "release_date": "2022-12-16",
        "vote_average": 7.7,
        "vote_count": 21000,
        "runtime": 192,
        "genres": [{ "name": "Science Fiction" }, { "name": "Action" }]
    }
];

export const dummyDateTimeData = {
    "2026-03-19": [
        { "time": "2026-03-19T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2026-03-19T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2026-03-19T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2026-03-20": [
        { "time": "2026-03-20T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2026-03-20T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2026-03-20T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2026-03-21": [
        { "time": "2026-03-21T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2026-03-21T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2026-03-21T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2026-03-22": [
        { "time": "2026-03-22T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2026-03-22T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2026-03-22T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2026-03-19T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2026-03-20T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2026-03-21T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2026-03-21T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2026-03-21T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Dheena", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2026-03-19T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Arvindh", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2026-03-19T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Krishna", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2026-03-19T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    },
]