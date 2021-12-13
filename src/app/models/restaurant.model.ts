
export interface Restaurant {
  id: string;
  alias?: string;
  name: string;
  image_url?: string;
  is_closed?: boolean;
  url?: string;
  review_count?: number;
  categories: Category[];
  features?: string[];
  rating?: number;
  coordinates?: Coordinates;
  transactions?: any[];
  photos?: string[];
  price?: string;
  location: Location;
  phone?: string;
  display_phone?: string;
  distance?: number;
  is_claimed?:boolean
}

export interface Category {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  address1: string;
  address2?: string | null;
  address3?: string | null;
  city: string;
  zip_code?: string;
  country: string;
  state?: string;
  display_address?: string[];
}

export interface Dish {
  id: string;
  name: string;
  image_url: string;
  price: number;
  category: string;
}
export interface Time {
  start:number,
  end: number,
}
export interface OpenTime {
  start:number,
  end: number,
}
export interface Table {
  id: string;
  available: boolean;
  maxPersonsNo: number;
  reservationPrice:number
}




export const FEATURES: string[] = ["Reservations",
  "Waitlist",
  "Has TV",
  "Dogs Allowed",
  "Accepts Credit Cards",
  "Offers Takeout",
  "Staff wears masks",
  "Good For Kids",
  "Good for Groups"
]



