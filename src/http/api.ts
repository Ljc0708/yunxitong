import $http from ".";
//登录接口
interface LoginData {
    userName: string
    password: string
}
export const login = (data: LoginData) => $http({
    url: "/base/login",
    method: "post",
    data
})


// export const login = data => $http({
//     url: "/base/login",
//     method: "post",
//     data
// })