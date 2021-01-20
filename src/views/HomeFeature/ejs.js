export default [
    {
        path:"/Feature",
        name:"Feature",
        component:()=>import("./Feature"),
        meta:{
            title:"特色课"
        },
    },
    {
        path:"/Tutorship",
        name:"Tutorship",
        component:()=>import("./Tutorship"),
        meta:{
            title:"辅导"
        },
    },
    {
        path:"/Details",
        name:"Details",
        component:()=>import("./Details"),
        meta:{
            title:"老师详情"
        },
    },
]