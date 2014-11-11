Template.ballot.events({
    'submit form': function(e) {
        e.preventDefault();
        console.log( $(e.target).find('[name=options1]:checked').val() );
        console.log( $(e.target).find('[name=options2]:checked').val() );
        console.log( $(e.target).find('[name=options3]:checked').val() );
        console.log( e );
    }
});