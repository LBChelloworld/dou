import * as API from "./index";

//获取菜单信息
export const getMenu=(params)=>{
    return API.GET('/menu',params);
}
//获取分类信息
export const getClass=(params)=>{
    return API.GET('/getclass',params);
}

//获取文章信息
export const getArticle=(params)=>{
    return API.GET('/gettitle',params);
}

//获取动漫信息
export const getAnimate=(params)=>{
    return API.GET('/getanimate',params);
}

//获取药品信息
export const getmedicine=(params)=>{
    return API.GET('/getmedicine',params);
}

//查询手机号
export const getphone=(params)=>{
    return API.POST("/users/phone",params)
}

//查询名字
export const getname=(params)=>{
    return API.POST("/users/name",params)
}

//用户登陆
export const getlogin=(params)=>{
    return API.POST("/users/login",params)
}

//用户注册
export const getregister=(params)=>{
    return API.POST("/users/register",params)
}

//查寻用户信息
export const showUser=(params)=>{
    return API.GET("/users/showUser",params)
}

//查询关注数量
export const getSeeNum=(params)=>{
    return API.GET("/users/getSeeNum",params)
}

//查询粉丝数量
export const getFansNum=(params)=>{
    return API.GET("/users/getFansNum",params)
}

//查询收藏菜单id
export const selectCollect=(params)=>{
    return API.POST("/users/selectCollect",params)
}

//查询收藏菜单样子
export const detail=(params)=>{
    return API.GET("/menu/detail",params)
}

//查询关注的人
export const getSee=(params)=>{
    return API.GET("/users/getSee",params)
}

//查看我的粉丝
export const selectFans=(params)=>{
    return API.POST("/users/selectFans",params)
}

//取消关注
export const cancelSee=(params)=>{
    return API.POST("/users/cancelSee",params)
}

//关注
export const See=(params)=>{
    return API.POST("/users/See",params)
}

//是否关注
export const ifSee=(params)=>{
    return API.POST("/users/ifSee",params)
}
