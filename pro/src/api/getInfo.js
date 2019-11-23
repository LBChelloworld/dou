import * as API from "./index";

//获取菜单信息
export const getMenu=(params)=>{
    return API.GET('/menu',params);
}

//获取菜单详情
export const getMenuDetail=(params)=>{
    return API.GET('/menu/detail',params);
}

//获取分类信息
export const getClass=(params)=>{
    return API.GET('/getclass',params);
}

//获取食材详情
export const getFoodDetail=(params)=>{
    return API.GET('/getOneFood',params);
}

//获取文章信息
export const getArticle=(params)=>{
    return API.GET('/gettitle',params);
}

//获取动漫信息
export const getAnimate=(params)=>{
    return API.GET('/getanimate',params);
}

//模糊查询菜单
export const Search=(params)=>{
    return API.POST('/menu/search',params);
}

//查询单个用户信息
export const showUser=(params)=>{
    return API.GET('/users/showUser',params);
}

//随机显示5个用户
export const showVip=(params)=>{
    return API.GET('/users/showVip',params);
}

//获取粉丝数
export const getFans=(params)=>{
    return API.GET('/users/getFansNum',params);
}

//收藏菜单
export const Collect=(params)=>{
    return API.POST('/users/Collect',params);
}

//修改收藏量
export const updateCollect=(params)=>{
    return API.POST('/menu/updateCollect',params);
}

//取消收藏
export const cancelCollect=(params)=>{
    return API.POST('/users/cancelCollect',params);
}

//关注用户
export const See=(params)=>{
    return API.POST('/users/See',params);
}

//取消关注
export const cancelSee=(params)=>{
    return API.POST('/users/cancelSee',params);
}

//查询是否收藏了这个菜
export const searchCollect=(params)=>{
    return API.POST('/menu/searchCollect',params);
}

//是否关注了这个用户 
export const ifSee=(params)=>{
    return API.POST('/users/ifSee',params);
}

//批量查询菜单
export const pageMenu = (params)=>{
    return API.GET('/users/pageMenu',params);
}