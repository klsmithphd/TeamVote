var teamsData = [
    {
        teamId : 1,
        teamName : 'Exhibit' 
        teamMembers : 'Nathan, James, Jon'
    },
    {
        teamId : 2,
        teamName : 'Catnip'
        teamMembers: 'Pete, Chris G, Craig, Jason, Derek, Yoshi, David L, Kris'
    },
    {
        teamId : 3,
        teamName : 'Project Timelines'
        teamMembers: 'Ken I, Kevin Chu'
    },
    {
        teamId: 4,
        teamName: 'MapMash'
        teamMembers: 'Andrew M'
    },
    {
        teamId: 5,
        teamName: 'UI Test Generator'
        teamMembers: 'David T'
    },
    {
        teamId: 6,
        teamName: 'Quick Cliplet'
        teamMembers: 'Travis'
    },
    {
        teamId: 7,
        teamName: 'Mission Control'
        teamMembers: 'Chris T'
    }
];

Template.teamsList.helpers({
    teams : teamsData
});