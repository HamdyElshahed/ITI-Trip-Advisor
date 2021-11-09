
export interface Restaurant {
    rating:       number;
    price:        number;
    categories:   Categories;
    coordinates:  Coordinates;
    is_closed:    boolean;
    name:         string;
    features:     string[];
    location:     Location;
    review_count: number;
    is_claimed:   boolean;
    url:          string;
    photos:       string[];
    image_url:    string;
    phone:        string;
    transactions: string;
}

export interface Categories {
    title: string;
}

export interface Coordinates {
    longitude: number;
    latitude:  number;
}

export interface Location {
    city:    string;
    country: string;
    address: string;
    state:   string;
}

export const FEATURES:string[]=["Reservations",
"Waitlist",
"Has TV",
"Dogs Allowed",
"Accepts Credit Cards",
"Offers Takeout",
"Staff wears masks",
"Good For Kids",
"Good for Groups"
]
