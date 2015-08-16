"use strict";

var App = {
    Models: {},
    Collections: {},
    Views: {},
    PushTimers: null,
    PushTimerList: null
};

$(function () {
    App.PushTimers = new App.Collections.PushTimer();

    App.PushTimerList = new App.Views.PushTimerList();
    $('#display').append(App.PushTimerList.el);

    App.PushTimers.on('add remove', function () {
        App.PushTimerList.render();
    });

    new Backbone.SignalR('pushTimerHub').syncUpdates(App.PushTimers);
    App.PushTimers.fetch();

    $.connection.hub.url = '/api/signalr';
    $.connection.hub.start();
});