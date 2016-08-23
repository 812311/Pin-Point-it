/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "lugar": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "_updatedAt": {
                    "type": "string"
                },
                "_createdAt": {
                    "type": "string"
                },
                "_id": {
                    "type": "string"
                },
                "userID": {
                    "type": "string"
                },
                "location": {
                    "type": "string"
                }
            }
        }
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "markerLng": new $a.LocalStorage("markerLng", "String"),

    "markerLat": new $a.LocalStorage("markerLat", "String"),

    "currentLng": new $a.LocalStorage("currentLng", "String"),

    "currentLat": new $a.LocalStorage("currentLat", "String"),

    "access_token": new $a.LocalStorage("access_token", "String"),

    "destination": new $a.LocalStorage("destination", "lugar"),

    "facebook_token": new $a.LocalStorage("facebook_token", "String"),

    "local": new $a.LocalStorage("local", "String"),

    "here": new $a.LocalStorage("here", "String")
};