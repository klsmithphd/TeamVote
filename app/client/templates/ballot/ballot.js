Template.ballot.events({
    'submit form': function(e) {
        e.preventDefault();

        var vote = {
            creative: $(e.target).find('[name=options1]:checked').val(),
            execution: $(e.target).find('[name=options2]:checked').val(),
            probSolve: $(e.target).find('[name=options3]:checked').val()
        };

        vote._id = Votes.insert(vote);
    }
});