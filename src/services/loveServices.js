import AxiosClient from "./axiosClient";

const API_ENDPOINT = "TINH_YEU";

export const getLove = () => {
    return AxiosClient.get(API_ENDPOINT);
};
