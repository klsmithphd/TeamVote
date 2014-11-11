var teamsData = [
    {
        teamId : 1,
        teamName : 'Lunch'
    },
    {
        teamId : 2,
        teamName : 'Foo'
    },
    {
        teamId : 3,
        teamName : 'Bar'
    }
];

Template.teamsList.helpers({
    teams : teamsData
});