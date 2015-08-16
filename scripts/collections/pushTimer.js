App.Collections.PushTimer = Backbone.Collection.extend({
    model: App.Models.PushTimer,
    url: '/api/debug/pushtimer'
});
