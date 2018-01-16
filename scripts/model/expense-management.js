const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const getImage = require("../lib/getImage");
const converterJSON = require("../lib/convertFileToJsonObj");
const Timer = require("sf-core/global/timer");

exports.getPendingExpenseApprovals = getPendingExpenseApprovals;
exports.getApprovedExpenseApprovals = getApprovedExpenseApprovals;
exports.getExpenses = getExpenses;

function getPendingExpenseApprovals(request, callback) {

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }
            try {
                var filePath = "../mock/getPendingExpenseApprovals.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    JSONobj.forEach(function(item) {
                        item.image = getImage(item.image);
                    });

                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });
    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "pendingexpenseapprovals"
    // }), {
    //     method: "GET",
    //     onLoad: function(response) {
    //         var responseBody = response.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //             responseBody.forEach(function(item) {
    //                 item.image = getImage(item.image);
    //             });
    //         }
    //         finally {}
    //         callback && callback(null, responseBody);
    //     },
    //     onError: function(e) {
    //         var responseBody = e.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //         }
    //         finally {}
    //         callback && callback(responseBody);
    //     }

    // });
    // if (request)
    //     requestOptions.body = JSON.stringify(request);

    // Http.request(requestOptions);
}

function getApprovedExpenseApprovals(request, callback) {



    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }
            try {
                var filePath = "../mock/getApprovedExpenseApprovals.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {

                    JSONobj.forEach(function(item) {
                        item.image = getImage(item.image);
                    });

                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "approvedexpenseapprovals"
    // }), {
    //     method: "GET",
    //     onLoad: function(response) {
    //         var responseBody = response.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //             responseBody.forEach(function(item) {
    //                 item.image = getImage(item.image);
    //             });
    //         }
    //         finally {}
    //         callback && callback(null, responseBody);
    //     },
    //     onError: function(e) {
    //         var responseBody = e.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //         }
    //         finally {}
    //         callback && callback(responseBody);
    //     }

    // });
    // if (request)
    //     requestOptions.body = JSON.stringify(request);

    // Http.request(requestOptions);
}

function getExpenses(request, callback) {

    var myTimer = Timer.setTimeout({
        task: function() {
            if (!callback && request) {
                callback = request;
                request = null;
            }
            try {
                var filePath = "../mock/getExpenses.json";

                var JSONobj = converterJSON.convertFileToJson(filePath);
                if (JSONobj) {
                    callback && callback(null, JSONobj);
                }
                else {
                    callback(JSONobj);
                }
            }
            finally {}
        },
        delay: 200
    });

    // var requestOptions = Object.assign(mcs.createRequestOptions({
    //     apiName: "SelfService",
    //     endpointPath: "expenses"
    // }), {
    //     method: "GET",
    //     onLoad: function(response) {
    //         var responseBody = response.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //         }
    //         finally {}
    //         callback && callback(null, responseBody);
    //     },
    //     onError: function(e) {
    //         var responseBody = e.body.toString();
    //         try {
    //             responseBody = JSON.parse(responseBody);
    //         }
    //         finally {}
    //         callback && callback(responseBody);
    //     }
    // });
    // if (request)
    //     requestOptions.body = JSON.stringify(request);

    // Http.request(requestOptions);
}
