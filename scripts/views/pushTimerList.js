App.Views.PushTimerList = Backbone.View.extend({
    tagName: 'table',
    template: _.template($('#template-pushTimerList').html()),

    initialize: function () {
        _.bindAll(this, 'render');
    },

    render: function () {
        var $container = this.$el;
        $container.html(this.template());
        App.PushTimers.each(function(pushTimer) {
            new App.Views.PushTimer({
                model: pushTimer,
                $container: $container
            }).render();
        });

        return this;
    }
});