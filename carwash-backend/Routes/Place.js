var express = require('express');
var places = express.Router();
var database = require('../Database/database');
var cors = require('cors')
var jwt = require('jsonwebtoken');

places.get('/search-carwash', function(req, res) {

    var appData = {};
    var searchQuery = req.query.query;
console.log(searchQuery);
    database.connection.getConnection(function(err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM places WHERE name LIKE ?', ['%' + searchQuery + '%'], function(err, rows, fields) {
                if (err) {
                    appData.error = 1;
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                } else {
                    if (rows.length > 0) {
                        appData["data"] = rows;
                        appData.error = 0 ;
                        res.status(200).json(appData);
                    } else {
                        appData.error = 1;
                        appData["data"] = "no data found";
                        res.status(204).json(appData);
                    }
                }
            });
            connection.release();
        }
    });
});

places.post('/carwash-place', function(req, res) {
    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    var placeData = {
        "name": req.body.name,
        "address": req.body.address,
        "daily_slot": req.body.daily_slot,
        "available_slot": req.body.available_slot,
        "updated_at": today,
        "created_at": today
    }

    database.connection.getConnection(function(err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO places SET ?', placeData, function(err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "Place saved successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});


places.post('/carwash-booking', function(req, res) {
    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    let placeId = req.body.placeId;
    if(!placeId){
        res.send(400).json({error: 1, data: "Invalid place id"});
    }
    database.connection.getConnection(function(err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM places WHERE id = ?', placeId, function(err, rows, fields) {
                if (!err) {
                    if(!rows){
                        appData.error = 1;
                        appData["data"] = "Place not found";
                        res.send(404).json(appData);
                    }
                    else{
                        if(rows[0].available_slot > 0){
                            connection.query("UPDATE places SET available_slot = IF( DATE(NOW())=DATE(updated_at), available_slot-1, daily_slot-1) WHERE id = ?", placeId, function(err, rows, fields) {
                                console.log(rows);
                                if(rows){
                                    appData.error = 1;
                                    appData["data"] = "Slot Booking successfully!";
                                    res.status(201).json(appData);
                                }
                            })
                        }
                    }
                } else {
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
})

module.exports =places;