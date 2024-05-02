import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const columns = [
  { id: "OrderID", label: "Order ID", minWidth: 100 },
  { id: "Ordernuber", label: "Order nuber", minWidth: 120 },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
  },
  {
    id: "item",
    label: "item",
    minWidth: 50,
  },
  {
    id: "customername",
    label: "customer name",
    minWidth: 150,
  },
  {
    id: "Shippingservice",
    label: "Shipping service",
    minWidth: 150,
  },
  {
    id: "Trackingcode",
    label: "Tracking code",
    minWidth: 150,
  },
];
const TrackYourOrder = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
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
  const OrdersList = [
    {
      orderId: 59217,
      orderNum: 59217342,
      status: "New order",
      item: 1,
      customerName: "Cody Fisher",
      shippingService: "Standard",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59213,
      orderNum: 59217343,
      status: "Inproduction",
      item: 2,
      customerName: "Kristin Watson",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59219,
      orderNum: 59217344,
      status: "Shipped",
      item: 12,
      customerName: "Esther Howard",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59220,
      orderNum: 59217345,
      status: "Cancelled",
      item: 22,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59223,
      orderNum: 59217346,
      status: "Rejected",
      item: 32,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59217,
      orderNum: 59217342,
      status: "New order",
      item: 1,
      customerName: "Cody Fisher",
      shippingService: "Standard",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59213,
      orderNum: 59217343,
      status: "Inproduction",
      item: 2,
      customerName: "Kristin Watson",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59219,
      orderNum: 59217344,
      status: "Shipped",
      item: 12,
      customerName: "Esther Howard",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59220,
      orderNum: 59217345,
      status: "Cancelled",
      item: 22,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59223,
      orderNum: 59217346,
      status: "Rejected",
      item: 32,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59217,
      orderNum: 59217342,
      status: "New order",
      item: 1,
      customerName: "Cody Fisher",
      shippingService: "Standard",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59213,
      orderNum: 59217343,
      status: "Inproduction",
      item: 2,
      customerName: "Kristin Watson",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59219,
      orderNum: 59217344,
      status: "Shipped",
      item: 12,
      customerName: "Esther Howard",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59220,
      orderNum: 59217345,
      status: "Cancelled",
      item: 22,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 59223,
      orderNum: 59217346,
      status: "Rejected",
      item: 32,
      customerName: "Jenny Wilson",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Express",
      trackingCode: "940010010936113003113",
    },
    {
      orderId: 592182,
      orderNum: 59217346,
      status: "Draft",
      item: 41,
      customerName: " Kristin Watson ",
      shippingService: "Priority",
      trackingCode: "940010010936113003113",
    },
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
                  <TableContainer sx={{ maxHeight: "65vh" }}>
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
                        {OrdersList.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).map((row, i) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              <TableCell>
                                <p className="track-your-order-table-text">
                                  {row.orderId}
                                </p>
                              </TableCell>
                              <TableCell>
                                <p className="track-your-order-table-text">
                                  {row.orderNum}
                                </p>
                              </TableCell>
                              <TableCell>
                                <div className="track-your-order-table-status">
                                  <div
                                    style={{
                                      backgroundColor:
                                        row.status === "New order"
                                          ? "#DBEAFE"
                                          : row.status === "Inproduction"
                                          ? "#FEF3C7"
                                          : row.status === "Shipped"
                                          ? "#D1FAE5"
                                          : row.status === "Cancelled"
                                          ? "#FCE7F3"
                                          : row.status === "Rejected"
                                          ? "#FEE2E2"
                                          : "#F3F4F6",
                                      color:
                                        row.status === "New order"
                                          ? "#1E40AF"
                                          : row.status === "Inproduction"
                                          ? "#92400E"
                                          : row.status === "Shipped"
                                          ? "#065F46"
                                          : row.status === "Cancelled"
                                          ? "#9D174D"
                                          : row.status === "Rejected"
                                          ? "#991B1B"
                                          : "#1F2937",
                                      borderColor:
                                        row.status === "New order"
                                          ? "#93C5FD"
                                          : row.status === "Inproduction"
                                          ? "#FCD34D"
                                          : row.status === "Shipped"
                                          ? "#6EE7B7"
                                          : row.status === "Cancelled"
                                          ? "#F9A8D4"
                                          : row.status === "Rejected"
                                          ? "#FCA5A5"
                                          : "#D1D5DB",
                                    }}
                                  >
                                    {row.status}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <p className="track-your-order-table-text">
                                  {row.item}
                                </p>
                              </TableCell>
                              <TableCell>
                                <p className="track-your-order-table-text">
                                  {row.customerName}
                                </p>
                              </TableCell>
                              <TableCell>
                                <div className="track-your-order-table-ship-ser">
                                  <FaCircle
                                    style={{
                                      color:
                                        row.shippingService === "Standard"
                                          ? "#A78BFA"
                                          : row.shippingService === "Priority"
                                          ? "#22D3EE"
                                          : "#F87171",
                                      height: "8px",
                                      marginRight: "5px",
                                    }}
                                  />
                                  <p className="track-your-order-table-text">
                                    {row.shippingService}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <p className="track-your-order-table-text">
                                  {row.trackingCode}
                                </p>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={OrdersList.length}
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
