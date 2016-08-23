/*
 * Service settings
 */
var location_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5576e1f6e4b0cec9aaf746c9"
}
var Facebook_Settings = {
    "client_id": "1450216385295545",
    "project_id": "7c2c851e-b025-45dd-bee2-747a0b6d6be9"
}
var location_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5576e1f6e4b0cec9aaf746c9"
}

/*
 * Services
 */

var location_signup_service = new Apperyio.RestService({
    'url': '{database_url}/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var location_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var location_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Facebook_MeService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/me',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Facebook_Settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {
            "access_token": "{access_token}"
        },
        "body": null
    }
});

var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var location_locations_read_service2 = new Apperyio.RestService({
    'url': '{database_url}/collections/locations/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {
            "include": "userID"
        },
        "body": null
    }
});

var location_locations_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var location_locations_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var location_locations_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {
            "address": "City of Salvador",
            "sensor": "false"
        },
        "body": null
    }
});