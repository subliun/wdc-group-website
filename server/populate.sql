DROP TABLE IF EXISTS restauarant_images;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS bookings; 
DROP TABLE IF EXISTS restaurants; 
DROP TABLE IF EXISTS users;

USE restaurant_db;
CREATE TABLE restaurants (
    restaurant_id int NOT NULL AUTO_INCREMENT,
    description text,
    location text,
    rating int, /* out of 100 */
    latitiute int,
    longitude int,
    num_tables int,
    PRIMARY KEY (restaurant_id)
);

CREATE TABLE restauarant_images (
    image_id int NOT NULL AUTO_INCREMENT,
    restaurant_id int NOT NULL,
    path text,
    PRIMARY KEY (image_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE reviews (
    review_id int NOT NULL AUTO_INCREMENT,
    restaurant_id int NOT NULL,
    reviewer_name text,
    rating int, /* out of 100 */
    review_text text,
    PRIMARY KEY (review_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
);

CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    email text,
    password text, 
    PRIMARY KEY (user_id)
);

CREATE TABLE bookings (
    booking_id int NOT NULL AUTO_INCREMENT, 
    restaurant_id int NOT NULL,
    user_id int NOT NULL,
    table_number int, 
    date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelled boolean NOT NULL DEFAULT 0,
    PRIMARY KEY (booking_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
