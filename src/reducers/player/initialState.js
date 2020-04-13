export const INITIAL_STATE = {
    isOpen: false,
    playingState: false,
    progress: 0,
    buffer: 0,
    totalTime: 0,
    items: [],
    //currentItem: undefined
    currentItem: {
        title: "Put It All On Me",
        author: "Ed Sheeran",
        thumbnails: {
            default: {
                url: "https://i.ytimg.com/vi/ryJgDL9jzKk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCV2rWP2ZhIvD4So844JEwKqsNeiw"
            },
            medium: {
                url: "https://i.ytimg.com/vi/ia1iuXbEaYQ/mqdefault.jpg",
                width: 320,
                height: 180
            },
            high: {
                url: "https://i.ytimg.com/vi/ia1iuXbEaYQ/hqdefault.jpg",
                width: 480,
                height: 360
            }
        },
        url: "https://www.youtube.com/watch?v=ryJgDL9jzKk&list=LLRv1FQX6qx8ijEoEl1u0w8Q&index=2&t=0s"
    }
};