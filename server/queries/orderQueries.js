module.exports={
    showOrdersList: "SELECT * FROM show_orders_list($1)",
    dropOrder: "UPDATE Orders SET is_delete = $1 WHERE order_id = $2"
}