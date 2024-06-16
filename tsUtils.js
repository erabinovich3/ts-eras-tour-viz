export function getAlbumColorFromSong(song) {
    const albumObj = albumSongsMasterlist.find((album) =>
        album.songs.includes(song)
    );

    return albumObj?.color ?? "#ffefdc";
}

const albumSongsMasterlist = [
    {
        albumName: "taylor swift",
        songs: [
            "Tim McGraw",
            "Picture To Burn",
            "Teardrops On My Guitar",
            "A Place in this World",
            "Cold As You",
            "The Outside",
            "Tied Together with a Smile",
            "Stay Beautiful",
            "Should've Said No",
            "Mary's Song (Oh My My My)",
            "Our Song",
            "I'm Only Me When I'm With You",
            "Invisible",
            "A Perfectly Good Heart",
            "Crazier", // not on this album, grouped by Taylor Swift herself
        ],
        color: "#b9d2b5",
    },
    {
        albumName: "fearless",
        songs: [
            "Fearless",
            "Fifteen",
            "Love Story",
            "Hey Stephen",
            "White Horse",
            "You Belong With Me",
            "Breathe",
            "Tell Me Why",
            "You're Not Sorry",
            "The Way I Loved You",
            "Forever & Always",
            "The Best Day",
            "Change",
            "Jump Then Fall",
            "Untouchable",
            "Come In With The Rain",
            "Superstar",
            "The Other Side Of The Door",
            "Today Was A Fairytale",
            "You All Over Me",
            "Mr. Perfectly Fine",
            "We Were Happy",
            "That's When",
            "Don't You",
            "Bye Bye Baby",
            "If This Was A Movie",
        ],
        color: "#f4cb8d",
    },
    {
        albumName: "speak now",
        songs: [
            "Mine",
            "Sparks Fly",
            "Back To December",
            "Speak Now",
            "Dear John",
            "Mean",
            "The Story Of Us",
            "Never Grow Up",
            "Enchanted",
            "Better Than Revenge",
            "Innocent",
            "Haunted",
            "Last Kiss",
            "Long Live",
            "Ours",
            "Superman",
            "Electric Touch",
            "When Emma Falls in Love",
            "I Can See You",
            "Castles Crumbling",
            "Foolish One",
            "Timeless",
        ],
        color: "#d1b2d2",
    },
    {
        albumName: "red",
        songs: [
            "State Of Grace",
            "Red",
            "Treacherous",
            "I Knew You Were Trouble",
            "All Too Well",
            "22",
            "I Almost Do",
            "We Are Never Ever Getting Back Together",
            "Stay Stay Stay",
            "The Last Time",
            "Holy Ground",
            "Sad Beautiful Tragic",
            "The Lucky One",
            "Everything Has Changed",
            "Starlight",
            "Begin Again",
            "The Moment I Knew",
            "Come Back...Be Here",
            "Girl At Home",
            "State Of Grace",
            "Ronan",
            "Better Man",
            "Nothing New",
            "Babe",
            "Message In A Bottle",
            "I Bet You Think About Me",
            "Forever Winter",
            "Run",
            "The Very First Night",
            "Eyes Open",
            "Safe & Sound",
        ],
        color: "#823549",
    },
    {
        albumName: "1989",
        songs: [
            "Welcome To New York",
            "Blank Space",
            "Style",
            "Out Of The Woods",
            "All You Had To Do Was Stay",
            "Shake It Off",
            "I Wish You Would",
            "Bad Blood",
            "Wildest Dreams",
            "How You Get The Girl",
            "This Love",
            "I Know Places",
            "Clean",
            "Wonderland",
            "You Are In Love",
            "New Romantics",
            '"Slut!"',
            "Say Don't Go",
            "Now That We Don't Talk",
            "Suburban Legends",
            "Is It Over Now?",
            "Sweeter Than Fiction",
        ],
        color: "#b5e9f6",
    },
    {
        albumName: "reputation",
        songs: [
            "...Ready For It?",
            "End Game",
            "I Did Something Bad",
            "Don't Blame Me",
            "Delicate",
            "Look What You Made Me Do",
            "So It Goes...",
            "Gorgeous",
            "Getaway Car",
            "King Of My Heart",
            "Dancing With Our Hands Tied",
            "Dress",
            "This Is Why We Can't Have Nice Things",
            "Call It What You Want",
            "New Year's Day",
            "I Don't Wanna Live Forever", // not on this album, grouped by nearest release date for color purposes
            "This Is What You Came For", // not on this album, grouped by Taylor Swift herself
        ],
        color: "#847e80",
    },
    {
        name: "lover",
        songs: [
            "I Forgot That You Existed",
            "Cruel Summer",
            "Lover",
            "The Man",
            "The Archer",
            "I Think He Knows",
            "Miss Americana & The Heartbreak Prince",
            "Paper Rings",
            "Cornelia Street",
            "Death By A Thousand Cuts",
            "London Boy",
            "Soon You'll Get Better",
            "False God",
            "You Need To Calm Down",
            "Afterglow",
            "ME!",
            "It's Nice To Have A Friend",
            "Daylight",
            "All Of The Girls You Loved Before",
            "Christmas Tree Farm", // not on this album, grouped by nearest release date for color purposes
            "Beautiful Ghosts", // not on this album, grouped by nearest release date for color purposes
        ],
        color: "#f9b2d0",
    },
    {
        albumName: "folklore",
        songs: [
            "the 1",
            "cardigan",
            "the last great american dynasty",
            "exile",
            "my tears ricochet",
            "mirrorball",
            "seven",
            "august",
            "this is me trying",
            "illicit affairs",
            "invisible string",
            "mad woman",
            "epiphany",
            "betty",
            "peace",
            "hoax",
            "the lakes",
            "Carolina", // not on this album, grouped by Taylor Swift herself
        ],
        color: "#cfcac6",
    },
    {
        albumName: "evermore",
        songs: [
            "willow",
            "champagne problems",
            "gold rush",
            "'tis the damn season",
            "tolerate it",
            "no body, no crime",
            "happiness",
            "dorothea",
            "coney island",
            "ivy",
            "cowboy like me",
            "long story short",
            "marjorie",
            "closure",
            "evermore",
            "right where you left me",
            "it's time to go",
        ],
        color: "#c8ae95",
    },
    {
        albumName: "midnights",
        songs: [
            "Lavender Haze",
            "Maroon",
            "Anti-Hero",
            "Snow On The Beach",
            "You're On Your Own, Kid",
            "Midnight Rain",
            "Question...?",
            "Vigilante Shit",
            "Bejeweled",
            "Labyrinth",
            "Karma",
            "Sweet Nothing",
            "Mastermind",
            "The Great War",
            "Bigger Than The Whole Sky",
            "Paris",
            "High Infidelity",
            "Glitch",
            "Would've, Could've, Should've",
            "Dear Reader",
            "Hits Different",
            "You're Losing Me",
        ],
        color: "#434961",
    },
    {
        albumName: "the tortured poets department",
        songs: [
            "Fortnight",
            "The Tortured Poets Department",
            "My Boy Only Breaks His Favorite Toys",
            "Down Bad",
            "So Long, London",
            "But Daddy I Love Him",
            "Fresh Out the Slammer",
            "Florida!!!!",
            "Guilty as Sin?",
            "Who's Afraid of Little Old Me?",
            "I Can Fix Him (No Really I Can)",
            "loml",
            "I Can Do It With a Broken Heart",
            "The Smallest Man Who Ever Lived",
            "The Alchemy",
            "Clara Bow",
            "The Black Dog",
            "imgonnagetyouback",
            "The Albatross",
            "Chloe or Sam or Sophia or Marcus",
            "How Did It End?",
            "So High School",
            "I Hate It Here",
            "thanK you aIMee",
            "I Look in People's Windows",
            "The Prophecy",
            "Cassandra",
            "Peter",
            "The Bolter",
            "Robin",
            "The Manuscript",
        ],
        color: "#ffffff",
    },
];
