import { useGetAllProductsQuery, useGetSingleProductQuery, usePostDataMutation } from "../redux/slice/productSlice";

const Data = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  const {
    data: singleProduct,
    errors,
    isErrors,
    isLoadingSingleProduct,
  } = useGetSingleProductQuery(1);
  const [postData] = usePostDataMutation();
  console.log(allProductsData);
  console.log(singleProduct);
  const handleSubmit = () => {
    postData({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
  }
  return (
    <div>
      <div>
        Data
      </div>
      {isLoading ? <div> Loading...</div> : <>{Array.isArray(allProductsData) && allProductsData.map((product) => {
        return (
          <div>{product.title}</div>
        )
      })}</>}
      {isLoadingSingleProduct ? <p>Loading....</p> : <div>{singleProduct?.id}</div>}
    </div>
  )
}
export default Data;