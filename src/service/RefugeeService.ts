import axios from "axios";
import type { CampDto, RefugeeDto } from "../dto/RefugeeDto";

const BACKEND_REF_API="http://localhost:8090/api/refugee";


axios.interceptors.request.use(function (config){
    config.headers['Authorization']=getToken();
    // config.headers['Authorization']=getToken();
    return config;
},function(error){
    return Promise.reject(error);
});

// export const createImage=(imageDto:ImageDto)=>
//     axios.post(`${BAC_IMG_API}/created`,imageDto,{headers:{"Content-Type": "multipart/form-data"}});

export const getAllRefugees=()=>
axios.get<RefugeeDto[]>(`${BACKEND_REF_API}/all-refugees`);

export const getAllCamps=()=>
axios.get<CampDto[]>(`${BACKEND_REF_API}/all-camps`);

export const getById=(id:number)=>
    axios.get<CampDto>(`${BACKEND_REF_API}/camp/${id}`);

export const refugeeById=(id:number)=>
    axios.get<RefugeeDto>(`${BACKEND_REF_API}/${id}`);

export const createCamp=(campDto:CampDto)=>
    axios.post<CampDto>(`${BACKEND_REF_API}/camp-created`,campDto);

export const createRefugee=(refugeeDto:RefugeeDto)=>
    axios.post<RefugeeDto>(`${BACKEND_REF_API}/ref-created`,refugeeDto);







export const login = (username: string, password: string) =>
    axios.post(`${BACKEND_REF_API}/login`, { username, password }).then(res => res.data);

export const getByName = (username: string) =>
    axios.get(`${BACKEND_REF_API}/search?username=${username}`);

export const setLoggedInUserName=(username:string)=>{
    sessionStorage.setItem("loggedInUserName",username)
}

export const getLoggedInUserName=()=>{
    return sessionStorage.getItem("loggedInUserName");
}

export const isLoggedIn=()=>{
    return getLoggedInUserName() !== null;
}

export const setToken=(token:string)=>{
    localStorage.setItem("token", token);
}

export const getToken=()=>{
    return localStorage.getItem("token");
}

export const logOut=()=>{
    sessionStorage.removeItem("loggedInUserName");
    localStorage.removeItem("token");
}