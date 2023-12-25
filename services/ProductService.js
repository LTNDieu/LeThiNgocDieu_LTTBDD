import httpAxios from "../httpAxios";

function getProductHome(limit, category_id)
{
    return httpAxios.get(`product/product_home/${limit}/${category_id}`);
}

function getProductAll(limit)
{
    return httpAxios.get(`product/product_all/${limit}`);
}

function getProductCategoryId(limit, category_id)
{
    return httpAxios.get(`product/product_category/${limit}/${category_id}`);
}

function getProductBrandId(limit, brand_id)
{
    return httpAxios.get(`product/product_brand/${limit}/${brand_id}`);
}

function getProductBySlug(slug)
{
    return httpAxios.get(`product/product_detail/${slug}`);
}

//Admin lay tat ca du lieu
function getAll()
{
    return httpAxios.get('product/index');
}

function getById(id)
{
    return httpAxios.get('product/show/'+id);
}
function create(data)
{
    return httpAxios.post('product/store', data);
}
function update(data, id)
{
    return httpAxios.post('product/update/'+id, data);
}
function remove(id)
{
    return httpAxios.delete('product/destroy/'+id);
}
const ProductService={
    getProductAll:getProductAll,
    getProductCategoryId:getProductCategoryId,
    getProductBrandId:getProductBrandId,
    getProductHome:getProductHome,
    getProductBySlug:getProductBySlug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
};
export default ProductService;