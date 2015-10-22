/*****************************************************************************/
/* Invoice: Event Handlers */
/*****************************************************************************/

Template.Print.helpers({
    'today':function(){
        return moment(Date.now()).format('MM/DD/YYYY');

    }
    /*TODO: Make this a global helper*/
});

Template.Print.rendered = function () {
    window.print();
};
