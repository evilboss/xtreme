/*****************************************************************************/
/* Sales: Event Handlers */
/*****************************************************************************/
Template.Sales.events({
});

/*****************************************************************************/
/* Sales: Helpers */
/*****************************************************************************/
Template.Sales.helpers({
});

/*****************************************************************************/
/* Sales: Lifecycle Hooks */
/*****************************************************************************/
Template.Sales.created = function () {
};

Template.Sales.rendered = function () {
    function drawChart() {
        //clear the contents of the div, in the event this function is called more than once.
        $('#myfirstchart').empty();

        var data = [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ];

        //example of how to load data from a collection that already contains data in the appropriate format
        //var data = MyCollection.find({}, {fields: { year: 1, value: 1}, {sort: year: 1}}).fetch();

        if (data) {
            new Morris.Line({
                // ID of the element in which to draw the chart.
                element: 'myfirstchart',
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data:    data,
                // The name of the data record attribute that contains x-values.
                xkey:    'year',
                // A list of names of data record attributes that contain y-values.
                ykeys:   ['value'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels:  ['Value'],
                resize:  true
            });
        }
    }

};

Template.Sales.destroyed = function () {
};
