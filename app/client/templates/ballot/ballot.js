Template.ballot.events({
    'submit form': function(e) {
        e.preventDefault();

        var vote = {
            award1: $(e.target).find('[name=options1]:checked').val(),
            award2: $(e.target).find('[name=options2]:checked').val(),
            award3: $(e.target).find('[name=options3]:checked').val()
        };

        vote._id = Votes.insert(vote);
    }
});