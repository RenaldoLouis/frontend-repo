// "use client"

// import "@/app/globals.css";
// import Image from "next/image";
// import { Suspense, useEffect, useState } from "react";
// import styles from "@/styles/products.module.css";
// import commonStyles from "@/styles/common.module.css";
// import withAuthCustom from "@/utils/withAuthCustom";
// import Navbar from "@/components/molecules/Navbar";
// import LayoutHome from "../components/atom/layout";
// import { categories, product } from "@/apis";

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import ProductCard from "@/components/molecules/ProductCard";

// import Button from '@mui/joy/Button';

// const Products = () => {
//     const [productsData, setProductsData] = useState([])
//     const [showData, setShowData] = useState([])
//     const [page, setPage] = useState(1);
//     const [countPage, setCountPage] = useState(0);
//     const [categoryList, setCategoryList] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [openSnackbar, setOpenSnackbar] = useState(false);

//     const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");

//     const getAllProducts = () => {
//         product.getAllProducts().then((res: any) => {
//             setProductsData(res.data)

//             let tempCountPage = Math.ceil(res.data.length / 6);
//             setCountPage(tempCountPage)
//             let firstSixData = res.data.slice(0, 6)
//             setShowData(firstSixData)

//             setIsLoading(false)
//         })
//     }

//     useEffect(() => {
//         setIsLoading(true)
//         getAllProducts()
//     }, [])

//     useEffect(() => {
//         setIsLoading(true)
//         categories.getAllCategories().then((res: any) => {
//             let uniqueCategories = res.data;;
//             uniqueCategories.splice(0, 0, 'All');
//             setCategoryList(uniqueCategories)
//         })
//     }, [])

//     // To get new list productdata Based on the filter
//     useEffect(() => {
//         if (selectedCategoryFilter !== "" && selectedCategoryFilter !== "All") {
//             setIsLoading(true)
//             product.getProductByCategory(selectedCategoryFilter).then((res: any) => {
//                 setProductsData(res.data)
//                 setIsLoading(false)
//             })
//         } else if (selectedCategoryFilter === "All") {
//             setPage(1);
//             getAllProducts()
//         }
//     }, [selectedCategoryFilter])

//     // To process what data to show and update pagination after get new filtered ProductsData
//     useEffect(() => {
//         if (selectedCategoryFilter !== "") {
//             let tempCountPage = Math.ceil(productsData.length / 6);
//             setCountPage(tempCountPage)
//             let firstSixData = productsData.slice(0, 6)
//             setShowData(firstSixData)
//             // setIsLoading(false)
//         }
//     }, [productsData, selectedCategoryFilter])

//     const getItemsForPage = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
//         setPage(pageNumber);
//         const startIndex = (pageNumber - 1) * 6;
//         const endIndex = startIndex + 6;
//         let newData = productsData.slice(startIndex, endIndex);
//         setShowData(newData)
//     };

//     const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpenSnackbar(false);
//     };

//     const action = (
//         <>
//             <IconButton
//                 size="small"
//                 aria-label="close"
//                 color="inherit"
//                 onClick={handleClose}
//             >
//                 <CloseIcon fontSize="small" />
//             </IconButton>
//         </>
//     );

//     const handleChange = (event: SelectChangeEvent) => {
//         setIsLoading(true)
//         setSelectedCategoryFilter(event.target.value as string);
//     };

//     const handleDelete = (itemId: any) => {
//         product.deleteProductById(itemId).then((res) => {
//             let tempDuplicate = [...showData]
//             let newShowData = tempDuplicate.filter((eachData: any) => eachData.id !== itemId)
//             setShowData(newShowData)

//             let tempDuplicateProductsData = [...productsData]
//             let newProductData = tempDuplicateProductsData.filter((eachData: any) => eachData.id !== itemId)
//             setProductsData(newProductData)

//             setOpenSnackbar(true);
//         })
//     }

//     return (
//         <LayoutHome>
//             <Suspense fallback={
//                 <div className={`${commonStyles.flexContentCenter} ${commonStyles.fullWidth}`} style={{ height: 300 }}>
//                     <Button loading variant="plain">
//                         Plain
//                     </Button>
//                 </div>}>
//                 <Box sx={{ minWidth: 120 }}>
//                     <FormControl className={`${commonStyles.marginTop16}`} style={{ width: 200 }}>
//                         <InputLabel id="demo-simple-select-label">Category</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={selectedCategoryFilter}
//                             label="Category"
//                             onChange={handleChange}
//                         >
//                             {categoryList.map((eachCategory) => (
//                                 <MenuItem key={eachCategory} value={eachCategory}>{eachCategory}</MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 </Box>
//                 <>
//                     <div >
//                         <Box sx={{ flexGrow: 1 }}>
//                             {isLoading ? (
//                                 <div className={`${commonStyles.flexContentCenter} ${commonStyles.fullWidth}`} style={{ height: 300 }}>
//                                     <Button loading variant="plain">
//                                         Plain
//                                     </Button>
//                                 </div>

//                             ) : (
//                                 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//                                     {showData.length > 0 ? (
//                                         showData.map((eachData: any, index) => (
//                                             <Grid item xs={2} sm={4} md={4} mt={4} key={index}>
//                                                 <ProductCard data={eachData} handleDelete={handleDelete} isAbleToDelete={true} />
//                                             </Grid>
//                                         ))
//                                     ) : (
//                                         <div className={`${commonStyles.flexContentCenter} ${commonStyles.fullWidth}`} style={{ height: 300 }}>
//                                             <div>
//                                                 No Data To Show
//                                             </div>
//                                         </div>
//                                     )}
//                                 </Grid>
//                             )}
//                         </Box>
//                     </div>
//                     <div className={`${commonStyles.flexContentCenter} ${commonStyles.marginTop16}`}>
//                         <Pagination count={countPage} page={page} onChange={getItemsForPage} />
//                     </div>
//                 </>
//             </Suspense>
//             <Snackbar
//                 open={openSnackbar}
//                 autoHideDuration={6000}
//                 onClose={handleClose}
//                 message="Delete Success"
//                 action={action}
//             />
//         </LayoutHome>
//     )
// }

// const ProductsWithAuth = withAuthCustom(Products);
// export default ProductsWithAuth; 
