const BASE_URL = 'localhost:3000';

async function callApi(method, url, body) {
    const response = await fetch(BASE_URL + url, {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}

async function getUser(emailAddress) {
    return await callApi('GET', '/user', {
        emailAddress: emailAddress
    });
}

async function createUser(username, emailAddress, password) {
    return await callApi('POST', '/user', {
        username: username,
        emailAddress: emailAddress,
        password: password
    });
}

async function updateUser(username, emailAddress, password) {
    return await callApi('PATCH', '/user', {
        username: username,
        emailAddress: emailAddress,
        password: password
    });
}

async function deleteUser(emailAddress) {
    return await callApi('DELETE', '/user', {
        emailAddress: emailAddress
    });
}

async function createRestaurant(name, desc, location, lat, long, tableNum) {
    return await callApi('POST', '/restaurant', {
        name: name,
        desc: desc,
        location: location,
        latitude: lat,
        longitude: long,
        tableAmount: tableNum
    });
}

async function deleteRestaurant(name) {
    return await callApi('DELETE', '/restaurant', {
        name: name
    });
}

async function updateRestaurant(name, desc, location, lat, long, rating, tableNum) {
    return await callApi('PATCH', '/restaurant', {
        name: name,
        desc: desc,
        location: location,
        latitude: lat,
        longitude: long,
        rating: rating,
        tableAmount: tableNum
    });
}

async function getRestaurant(name) {
    return await callApi('GET', '/restaurant', {
        name: name
    });
}

async function getAllRestaurants() {
    return await callApi('GET', '/restaurant/all');
}

async function createReview(restId, userId, rating, review) {
    return await callApi('POST', '/review', {
        restaurantId: restId,
        userId: userId,
        rating: rating,
        review: review
    });
}

async function deleteReview(reviewId) {
    return await callApi('DELETE', '/review', {
        reviewId: reviewId
    });
}

async function getRestaurantReviews(restName) {
    return await callApi('GET', '/review/restaurant', {
        restaurantName: restName
    });
}

async function createBooking(restaurantId, userId, tabNum, time) {
    return await callApi('POST', '/booking', {
        restaurantId: restaurantId,
        userId: userId,
        tableNumber: tabNum,
        time: time
    });
}

async function deleteBooking(bookingId) {
    return await callApi('DELETE', '/booking', {
        bookingId: bookingId
    });
}

async function editBooking(bookingId, tabNum, time) {
    return await callApi('PATCH', '/booking', {
        bookingId: bookingId,
        tableNumber: tabNum,
        time: time
    });
}

async function getBooking(bookingId) {
    return await callApi('GET', '/booking', {
        bookingId: bookingId
    });
}

async function getBookings(restaurantId) {
    return await callApi('GET', '/booking/restaurant', {
        restaurantId: restaurantId
    });
}