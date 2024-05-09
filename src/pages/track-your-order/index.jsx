import React from "react";
import axios from "axios";
import { Layout } from "../../components";
import { useQuery } from "@tanstack/react-query";
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
  { id: "Order Number", label: "order Number", minWidth: 50 },
  {
    id: "items",
    label: "Items",
    minWidth: 110,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 30,
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 30,
  },
  {
    id: "delivery",
    label: "Delivery Status",
    minWidth: 50,
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 30,
  },
];
const TrackYourOrder = () => {
  const getOrders = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const email = localStorage.getItem("email");
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/auth/orders/`,
          {
            params: {
              userEmail: email,
            },
          },
        );
        if (response.status === 200) {
          console.log("User orders:", response.data);
          return response.data;
        }
      } catch (error) {
        console.error("There was a problem fetching the user's orders:", error);
        return null;
      }
    },
  });

  // Return loader if loading
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const StatusList = [
    "New order",
    "Inproduction",
    "Shipped",
    "Cancelled",
    "Rejected",
    "Draft",
  ];
  return (
    <Layout contact={true}>
      <div className="gradient-bg-img">
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid xs={10} sm={10} md={10} lg={10} xl={8}>
            <div className="pages-data-container">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={7} md={5} lg={4} xl={4}>
                  <div className="track-your-order-header">
                    <select className="track-your-order-id-dropdown">
                      <option>Order ID</option>
                    </select>
                    <div className="track-your-order-search">
                      <input type="search" placeholder="Search" />
                      <IoSearchSharp />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3} xl={3}>
                  <select className="track-your-order-status-dropdown">
                    <option value="">Status</option>
                    {StatusList.map((v, i) => {
                      return (
                        <option key={i} value={v}>
                          {v}
                        </option>
                      );
                    })}
                  </select>
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
                        {getOrders.isLoading ? (
                          <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                              <div className="flex items-center justify-center">
                                <InfinitySpin color="#587cdd" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          getOrders?.data
                            ?.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                            )
                            .map((order, i) => (
                              <TableRow
                                className="animate-fade"
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={order._id}
                              >
                                <TableCell>
                                  <p className="track-your-order-table-text">
                                    {i + 1}
                                  </p>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2 w-30 h-30 flex-wrap">
                                    {order.lineItems.map((item, index) => (
                                      <img
                                        className="object-cover w-20 h-20 rounded-lg mb-2"
                                        key={index}
                                        src={
                                          item.price_data.product_data.images[0]
                                        }
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
                                    {order.lineItems.length}
                                  </p>
                                </TableCell>
                                <TableCell>
                                  <div className="track-your-order-table-status">
                                    <div
                                      style={{
                                        backgroundColor:
                                          order.delivery_status === "Expected"
                                            ? "#DBEAFE"
                                            : order.delivery_status ===
                                                "Inproduction"
                                              ? "#FEF3C7"
                                              : order.delivery_status ===
                                                  "Shipped"
                                                ? "#D1FAE5"
                                                : order.delivery_status ===
                                                    "Cancelled"
                                                  ? "#FCE7F3"
                                                  : order.delivery_status ===
                                                      "Rejected"
                                                    ? "#FEE2E2"
                                                    : "#F3F4F6",
                                        color:
                                          order.delivery_status === "Expected"
                                            ? "#1E40AF"
                                            : order.delivery_status ===
                                                "Inproduction"
                                              ? "#92400E"
                                              : order.delivery_status ===
                                                  "Shipped"
                                                ? "#065F46"
                                                : order.delivery_status ===
                                                    "Cancelled"
                                                  ? "#9D174D"
                                                  : order.delivery_status ===
                                                      "Rejected"
                                                    ? "#991B1B"
                                                    : "#1F2937",
                                        borderColor:
                                          order.delivery_status === "Expected"
                                            ? "#93C5FD"
                                            : order.delivery_status ===
                                                "Inproduction"
                                              ? "#FCD34D"
                                              : order.delivery_status ===
                                                  "Shipped"
                                                ? "#6EE7B7"
                                                : order.delivery_status ===
                                                    "Cancelled"
                                                  ? "#F9A8D4"
                                                  : order.delivery_status ===
                                                      "Rejected"
                                                    ? "#FCA5A5"
                                                    : "#D1D5DB",
                                      }}
                                    >
                                      {order.delivery_status}
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <p className="track-your-order-table-text">
                                    $
                                    {(
                                      order.lineItems.reduce(
                                        (total, item) =>
                                          total + item.price_data.unit_amount,
                                        0,
                                      ) / 100
                                    ).toFixed(2)}
                                  </p>
                                </TableCell>
                              </TableRow>
                            ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={getOrders?.data?.length}
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
