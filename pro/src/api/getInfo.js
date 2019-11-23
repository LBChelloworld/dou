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
// //商品详情
// export const getProDtl=(params)=>{
//     return API.GET('/api/v1/admin/products/'+id,{});
// }
// //删除商品
// export const delPro=(pid)=>{
//     return API.POST('/deleteProd',{"pid":pid})
// }

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



// export const getAccount;