export const ALLRESTAURANTS: Restaurant[] = [
  {
    "id": "H4jJ7XB3CetIr1pg56CczQ",
    "alias": "levain-bakery-new-york",
    "name": "Levain Bakery",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/hCp7TJqo1m_rGPkvso4dxw/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/levain-bakery-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 8547,
    "categories": [
      {
        "alias": "bakeries",
        "title": "Bakeries"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.779961,
      "longitude": -73.980299
    },
    "transactions": [],
    "photos": [
      "https://s3-media4.fl.yelpcdn.com/bphoto/JXi5a8UeGPrKwbGBA4ZImA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/7f_WdNLCGZmjUQEw6h6xoQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/eqMn--a_zt-qU-62tWuYUw/o.jpg",

      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"

    ],
    "price": "$$",
    "location": {
      "address1": "167 W 74th St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10023",
      "country": "US",
      "state": "NY",
      "display_address": [
        "167 W 74th St",
        "New York, NY 10023"
      ]
    },
    "phone": "+19174643769",
    "display_phone": "(917) 464-3769",
    "distance": 8369.262424680568
  },
  {
    "id": "V7lXZKBDzScDeGB8JmnzSA",
    "alias": "katzs-delicatessen-new-york",
    "name": "Katz's Delicatessen",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/7Yn37rOW4VQDI396jPPoyA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/katzs-delicatessen-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 13041,
    "categories": [
      {
        "alias": "delis",
        "title": "Delis"
      },
      {
        "alias": "sandwiches",
        "title": "Sandwiches"
      },
      {
        "alias": "soup",
        "title": "Soup"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.722237,
      "longitude": -73.9875259
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://s3-media4.fl.yelpcdn.com/bphoto/JXi5a8UeGPrKwbGBA4ZImA/o.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/7f_WdNLCGZmjUQEw6h6xoQ/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/eqMn--a_zt-qU-62tWuYUw/o.jpg"
    ],
    "price": "$$",
    "location": {
      "address1": "205 E Houston St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10002",
      "country": "US",
      "state": "NY",
      "display_address": [
        "205 E Houston St",
        "New York, NY 10002"
      ]
    },
    "phone": "+12122542246",
    "display_phone": "(212) 254-2246",
    "distance": 1952.3706239726876
  },
  {
    "id": "44SY464xDHbvOcjDzRbKkQ",
    "alias": "ippudo-ny-new-york-7",
    "name": "Ippudo NY",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/zF3EgqHCk7zBUwD2B3WTEA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/ippudo-ny-new-york-7?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 10105,
    "categories": [
      {
        "alias": "ramen",
        "title": "Ramen"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.73092,
      "longitude": -73.99015
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ],
    "price": "$$",
    "location": {
      "address1": "65 4th Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "65 4th Ave",
        "New York, NY 10003"
      ]
    },
    "phone": "+12123880088",
    "display_phone": "(212) 388-0088",
    "distance": 2854.3012674083675
  },
  {
    "id": "xEnNFXtMLDF5kZDxfaCJgA",
    "alias": "the-halal-guys-new-york-2",
    "name": "The Halal Guys",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/pqcdqGpzyurT2pSVA9G2kw/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 9686,
    "categories": [
      {
        "alias": "foodstands",
        "title": "Food Stands"
      },
      {
        "alias": "mideastern",
        "title": "Middle Eastern"
      },
      {
        "alias": "halal",
        "title": "Halal"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.761861,
      "longitude": -73.979306
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$",
    "location": {
      "address1": "W 53rd St",
      "address2": null,
      "address3": "",
      "city": "New York",
      "zip_code": "10019",
      "country": "US",
      "state": "NY",
      "display_address": [
        "W 53rd St",
        "New York, NY 10019"
      ]
    },
    "phone": "+13475271505",
    "display_phone": "(347) 527-1505",
    "distance": 6399.019109860832
  },
  {
    "id": "KFnr0CGsHQ2ABFHbLNtobQ",
    "alias": "central-park-conservancy-new-york",
    "name": "Central Park Conservancy",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2QeE4ZRjzmUsNDnqXCGqfA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/central-park-conservancy-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 2593,
    "categories": [
      {
        "alias": "parks",
        "title": "Parks"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 5.0,
    "coordinates": {
      "latitude": 40.764266,
      "longitude": -73.971656
    },
    "transactions": [],
    "location": {
      "address1": "14 E 60th St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10022",
      "country": "US",
      "state": "NY",
      "display_address": [
        "14 E 60th St",
        "New York, NY 10022"
      ]
    },
    "phone": "+12123106600",
    "display_phone": "(212) 310-6600",
    "distance": 6814.558069627135
  },
  {
    "id": "jVncyqXwlx_D9f2xZn05tg",
    "alias": "the-metropolitan-museum-of-art-new-york-3",
    "name": "The Metropolitan Museum of Art",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/oqhwmydKw-jPcUhoxBGGyg/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-metropolitan-museum-of-art-new-york-3?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3023,
    "categories": [
      {
        "alias": "artmuseums",
        "title": "Art Museums"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.779449,
      "longitude": -73.963245
    },
    "transactions": [],
    "location": {
      "address1": "1000 5th Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10028",
      "country": "US",
      "state": "NY",
      "display_address": [
        "1000 5th Ave",
        "New York, NY 10028"
      ]
    },
    "phone": "+12125357710",
    "display_phone": "(212) 535-7710",
    "distance": 8634.601734170283
  },
  {
    "id": "jnEv25Y2DosTq2sNnvmC9g",
    "alias": "los-tacos-no-1-new-york",
    "name": "Los Tacos No.1",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FU44TYl3PzXsE06G4W5aog/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/los-tacos-no-1-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3249,
    "categories": [
      {
        "alias": "tacos",
        "title": "Tacos"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.7425547,
      "longitude": -74.0060838
    },
    "transactions": [
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$",
    "location": {
      "address1": "75 9th Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10011",
      "country": "US",
      "state": "NY",
      "display_address": [
        "75 9th Ave",
        "New York, NY 10011"
      ]
    },
    "phone": "",
    "display_phone": "",
    "distance": 4244.358699250552
  },
  {
    "id": "WHRHK3S1mQc3PmhwsGRvbw",
    "alias": "bibble-and-sip-new-york-2",
    "name": "Bibble & Sip",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gX847-f2s1X65RkzsFAWBA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 5062,
    "categories": [
      {
        "alias": "coffee",
        "title": "Coffee & Tea"
      },
      {
        "alias": "bakeries",
        "title": "Bakeries"
      },
      {
        "alias": "desserts",
        "title": "Desserts"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.7628355,
      "longitude": -73.98518009478293
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "253 W 51st St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10019",
      "country": "US",
      "state": "NY",
      "display_address": [
        "253 W 51st St",
        "New York, NY 10019"
      ]
    },
    "phone": "+16466495116",
    "display_phone": "(646) 649-5116",
    "distance": 6427.569355387715
  },
  {
    "id": "jjJc_CrkB2HodEinB6cWww",
    "alias": "lovemama-new-york",
    "name": "LoveMama",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/lovemama-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 5615,
    "categories": [
      {
        "alias": "thai",
        "title": "Thai"
      },
      {
        "alias": "malaysian",
        "title": "Malaysian"
      },
      {
        "alias": "vietnamese",
        "title": "Vietnamese"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.730408722512074,
      "longitude": -73.98612673033213
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "174 2nd Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "174 2nd Ave",
        "New York, NY 10003"
      ]
    },
    "phone": "+12122545370",
    "display_phone": "(212) 254-5370",
    "distance": 2859.902795118878
  },
  {
    "id": "j1S3NUrkB3BVT49n_e76NQ",
    "alias": "best-bagel-and-coffee-new-york",
    "name": "Best Bagel & Coffee",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3646,
    "categories": [
      {
        "alias": "bagels",
        "title": "Bagels"
      },
      {
        "alias": "coffee",
        "title": "Coffee & Tea"
      },
      {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.7522683,
      "longitude": -73.9910861
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$",
    "location": {
      "address1": "225 W 35th St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10001",
      "country": "US",
      "state": "NY",
      "display_address": [
        "225 W 35th St",
        "New York, NY 10001"
      ]
    },
    "phone": "+12125644409",
    "display_phone": "(212) 564-4409",
    "distance": 5213.5315009761325
  },
  {
    "id": "B3_K2kUVbYOU0VaLcj_LTw",
    "alias": "thai-villa-new-york-2",
    "name": "Thai Villa",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/XKvKGgVuj4_jhqHPVQj4_A/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/thai-villa-new-york-2?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3877,
    "categories": [
      {
        "alias": "thai",
        "title": "Thai"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.73902,
      "longitude": -73.99065
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "5 E 19th St",
      "address2": "G Floor",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "5 E 19th St",
        "G Floor",
        "New York, NY 10003"
      ]
    },
    "phone": "+12128029999",
    "display_phone": "(212) 802-9999",
    "distance": 3744.570399827637
  },
  {
    "id": "zj8Lq1T8KIC5zwFief15jg",
    "alias": "prince-street-pizza-new-york-2",
    "name": "Prince Street Pizza",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/prince-street-pizza-new-york-2?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 4050,
    "categories": [
      {
        "alias": "pizza",
        "title": "Pizza"
      },
      {
        "alias": "italian",
        "title": "Italian"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.72308755605564,
      "longitude": -73.99453001177575
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$",
    "location": {
      "address1": "27 Prince St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10012",
      "country": "US",
      "state": "NY",
      "display_address": [
        "27 Prince St",
        "New York, NY 10012"
      ]
    },
    "phone": "+12129664100",
    "display_phone": "(212) 966-4100",
    "distance": 1961.8771417367063
  },
  {
    "id": "UA2M9QFZghe-9th2KwLoWQ",
    "alias": "burger-and-lobster-flatiron-nyc-new-york",
    "name": "Burger & Lobster - Flatiron NYC",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/y1NYFEnpLG2KuyYDg8IcSg/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/burger-and-lobster-flatiron-nyc-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 5528,
    "categories": [
      {
        "alias": "seafood",
        "title": "Seafood"
      },
      {
        "alias": "burgers",
        "title": "Burgers"
      },
      {
        "alias": "newamerican",
        "title": "American (New)"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.74007,
      "longitude": -73.99344
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "39 W 19th St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10011",
      "country": "US",
      "state": "NY",
      "display_address": [
        "39 W 19th St",
        "New York, NY 10011"
      ]
    },
    "phone": "+16468337532",
    "display_phone": "(646) 833-7532",
    "distance": 3849.54386751767
  },
  {
    "id": "veq1Bl1DW3UWMekZJUsG1Q",
    "alias": "gramercy-tavern-new-york",
    "name": "Gramercy Tavern",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VZA5XdH4ZsEhNRDHSAjYjw/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3006,
    "categories": [
      {
        "alias": "newamerican",
        "title": "American (New)"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.73844,
      "longitude": -73.98825
    },
    "transactions": [
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$$$",
    "location": {
      "address1": "42 E 20th St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "42 E 20th St",
        "New York, NY 10003"
      ]
    },
    "phone": "+12124770777",
    "display_phone": "(212) 477-0777",
    "distance": 3702.8075801197165
  },
  {
    "id": "JION8hhg7q6zyayHYwhxIw",
    "alias": "the-high-line-new-york",
    "name": "The High Line",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/17S5uE5ARNaFjLWizkS7DQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/the-high-line-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 2415,
    "categories": [
      {
        "alias": "parks",
        "title": "Parks"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.739662,
      "longitude": -74.008361
    },
    "transactions": [],
    "location": {
      "address1": "820 Washington St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10014",
      "country": "US",
      "state": "NY",
      "display_address": [
        "820 Washington St",
        "New York, NY 10014"
      ]
    },
    "phone": "+12122069922",
    "display_phone": "(212) 206-9922",
    "distance": 4813.160213397654
  },
  {
    "id": "4yPqqJDJOQX69gC66YUDkA",
    "alias": "peter-luger-brooklyn-2",
    "name": "Peter Luger",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sxnoGiAvhhk3__zO37IXNQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/peter-luger-brooklyn-2?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 6060,
    "categories": [
      {
        "alias": "steak",
        "title": "Steakhouses"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Delivery",
      "Outdoor Seating",
      "Dinner",
      "Good for Groups",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.709945,
      "longitude": -73.962478
    },
    "transactions": [],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$$$",
    "location": {
      "address1": "178 Broadway",
      "address2": "",
      "address3": "",
      "city": "Brooklyn",
      "zip_code": "11211",
      "country": "US",
      "state": "NY",
      "display_address": [
        "178 Broadway",
        "Brooklyn, NY 11211"
      ]
    },
    "phone": "+17183877400",
    "display_phone": "(718) 387-7400",
    "distance": 2728.016921522817
  },
  {
    "id": "lWOkeS-wV4no8qqA9OwwEg",
    "alias": "doughnut-plant-new-york-6",
    "name": "Doughnut Plant",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hLWKXsLv6hyltNSilBy8-g/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/doughnut-plant-new-york-6?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 3287,
    "categories": [
      {
        "alias": "donuts",
        "title": "Donuts"
      },
      {
        "alias": "coffee",
        "title": "Coffee & Tea"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.716334,
      "longitude": -73.988652
    },
    "transactions": [
      "pickup",
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "379 Grand St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10002",
      "country": "US",
      "state": "NY",
      "display_address": [
        "379 Grand St",
        "New York, NY 10002"
      ]
    },
    "phone": "+12125053700",
    "display_phone": "(212) 505-3700",
    "distance": 1300.8284914110848
  },
  {
    "id": "kViIWJFfAfWPpJOwAXBKGA",
    "alias": "national-september-11-memorial-museum-new-york",
    "name": "National September 11 Memorial Museum",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yoe6Wha7gQlTBNIeFO0UhQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/national-september-11-memorial-museum-new-york?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 1455,
    "categories": [
      {
        "alias": "museums",
        "title": "Museums"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.71144,
      "longitude": -74.01301
    },
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ],
    "transactions": [],
    "location": {
      "address1": "180 Greenwich St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10007",
      "country": "US",
      "state": "NY",
      "display_address": [
        "180 Greenwich St",
        "New York, NY 10007"
      ]
    },
    "phone": "+12122665211",
    "display_phone": "(212) 266-5211",
    "distance": 1670.5938821198667
  },
  {
    "id": "nU4XBdvxDABXqZ6CnB8Dig",
    "alias": "clinton-street-baking-company-new-york-5",
    "name": "Clinton Street Baking Company",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DWHdizJ9bKbXN4yq6nbwAA/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/clinton-street-baking-company-new-york-5?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 5310,
    "categories": [
      {
        "alias": "bakeries",
        "title": "Bakeries"
      },
      {
        "alias": "newamerican",
        "title": "American (New)"
      },
      {
        "alias": "breakfast_brunch",
        "title": "Breakfast & Brunch"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.0,
    "coordinates": {
      "latitude": 40.721128,
      "longitude": -73.983933
    },
    "transactions": [
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$$",
    "location": {
      "address1": "4 Clinton St",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10002",
      "country": "US",
      "state": "NY",
      "display_address": [
        "4 Clinton St",
        "New York, NY 10002"
      ]
    },
    "phone": "+16466026263",
    "display_phone": "(646) 602-6263",
    "distance": 1950.282829638887
  },
  {
    "id": "SULHf6nGQ8sK0UpG1XU30w",
    "alias": "los-tacos-no-1-new-york-3",
    "name": "Los Tacos No.1",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/5wEe4FCwda16knmBHSsX0Q/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/los-tacos-no-1-new-york-3?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=isHnLZ2-HnajgMvg5U-9-A",
    "review_count": 2053,
    "categories": [
      {
        "alias": "tacos",
        "title": "Tacos"
      }
    ],
    "features": [
      "Reservations",
      "Has TV",
      "Offers Takeout",
      "Staff wears masks",
      "Good For Kids",
      "Good for Groups",
      "Waitlist",
      "Delivery",
      "Takes Reservations",
      "Accepts Credit Cards",
      "Accepts Cryptocurrency",
      "Good for Kids",
      "Waiter Service",
      "Wheelchair Accessible"
    ],
    "rating": 4.5,
    "coordinates": {
      "latitude": 40.7575067,
      "longitude": -73.9877717
    },
    "transactions": [
      "delivery"
    ],
    "photos": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwyfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwzfHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw0fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw1fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw3fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw4fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHw5fHxmb29kfGVufDB8fHx8MTYzODU2MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjgxMTV8MHwxfHNlYXJjaHwxMHx8Zm9vZHxlbnwwfHx8fDE2Mzg1NjI0NTc&ixlib=rb-1.2.1&q=80&w=1080"
    ], "price": "$",
    "location": {
      "address1": "229 W 43rd St",
      "address2": "",
      "address3": null,
      "city": "New York",
      "zip_code": "10036",
      "country": "US",
      "state": "NY",
      "display_address": [
        "229 W 43rd St",
        "New York, NY 10036"
      ]
    },
    "phone": "+12125744696",
    "display_phone": "(212) 574-4696",
    "distance": 5815.027424033859
  }
]

