USE restaurant_db;

CREATE TABLE IF NOT EXISTS restaurants (
    id          LONG            NOT NULL        AUTO_INCREMENT,

    `name`      VARCHAR(64)     NOT NULL,
    `desc`      VARCHAR(256),
    location    VARCHAR(256),
    rating      INT,
    latitude    INT,
    longitude   INT,
    tabSize     INT,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS restaurant_images (
    id          LONG           NOT NULL         AUTO_INCREMENT,

    rest_id     LONG           NOT NULL,
    path        TEXT,

    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_reviews (
    id          LONG            NOT NULL       AUTO_INCREMENT,

    rest_id     LONG            NOT NULL,
    user_id     LONG            NOT NULL,

    rating      INT             NOT NULL,
    review      TEXT,

    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES restaurants(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
    id          LONG            NOT NULL        AUTO_INCREMENT,

    email       VARCHAR(256)    NOT NULL,
    password    VARCHAR(512)    NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS restaurant_bookings (
    id          LONG            NOT NULL        AUTO_INCREMENT,

    rest_id     LONG            NOT NULL,
    user_id     LONG            NOT NULL,
    tabNum      INT             NOT NULL,

    `time`      TIMESTAMP       NOT NULL        DEFAULT NOW(),
    cancelled   BIT             NOT NULL        DEFAULT 0,

    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES restaurants(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);




