var awardsData = [
    {
        awardNum : 1,
        style: 'success',
        icon: 'lightbulb-100.png',
        award: 'Most Creative'
    },
    {
        awardNum : 2,
        style: 'info',
        icon: 'gears.png',
        award: 'Best Execution'
    },
    {
        awardNum : 3,
        style: 'warning',
        icon: 'puzzle.png',
        award: 'Best Problem Solver'
    },
];

Template.awardsList.helpers({
    awards: awardsData
});