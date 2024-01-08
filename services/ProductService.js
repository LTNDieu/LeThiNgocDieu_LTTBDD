import httpAxios from "../httpAxios";

//Admin lay tat ca du lieu
const ProductService = {
    index: ()=>{
        return httpAxios.get("product/index");
    },

    show: (id)=>{
        return httpAxios.get(`product/show/${id}`);
    },

    create: (data)=>{
        return httpAxios.post('product/store', data);
    },

    update: (data, id)=>{
        return httpAxios.post(`product/update/${id}`, data);
    },

    destroy: (id)=>{
        return httpAxios.delete(`product/destroy/${id}`);
    },

    delete: (id)=>{
        return httpAxios.get(`product/delete/${id}`);
    },

    restore: (id)=>{
        return httpAxios.get(`product/restore/${id}`);
    },

    trash: ()=>{
        return httpAxios.get("product/trash");
    },

    status: (id)=>{
        return httpAxios.get(`product/status/${id}`);
    },

};
export default ProductService;



