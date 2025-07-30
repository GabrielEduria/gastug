export const projects = [
    {
        title: "Rock Paper Scissors",
        slug: "rock-paper-scissors",
        description: "A fun hand game against the computer",
        component: () => import('@/projects/RockPaperScissors'),
    },
    {
        title: "Tetris",
        slug: "tetris",
        description: "Tetris game for a javascript exercise",
        component: () => import('@/projects/Tetris'),
    },
    {
        title: "2048",
        slug: "Tetris",
        description: "2048 game for a javascript exercise",
        component: () => import('@/projects/game2048'),
    },
    {
        title: "To do List",
        slug: "To-Do-List",
        description: "A simple To do List Exercise",
        component: () => import('@/projects/ToDoList'),
    }

]