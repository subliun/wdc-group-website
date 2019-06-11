const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    connectionLimit: 25,
    database: 'restaurant_db'
});

module.exports = {
    createUser: function(username, email, password) {
        pool.getConnection()
          .then(conn => {
              return conn.query("INSERT INTO users(`name`, email, password) VALUES(?, ?, ?);", [username, email, password])
          }).then((res) => {
            console.log(res);
            return 'Created user.'
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        })
    },
    deleteUser: function(email) {
        pool.getConnection()
          .then(conn => {
              return conn.query("DELETE FROM users WHERE email = ?;", [email])
          }).then((res) => {
              console.log(res);
              return 'Deleted user.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        })
    },
    updateUser: function(username, email, password) {
        pool.getConnection()
          .then(conn => {
              return conn.query("UPDATE users SET `name` = ?, email = ?, password =? WHERE email = ?;", [username, email, password, email])
          }).then((res) => {
              console.log(res);
              return 'Updated user.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        })
    },
    getUser: function (email) {
        return pool.getConnection()
          .then(conn => {
              return conn.query("SELECT * FROM users WHERE email = ?;", [email])
          }).then((res) => {
              console.log(res);
              return res;
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    createRestaurant: function (name, desc, location, lat, long, tableNum) {
        pool.getConnection()
          .then(conn => {
              return conn.query("INSERT INTO restaurants(`name`, `desc`, location, rating, latitude, longitude, tabize) VALUES (?, ?, ?, ?, ?, ?, ?);", [name, desc, location, 0, lat, long, tableNum]);
          }).then((res) => {
              console.log(res);
              return 'Created restaurant.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },

    deleteRestaurant: function (id) {
        pool.getConnection()
        .then(conn => {
            return conn.query("DELETE FROM restaurants WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return 'Deleted restaurant.';
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      })
    },

    updateRestaurant: function(id, name, desc, location, rating, latitude, longitude, tabSize) {
        pool.getConnection()
          .then(conn => {
              return conn.query("UPDATE restaurants SET `name` = ?, `desc` = ?, \
              location = ?, rating = ?, latitude = ?, longitude = ?, tabSize = ? WHERE id = ?;", [name, desc, location, rating, latitude, longitude, tabSize, id])
          }).then((res) => {
              console.log(res);
              return 'Updated restaurant.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        })
    },
    getRestaurant: function (id) {
        return pool.getConnection()
          .then(conn => {
              return conn.query("SELECT * FROM restaurants WHERE id = ?;", [id])
          }).then((res) => {
              console.log(res);
              return res;
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    getAllRestaurants: function () {
        return pool.getConnection()
          .then(conn => {
              return conn.query("SELECT * FROM restaurants;")
          }).then((res) => {
              console.log(res);
              return res;
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    createRestaurantImage: function (rest_id, path) {
        pool.getConnection()
          .then(conn => {
              return conn.query("INSERT INTO restaurant_images(rest_id, path) VALUES (?, ?);", [rest_id, path]);
          }).then((res) => {
              console.log(res);
              return 'Created restaurant image.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    deleteRestaurantImg: function (id) {
        pool.getConnection()
        .then(conn => {
            return conn.query("DELETE FROM restaurant_images WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return 'Deleted restaurant image.';
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      })
    },
    getRestaurantImg: function (id) {
        return pool.getConnection()
          .then(conn => {
              return conn.query("SELECT * FROM restaurants WHERE id = ?;", [id])
          }).then((res) => {
              console.log(res);
              return res;
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    getAllImgs: function () {
        return pool.getConnection()
          .then(conn => {
              return conn.query("SELECT * FROM restaurant_images;")
          }).then((res) => {
              console.log(res);
              return res;
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    createRestaurantReview: function (rest_id, user_id, rating, review) {
        pool.getConnection()
          .then(conn => {
              return conn.query("INSERT INTO restaurant_reviews(rest_id, user_id, rating, review) VALUES (?, ?, ?, ?);", [rest_id, user_id, rating, review]);
          }).then((res) => {
              console.log(res);
              return 'Created restaurant review.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    deleteRestaurantReview: function (id) {
        pool.getConnection()
        .then(conn => {
            return conn.query("DELETE FROM restaurant_reviews WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return 'Deleted restaurant review.';
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      })
    },
    updateRestaurantReview: function(id, rest_id, user_id, rating, review) {
        pool.getConnection()
          .then(conn => {
              return conn.query("UPDATE restaurant_reviews SET rest_id = ?, user_id = ?, rating = ?, review = ? WHERE id = ?;", [rest_id, user_id, rating, review, id])
          }).then((res) => {
              console.log(res);
              return 'Updated restaurant review.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        })
    },
    getRestaurantReview: function (id) {
        return pool.getConnection()
        .then(conn => {
            return conn.query("SELECT * FROM restaurant_reviews WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return res;
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      });
    },
    getAllReviews: function () {
        return pool.getConnection()
        .then(conn => {
            return conn.query("SELECT * FROM restaurant_reviews;")
        }).then((res) => {
            console.log(res);
            return res;
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      });
    },
    createRestaurantBooking: function (rest_id, user_id, tabNum, time, cancelled) {
        pool.getConnection()
          .then(conn => {
              return conn.query("INSERT INTO restaurant_bookings(rest_id, user_id, tabNum, `time`, cancelled) VALUES (?, ?, ?, ?, ?);", [rest_id, user_id, tabNum, time, cancelled]);
          }).then((res) => {
              console.log(res);
              return 'Created restaurant image.';
        }).catch(err => {
            console.log(err);
            return 'An error occurred.';
        });
    },
    deleteRestaurantBooking: function (id) {
        pool.getConnection()
        .then(conn => {
            return conn.query("DELETE FROM restaurant_bookings WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return 'Deleted restaurant booking.';
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      })
    },
    getRestaurantBooking: function (id) {
        return pool.getConnection()
        .then(conn => {
            return conn.query("SELECT * FROM restaurant_bookings WHERE id = ?;", [id])
        }).then((res) => {
            console.log(res);
            return res;
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      });
    },
    getAllBookings: function () {
        return pool.getConnection()
        .then(conn => {
            return conn.query("SELECT * FROM restaurant_bookings;")
        }).then((res) => {
            console.log(res);
            return res;
      }).catch(err => {
          console.log(err);
          return 'An error occurred.';
      });
    }
};
