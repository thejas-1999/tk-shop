import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/order.model.js";

//@desc create a new order
//@route Post /api/orders
//@access Private
const addOrerItems = asyncHandler(async (req, res) => {
  res.send(`add order items`);
});

//@desc get logged in users order
//@route GET /api/orders/myorders
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send(`my Orders`);
});

//@desc Get order by ID
//@route GET /api/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send(`get order by id`);
});

//@desc update order to paid
//@route GET /api/orders/:id/pay
//@access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send(`update order to paid`);
});

//@desc update order to delivered
//@route GET /api/orders/:id/deliver
//@access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send(`update order to delivered`);
});

//@desc Get all orders
//@route GET /api/orders/
//@access Private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send(`get all orders`);
});

export {
  addOrerItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
