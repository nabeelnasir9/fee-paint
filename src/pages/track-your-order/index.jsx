import { useState } from "react";
import axios from "axios";
import { Layout } from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IoSearchSharp } from "react-icons/io5";
import { InfinitySpin } from "react-loader-spinner";

const columns = [
  { id: "Order Number", label: "Order Number", minWidth: 50 },
  { id: "items", label: "Items", minWidth: 110 },
  { id: "status", label: "Stripe Status", minWidth: 30 },
  { id: "quantity", label: "Quantity", minWidth: 30 },
  { id: "delivery", label: "Delivery Status", minWidth: 50 },
  { id: "Price", label: "Price", minWidth: 30 },
];

const TrackYourOrder = () => {
  const [searchUuid, setSearchUuid] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/order/${searchUuid}`,
      );
      setOrderData(response.data);
    } catch (error) {
      console.error("Error fetching order:", error);
      setOrderData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  // const StatusList = [
  //   "New order",
  //   "Inproduction",
  //   "Shipped",
  //   "Cancelled",
  //   "Rejected",
  //   "Draft",
  // ];

  return (
    <Layout contact={true}>
      <div className="gradient-bg-img">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="pages-data-container">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1 className="text-black/50 font-semibold text-xl mb-5">
                    Enter your tracking ID below to track your order
                  </h1>
                  <div className="track-your-order-header">
                    <select className="track-your-order-id-dropdown">
                      <option>Tracking ID</option>
                    </select>
                    <div className="track-your-order-search">
                      <input
                        type="search"
                        placeholder="Search"
                        value={searchUuid}
                        onChange={(e) => setSearchUuid(e.target.value)}
                      />
                      <IoSearchSharp
                        className="text-black/50 hover:text-black cursor-pointer"
                        onClick={handleSearch}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="track-your-order-table-main">
                <Paper
                  sx={{ width: "100%" }}
                  style={{ backgroundColor: "#fff" }}
                >
                  <TableContainer sx={{ maxHeight: "65vh", height: "65vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                minWidth: column.minWidth,
                                backgroundColor: "#F9FAFB",
                              }}
                            >
                              <p className="track-your-order-table-header-title">
                                {column.label}
                              </p>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody style={{ backgroundColor: "#fff" }}>
                        {isLoading ? (
                          <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                              <div className="flex items-center justify-center">
                                <InfinitySpin color="#587cdd" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : orderData ? (
                          <TableRow
                            className="animate-fade"
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={orderData._id}
                          >
                            <TableCell>
                              <p className="track-your-order-table-text">1</p>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2 w-30 h-30 flex-wrap">
                                {orderData.lineItems.map((item, index) => (
                                  <img
                                    className="object-cover w-20 h-20 rounded-lg mb-2"
                                    key={index}
                                    src={item.price_data.product_data.images[0]}
                                    alt={`Item ${index}`}
                                  />
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="track-your-order-table-text">
                                Completed
                              </p>
                            </TableCell>
                            <TableCell>
                              <p className="track-your-order-table-text">
                                {orderData.lineItems.length}
                              </p>
                            </TableCell>
                            <TableCell>
                              <div className="track-your-order-table-status">
                                <div
                                  style={{
                                    backgroundColor:
                                      orderData.delivery_status === "Expected"
                                        ? "#DBEAFE"
                                        : orderData.delivery_status ===
                                            "Inproduction"
                                          ? "#FEF3C7"
                                          : orderData.delivery_status ===
                                              "Shipped"
                                            ? "#D1FAE5"
                                            : orderData.delivery_status ===
                                                "Cancelled"
                                              ? "#FCE7F3"
                                              : orderData.delivery_status ===
                                                  "Rejected"
                                                ? "#FEE2E2"
                                                : "#F3F4F6",
                                    color:
                                      orderData.delivery_status === "Expected"
                                        ? "#1E40AF"
                                        : orderData.delivery_status ===
                                            "Inproduction"
                                          ? "#92400E"
                                          : orderData.delivery_status ===
                                              "Shipped"
                                            ? "#065F46"
                                            : orderData.delivery_status ===
                                                "Cancelled"
                                              ? "#9D174D"
                                              : orderData.delivery_status ===
                                                  "Rejected"
                                                ? "#991B1B"
                                                : "#1F2937",
                                    borderColor:
                                      orderData.delivery_status === "Expected"
                                        ? "#93C5FD"
                                        : orderData.delivery_status ===
                                            "Inproduction"
                                          ? "#FCD34D"
                                          : orderData.delivery_status ===
                                              "Shipped"
                                            ? "#6EE7B7"
                                            : orderData.delivery_status ===
                                                "Cancelled"
                                              ? "#F9A8D4"
                                              : orderData.delivery_status ===
                                                  "Rejected"
                                                ? "#FCA5A5"
                                                : "#D1D5DB",
                                  }}
                                >
                                  {orderData.delivery_status}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="track-your-order-table-text">
                                $
                                {(
                                  orderData.lineItems.reduce(
                                    (total, item) =>
                                      total + item.price_data.unit_amount,
                                    0,
                                  ) / 100
                                ).toFixed(2)}
                              </p>
                            </TableCell>
                          </TableRow>
                        ) : (
                          <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                              <p className="track-your-order-table-text">
                                No data to display
                              </p>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={orderData ? 1 : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    style={{
                      backgroundColor: "#fff",
                      color: "#6B7280",
                      fontFamily: "Inter",
                    }}
                  />
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default TrackYourOrder;
