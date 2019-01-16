module.exports={
    showOrdersList: "SELECT * FROM orders WHERE factory_id=$1 AND is_delete=false",
    dropOrder: "UPDATE Orders SET is_delete = $1 WHERE order_id = $2"
}