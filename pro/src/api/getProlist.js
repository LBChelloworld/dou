import * as API from "./index";
//登录
export const login = (params)=>{
    return API.POST('/mn_login',params)
}
//-----------------------------------------------------------


// export const getPro=(params)=>{
//     return API.GET('/getAllProd',params);
// }

//获取商品列表
export const getPro=(params)=>{
    return API.GET('/getAllProd',params);
}
//商品详情
export const getProDtl=(params)=>{
    return API.GET('/api/v1/admin/products/'+id,{});
}
//删除商品
export const delPro=(pid)=>{
    return API.POST('/deleteProd',{"pid":pid})
}
//修改商品
export const revPro=(params)=>{
    return API.POST('/updateProd',params)
}
//添加商品
export const addPro=(params)=>{
    return API.POST('/addProd',params)
}
//----------------------------------------------------------

//获取用户信息
export const getUser=(params)=>{
    return API.GET('/getAllUser',params);
}
//修改用户
export const updateUsers=(params)=>{
    return API.POST('/updateUsers',params)
}
//添加用户
export const addUser=(params)=>{
    return API.POST('/addUser',params)
}
//删除用户
export const delUser=(params)=>{
    return API.GET('/deleteUser',params)
}

//----------------------------------------------------------

//获取订单信息
export const getOrder=(params)=>{
    return API.GET('/api/v1/admin/orders',params);
}
//修改订单
export const revOrder=(id,params)=>{
    return API.PUT('/api/v1/admin/orders/'+id,params)
}
//添加订单
export const addOrder=(params)=>{
    return API.POST('/api/v1/admin/orders',params)
}
//删除订单
export const delOrder=(id)=>{
    return API.DELETE('/api/v1/admin/orders/'+id)
}