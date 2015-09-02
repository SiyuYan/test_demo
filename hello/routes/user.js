/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.send(JSON.stringify({

        name: "siyu",
        number: 100

    }));
};