import axios from "axios";
import Cookies from 'universal-cookie';

const baseURL = "http://127.0.0.1:8000/api/";
const cookies = new Cookies();

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        Authorization: cookies.get("access_token")
            ? "Bearer " + cookies.get("access_token")
            : null,
        "Content-Type": "application/json",
        accept: "application/json", 
    },
});

axiosInstance.interceptors.response.use(
 (response) => {
   return response;
 },
 async function (error) {
   const originalRequest = error;
   console.log(originalRequest);
   if (typeof error.response === "undefined") {
     alert("a server error happened, we will fix it shortly");
     return Promise.reject(error);
   }
   if (
     error.response.status === 401 &&
     !localStorage.getItem("refresh_token")
   ) {
     window.location.href = "/login/";
     return Promise.reject(error);
   }
   if (
     error.response.status === 401 &&
     error.response.statusText === "Unauthorized" &&
     localStorage.getItem("refresh_token") !== undefined
   ) {
     const refreshToken = localStorage.getItem("refresh_token");
     return axios
       .post("http://127.0.0.1:8000/api-auth/token", {
         client_id: "Your client id ",
         client_secret:
           "Your client secret",
         grant_type: "refresh_token",
         refresh_token: refreshToken,
       })
       .then((response) => {
         localStorage.setItem("access_token", response.data.access_token);
         localStorage.setItem("refresh_token", response.data.refresh_token);
         window.location.reload();
         axiosInstance.defaults.headers["Authorization"] =
           "Bearer " + response.data.access_token;
       })
       .catch((err) => console.log(err));
   }
 }
);

export const facebookLogin = (accessToken) => {
    axios
        .post(`http://127.0.0.1:8000/api-auth/convert-token`, {
            token: accessToken,
            backend: "facebook",
            grant_type: "convert_token",
            client_id: "3561419037316249",
            client_secret: "87f1535ceccfcf288a546f26d480229a",
        })
        .then((res) => {
            cookies.set("access_token", res.data.access, {
                path: "/",
                // httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
            })
            cookies.set("refresh_token", res.data.refresh, {
                path: "/",
                // httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
            })
            console.log(res.data);
        });
}

export const googleLogin = (accessToken) => {
    axios
        .post(`http://127.0.0.1:8000/api-auth/convert-token`, {
            token: accessToken,
            backend: "google-oauth2",
            grant_type: "convert_token",
            client_id: "687505628240-sverv8j1o0n9r14ci19ja6mvmrq9cuu4.apps.googleusercontent.com",
            client_secret: "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",
        })
        .then((res) => {
            cookies.set("access_token", res.data.access, {
                path: "/",
                // httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
            })
            cookies.set("refresh_token", res.data.refresh, {
                path: "/",
                // httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
            })
            console.log(res.data);
        });
}
